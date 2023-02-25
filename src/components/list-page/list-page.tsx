import React, {FormEvent, useState} from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import styles from "./list-page.module.css";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";

export const ListPage: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputIdx, setInputIdx] = useState('');
    const [isActive, setActive] = useState(false);


    const handleInputValChange = (e: FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }

    const handleInputIdxChange = (e: FormEvent<HTMLInputElement>) => {
        setInputIdx(e.currentTarget.value);
    }

    return (
    <SolutionLayout title="Связный список">
        <form className={styles.form}>
            <div className={styles.container}>
                <Input
                    value={inputValue}
                    onChange={handleInputValChange}
                    extraClass={styles.input}
                    isLimitText={true}
                    maxLength={4}
                    placeholder={"Введите значение"}
                />
                <Button text="Добавить в head"/>
                <Button text="Добавить в tail" />
                <Button text="Удалить из head" />
                <Button text="Удалить из tail" />
            </div>
            <div className={styles.container}>
                <Input
                    value={inputIdx}
                    onChange={handleInputIdxChange}
                    extraClass={styles.input}
                    placeholder={"Введите индекс"}
                />
                <Button text="Добавить по индексу" extraClass={styles.btn}/>
                <Button text="Удалить по индексу" extraClass={styles.btn} />
            </div>

        </form>
    </SolutionLayout>
  );
};
