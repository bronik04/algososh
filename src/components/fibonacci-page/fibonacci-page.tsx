import React, {FormEvent, useState} from "react";
import {SolutionLayout} from "../ui/solution-layout/solution-layout";
import styles from "./fibonacci.module.css";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";
import {fibonacci} from "./utils";
import {delay} from "../../utils/delay";
import {SHORT_DELAY_IN_MS} from "../../constants/delays";
import {Circle} from "../ui/circle/circle";

export const FibonacciPage: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [isActive, setActive] = useState(false);
    const [numbers, setNumbers] = useState<number[]>();

    const visualisation = async (value: string) => {
        setActive(true);

        const numbers = fibonacci(parseInt(value));
        for (let i = 0; i < numbers.length; i++) {
            await delay(SHORT_DELAY_IN_MS);
            setNumbers(numbers.slice(0, i + 1));
        }
        setActive(false);
    }

    const handleButtonClick = () => {
        if (inputValue.length !== 0) {
            visualisation(inputValue);
        }
    }

    return (
        <SolutionLayout title="Последовательность Фибоначчи">
            <form className={styles.container}>
                <Input
                    onChange={(e: FormEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}
                    placeholder="Введите строку"
                    extraClass={styles.input}
                    isLimitText={true}
                    type={'number'}
                    min={1}
                    max={19}

                />
                <Button
                    onClick={handleButtonClick}
                    text={"Расчитать"}
                    disabled={isActive}
                />
            </form>
            <ul className={styles.list}>
                {numbers?.map((number, index) => (
                    <li key={index}>
                        <Circle tail={index.toString()} letter={number.toString()}/>
                    </li>
                ))}
            </ul>
        </SolutionLayout>
    );
};
