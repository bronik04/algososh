import React, {FormEvent, useState} from "react";
import styles from "./string.module.css";
import {SolutionLayout} from "../ui/solution-layout/solution-layout";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";
import {Circle} from "../ui/circle/circle";

export const StringComponent: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <SolutionLayout title="Строка">
            <div className={styles.container}>
                <Input
                    placeholder="Введите строку"
                    extraClass={styles.input}
                    isLimitText={true}
                    maxLength={11}
                    value={inputValue}
                    onChange={(e: FormEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}
                />
                <Button text={"Развернуть"}/>
            </div>
            <ul className={styles.list}>
                {inputValue.split('').map((char: string, index: number) =>
                    <Circle key={index} letter={char}/>)}
            </ul>
        </SolutionLayout>
    );
};
