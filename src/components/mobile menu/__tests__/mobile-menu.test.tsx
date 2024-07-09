import React from 'react';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { RecoilRoot } from 'recoil';

import { atomBooleanOptions } from '@/components/file/settings-sub-menu';
import MobileMenu from '@/components/mobile menu/mobile-menu';
import { LANGUAGES } from '@/constants/consts';
import { fileManagerDialogs, metadata, titles } from '@/constants/data';

const setup = async (mode: 'default' | 'open' | undefined = 'default') => {
    render(
        <RecoilRoot>
            <MobileMenu />
        </RecoilRoot>,
    );

    const triggerButton = screen.getByLabelText('open menu');
    if (mode === 'open') {
        await userEvent.click(triggerButton);
    }

    return { triggerButton };
};

describe('Mobile Menu', () => {
    describe('Render', () => {
        it('should render the component', async () => {
            const { triggerButton } = await setup();

            expect(triggerButton).toBeInTheDocument();
        });
    });

    describe('Behavior', () => {
        it('should open menu', async () => {
            await setup('open');
            const logo = screen.getByText(metadata.title as string);
            expect(logo).toBeInTheDocument();
        });

        describe('Tabs', () => {
            it('should open the settings tab by the default', async () => {
                await setup('open');
                atomBooleanOptions.forEach(({ title }) =>
                    expect(screen.getByText(title)).toBeInTheDocument(),
                );
                Object.keys(fileManagerDialogs).forEach((key) =>
                    expect(
                        screen.getByText(new RegExp(key, 'i')),
                    ).toBeInTheDocument(),
                );
            });

            it('should open the languages tab', async () => {
                await setup('open');
                const tabTrigger = screen.getByLabelText(
                    'languages tab trigger',
                );
                await userEvent.click(tabTrigger);
                for (const lang of LANGUAGES) {
                    expect(
                        await screen.findByRole('link', {
                            name: expect.stringContaining(titles[lang]),
                        }),
                    ).toBeInTheDocument();
                }
            });
        });
    });
});
