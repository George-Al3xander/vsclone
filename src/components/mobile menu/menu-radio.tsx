import React from 'react';

import { useRecoilState } from 'recoil';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { $outputPosition } from '@/state/atoms/atoms';
import { outputPositionVariants } from '@/constants/data';

function MenuRadio() {
    const [position, setPosition] = useRecoilState($outputPosition);

    return (
        <RadioGroup value={position} onValueChange={setPosition}>
            {outputPositionVariants.map((variant) => (
                <div
                    key={'radio-menu' + variant}
                    className="flex items-center space-x-2 capitalize"
                >
                    <RadioGroupItem value={variant} id={variant} />
                    <Label className={'text-base'} htmlFor={variant}>
                        {variant}
                    </Label>
                </div>
            ))}
        </RadioGroup>
    );
}

export default MenuRadio;
