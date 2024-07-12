import React from 'react';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { RecoilRoot, useSetRecoilState } from 'recoil';

import ExportMenu from '@/components/file/export-menu';
import { Dialog } from '@/components/ui/dialog';
import { RecoilObserver } from '@/lib/test-utils';
import { $currentCode } from '@/state/atoms/atoms';
import { sampleCode } from '@/constants/data';

import * as actions from '../../../lib/actions';

jest.mock('../../../lib/actions');
const setCurrentCode = jest.fn();

const mockExportCodeFn = () => {
    const exportFn = jest.fn();

    jest.spyOn(actions, 'exportCode').mockImplementation(exportFn);

    return { exportFn };
};

const DummyCodeInput = () => {
    const setCurrentCode = useSetRecoilState($currentCode);
    return (
        <input
            onChange={(e) => setCurrentCode(e.target.value)}
            data-testid={'dummy-code-changer'}
            type="text"
        />
    );
};

const setup = async (
    type: 'default' | 'recoilObserve' | undefined = 'default',
    code?: string | undefined,
) => {
    render(
        <RecoilRoot>
            <Dialog defaultOpen>
                <ExportMenu />
            </Dialog>
            {type === 'recoilObserve' && (
                <RecoilObserver node={$currentCode} onChange={setCurrentCode} />
            )}
            {code && <DummyCodeInput />}
        </RecoilRoot>,
    );
    const input = screen.getByPlaceholderText('main') as HTMLInputElement;
    const exportButton = screen.getByText('Export') as HTMLButtonElement;

    if (code) {
        const input = screen.getByTestId('dummy-code-changer');
        await userEvent.type(input, code);
    }

    return { input, exportButton };
};

describe('export-menu', () => {
    describe('Render', () => {
        it('should render the menu', async () => {
            const items = await setup();
            Object.values(items).forEach((item) =>
                expect(item).toBeInTheDocument(),
            );
        });
    });

    describe('Behavior', () => {
        it('should value of the file name input', async () => {
            const fileName = 'my-code';
            const { input } = await setup();
            expect(input).toHaveValue('');
            await userEvent.type(input, fileName);
            expect(input).toHaveValue(fileName);
        });
        describe('Downloading', () => {
            afterEach(() => jest.clearAllMocks());
            it('should download file with the correct default properties', async () => {
                const { exportFn } = mockExportCodeFn();
                const { exportButton } = await setup();
                await userEvent.click(exportButton);
                expect(exportFn).toHaveBeenCalled();
                expect(exportFn).toHaveBeenCalledWith({
                    code: sampleCode['javascript'],
                    language: 'javascript',
                    fileName: undefined,
                });
            });

            it('should download file with the provided properties', async () => {
                const code = 'dummy code';
                const fileName = 'my-code';

                const { exportFn } = mockExportCodeFn();

                const { input, exportButton } = await setup('default', code);
                await userEvent.type(input, fileName);
                await userEvent.click(exportButton);
                expect(exportFn).toHaveBeenCalledWith(
                    expect.objectContaining({ code, fileName }),
                );
            });
        });
    });
});
