import React from "react";
import styles from "./string.module.css";
import {SolutionLayout} from "../ui/solution-layout/solution-layout";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";

export const StringComponent: React.FC = () => {
    return (
        <SolutionLayout title="Строка">
            <div className={styles.container}>
                <Input
                    placeholder="Введите строку"
                    extraClass={styles.input}
                    isLimitText={true}
                    maxLength={11}
                />
                <Button text={"Развернуть"}/>
            </div>

        </SolutionLayout>
    );
};
