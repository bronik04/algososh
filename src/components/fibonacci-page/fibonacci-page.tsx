import React, {useState} from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import styles from "./fibonacci.module.css";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";
import {fibonacci} from "./utils";

export const FibonacciPage: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [isActive, setActive] = useState(false);
    const [numbers, setNumbers] = useState<number[]>();

    const visualisation = async (value: string) => {
        setActive(true);

        const numbers = fibonacci(parseInt(value));

    }
    return (
    <SolutionLayout title="Последовательность Фибоначчи">
        <form className={styles.container}>
            <Input
                placeholder="Введите строку"
                extraClass={styles.input}
                isLimitText={true}
                type={'number'}
                max={19}
            />
            <Button text={"Расчитать"}/>
        </form>
    </SolutionLayout>
  );
};
