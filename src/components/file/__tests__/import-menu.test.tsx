import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { RecoilRoot } from 'recoil';

import ImportMenu from '@/components/file/import-menu';
import { Dialog } from '@/components/ui/dialog';
import { RecoilObserver } from '@/lib/test-utils';
import { $currentCode } from '@/state/atoms/atoms';

import { routerPushFunc } from '../../../../jest.setup';

const setCurrentCode = jest.fn();

const setup = () => {
    render(
        <RecoilRoot>
            <Dialog defaultOpen>
                <ImportMenu />
            </Dialog>
            <RecoilObserver node={$currentCode} onChange={setCurrentCode} />
        </RecoilRoot>,
    );
    const input = screen.getByTestId('import-file-input') as HTMLInputElement;
    const importButton = screen.getByText('Import') as HTMLButtonElement;
    return { input, importButton };
};

describe('importMenu', () => {
    describe('Render', () => {
        it('should render the menu', () => {
            const items = setup();
            const title = screen.getByText('Import file');
            expect(title).toBeInTheDocument();
            Object.values(items).forEach((item) =>
                expect(item).toBeInTheDocument(),
            );
        });
    });

    describe('Behavior', () => {
        const file = new File(['console.log(12)'], 'file.js', {
            type: 'text/plain',
        });
        const badFile = new File(['console.log(12)'], 'file.csv', {
            type: 'text/plain',
        });
        const differentFile = new File(['console.log(12)'], 'file.cpp', {
            type: 'text/plain',
        });
        it('should upload file', async () => {
            const { input, importButton } = setup();
            await userEvent.upload(input, file);
            expect(input.files).toBeTruthy();
            expect(input.files![0].name).toBe('file.js');
            //eslint-disable-next-line
            await waitFor(() => expect(importButton).not.toBeDisabled());
        });
        it('should disable import button after invalid file extension', async () => {
            const { input, importButton } = setup();
            await userEvent.upload(input, badFile);
            expect(importButton).toBeDisabled();
        });

        it('should set correct code to recoil atom', async () => {
            const { input, importButton } = setup();
            await userEvent.upload(input, file);
            await userEvent.click(importButton);
            expect(setCurrentCode).toHaveBeenCalledWith('console.log(12)');
            expect(setCurrentCode).not.toHaveBeenCalledWith('wrong code');
        });

        it('should pass different file extension to the search params', async () => {
            const { input, importButton } = setup();
            await userEvent.upload(input, differentFile);
            await userEvent.click(importButton);
            expect(routerPushFunc).toHaveBeenCalledWith(
                expect.stringContaining('cpp'),
            );
            expect(routerPushFunc).not.toHaveBeenCalledWith(
                expect.stringContaining('php'),
            );
        });
    });
});
