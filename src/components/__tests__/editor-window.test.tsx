import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { RecoilRoot } from 'recoil';

import EditorWindow from '@/components/editor-window';
import { RecoilObserver } from '@/lib/test-utils';
import { $currentCode } from '@/state/atoms/atoms';

jest.mock('@monaco-editor/react', () =>
    jest.fn((props) => (
        <textarea
            aria-label="editor window"
            data-auto={props.wrapperClassName}
            onChange={(e) => props.onChange(e.target.value)}
            value={props.value}
        />
    )),
);

const setCurrentCode = jest.fn();

const setup = async (code?: string) => {
    render(
        <RecoilRoot>
            <EditorWindow />
            <RecoilObserver node={$currentCode} onChange={setCurrentCode} />
        </RecoilRoot>,
    );

    const input = await screen.findByLabelText('editor window');

    if (code) {
        await userEvent.type(input, code);
    }

    return { input };
};

describe('Editor window', () => {
    describe('render', () => {
        it('should render the editor window', async () => {
            const { input } = await setup();
            expect(input).toBeInTheDocument();
        });
    });

    describe('Behavior', () => {
        it('should call the setCurrentCode function', async () => {
            const code = 'dummy code';
            await setup(code);

            await waitFor(() =>
                expect(setCurrentCode).toHaveBeenCalledWith(code),
            );
        });
    });
});
