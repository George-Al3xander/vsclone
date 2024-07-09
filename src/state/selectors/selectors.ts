import { AtomEffect, selector } from 'recoil';

import { $outputPosition } from '@/state/atoms/atoms';
import { TLocalStorageKey } from '@/types/types';

export const $isVertical = selector({
    key: 'GetOutputPositionCheck',
    get: ({ get }) => {
        const position = get($outputPosition);
        return position === 'top' || position === 'bottom';
    },
});

export const localStorageEffect =
    <T>(key: TLocalStorageKey): AtomEffect<T> =>
    ({ setSelf, onSet }) => {
        const savedValue = localStorage.getItem(key);
        if (savedValue != null) {
            setSelf(JSON.parse(savedValue));
        }

        onSet((newValue, _, isReset) => {
            isReset
                ? localStorage.removeItem(key)
                : localStorage.setItem(key, JSON.stringify(newValue));
        });
    };
