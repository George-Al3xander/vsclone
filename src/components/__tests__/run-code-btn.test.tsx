import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { RecoilRoot } from 'recoil';

import RunCodeBtn from '@/components/run-code-btn';
import { mockFetch, RecoilObserver } from '@/lib/test-utils';
import { $isLoading, $mobileTab, $output } from '@/state/atoms/atoms';
import { ExecuteResponse } from '@/types/types';

const setIsLoading = jest.fn();

const setOutput = jest.fn();

const setTab = jest.fn();

jest.mock('../../lib/actions', () => {
    return {
        __esModule: true,
        ...jest.requireActual('../../lib/actions'),
    };
});
const executeResponse = (output: string, errMsg?: string): ExecuteResponse => ({
    language: 'js',
    version: '12',
    run: {
        stdout: 'Output string',
        stderr: errMsg ?? '',
        code: 0,
        signal: null,
        output,
    },
});

const setup = () => {
    render(
        <RecoilRoot>
            <RunCodeBtn />
            <RecoilObserver node={$isLoading} onChange={setIsLoading} />
            <RecoilObserver node={$output} onChange={setOutput} />
            <RecoilObserver node={$mobileTab} onChange={setTab} />
        </RecoilRoot>,
    );
    const button = screen.getByLabelText('Run code button');

    return { button };
};

describe('Behavior', () => {
    const output = 'test code';

    describe('After a click', () => {
        beforeEach(async () => {
            window.fetch = mockFetch(executeResponse(output));

            const { button } = setup();
            await userEvent.click(button);
        });
        afterEach(() => jest.clearAllMocks());

        it('should change the loading status to true', () => {
            expect(setIsLoading).toHaveBeenNthCalledWith(2, true);
            expect(setIsLoading).toHaveBeenNthCalledWith(3, false);
        });

        it('should call the setOutput function', async () => {
            await waitFor(() => expect(setOutput).toHaveBeenCalled());
        });

        it('should pass the right props to the setOutput function', async () => {
            expect(setOutput).toHaveBeenNthCalledWith(2, output);
        });

        it('should switch tabs', () => {
            expect(setTab).toHaveBeenNthCalledWith(2, 'output');
        });
    });

    describe('After a click: error', () => {
        const errMsg = 'Very bad error';
        beforeEach(async () => {
            window.fetch = mockFetch(executeResponse(output, errMsg));

            const { button } = setup();
            await userEvent.click(button);
        });

        it('should pass an error message to the setOutput function', async () => {
            expect(setOutput).toHaveBeenNthCalledWith(2, errMsg);
        });
    });
});
