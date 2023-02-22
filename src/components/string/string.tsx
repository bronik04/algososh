import React, {FormEvent, useState} from "react";
import styles from "./string.module.css";
import {SolutionLayout} from "../ui/solution-layout/solution-layout";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";
import {Circle} from "../ui/circle/circle";
import {ElementStates} from "../../types/element-states";
import {reverseString, TLetter} from "./utils";

export const StringComponent: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [array, setArray] = useState<TLetter[]>([]);
    const [isActive, setActive] = useState(false);

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInputValue(e.currentTarget.value)
    }

    const handleButtonClick = () => {
        const letters = inputValue.split('').map(item => ({
            item,
            state: ElementStates.Default
        }));
        reverseString(letters, setArray);
        setInputValue('');
    }

    return (
        <SolutionLayout title="Строка">
            <form className={styles.container}>
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
                    onClick={handleButtonClick}
                    disabled={isActive || !inputValue}
                />
            </form>
            <ul className={styles.list}>
                {array?.map((char: TLetter, index: number) =>
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
