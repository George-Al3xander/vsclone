import { useEffect } from 'react';

import { RecoilState, useRecoilValue } from 'recoil';

export const RecoilObserver = ({
    node,
    onChange,
}: {
    //eslint-disable-next-line
    node: RecoilState<any>;
    onChange: jest.Mock;
}) => {
    const value = useRecoilValue(node);
    useEffect(() => onChange(value), [onChange, value]);
    return null;
};

export function mockFetch(data: unknown) {
    return jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => data,
        }),
    );
}
