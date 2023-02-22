import {ElementStates} from "../../types/element-states";
import {delay} from "../../utils/delay";
import {DELAY_IN_MS} from "../../constants/delays";
import {swap} from "../../utils/swap";
import React from "react";

export type TLetter = {
    item: string,
    state: ElementStates,
}

export const reverseString = async (
    array: TLetter[],
    setArray:  React.Dispatch<React.SetStateAction<TLetter[]>>,
) => {
    const middle = Math.ceil(array.length / 2);
    for (let i = 0; i < middle; i++) {
        let j = array.length - i - 1;
        if (i !== j) {
            array[i].state = ElementStates.Changing;
            array[j].state = ElementStates.Changing;
            setArray([...array]);
            await delay(DELAY_IN_MS);
        }
        swap(array, i, j);
        array[i].state = ElementStates.Modified;
        array[j].state = ElementStates.Modified;
        setArray([...array]);
    }
}