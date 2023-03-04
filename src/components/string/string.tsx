import React, {FormEvent, useState} from "react";
import styles from "./string.module.css";
import {SolutionLayout} from "../ui/solution-layout/solution-layout";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";
import {Circle} from "../ui/circle/circle";
import {ElementStates} from "../../types/element-states";
import {reverseString} from "./reverse-string";
import {TCircleItem} from "../../types/types";

export const StringComponent: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [array, setArray] = useState<TCircleItem[]>([]);
    const [isActive, setActive] = useState(false);

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const handleButtonClick = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const letters = inputValue.split('').map(item => ({
            item,
            state: ElementStates.Default
        }));
        reverseString(letters, setArray, setActive);
        setInputValue('');
    }

    return (
        <SolutionLayout title="Строка">
            <form
                className={styles.container}
                onSubmit={handleButtonClick}
            >
                <Input
                    placeholder="Введите строку"
                    extraClass={styles.input}
                    isLimitText={true}
                    maxLength={11}
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <Button
                    text={"Развернуть"}
                    type={"submit"}
                    disabled={!inputValue}
                    isLoader={isActive}
                />
            </form>
            <ul className={styles.list}>
                {array?.map((char: TCircleItem, index: number) =>
                    <li key={index}>
                        <Circle
                            letter={char.item}
                            state={char.state}
                        />
                    </li>
                )}
            </ul>
        </SolutionLayout>
    );
};
