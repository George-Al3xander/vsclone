import '@testing-library/jest-dom';

export const routerPushFunc = jest.fn();
jest.mock('next/navigation', () => ({
    usePathname: () => `localhost:3000/javascript`,
    useSearchParams: jest.fn(),
    useRouter: jest.fn(() => ({ push: routerPushFunc })),
}));
