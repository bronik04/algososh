import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import styles from "./stack.module.css";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";

export const StackPage: React.FC = () => {
  return (
    <SolutionLayout title="Стек">
        <form className={styles.form}>
            <div className={styles.container}>
                <Input
                    extraClass={styles.input}
                    isLimitText={true}
                    maxLength={4}
                />
                <Button type="submit" text="Добавить"/>
                <Button type="submit" text="Удалить"/>
            </div>
            <Button type="submit" text="Очистить"/>
        </form>
    </SolutionLayout>
  );
};
