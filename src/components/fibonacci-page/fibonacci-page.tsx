import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import styles from "./fibonacci.module.css";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";

export const FibonacciPage: React.FC = () => {
  return (
    <SolutionLayout title="Последовательность Фибоначчи">
        <form className={styles.container}>
            <Input
                placeholder="Введите строку"
                extraClass={styles.input}
                isLimitText={true}
            />
            <Button text={"Расчитать"}/>
        </form>
    </SolutionLayout>
  );
};
