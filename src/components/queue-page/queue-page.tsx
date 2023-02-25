import React, {FormEvent, useState} from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import styles from "../stack-page/stack.module.css";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";
import {Circle} from "../ui/circle/circle";
import {Queue} from "./queue";

export const QueuePage: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }
    const handleAddButton = () => {}
    const handleRemoveButton = () => {}
    const handleClearButton = () => {}

  return (
    <SolutionLayout title="Очередь">
        <form className={styles.form}>
            <div className={styles.container}>
                <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    extraClass={styles.input}
                    isLimitText={true}
                    maxLength={4}
                />
                <Button text="Добавить" onClick={handleAddButton}/>
                <Button text="Удалить" onClick={handleRemoveButton}/>
            </div>
            <Button text="Очистить" onClick={handleClearButton}/>
        </form>
        {/*<ul className={styles.list}>*/}
        {/*    {queue.getItems().map((item, index) => (*/}
        {/*        <li key={index}>*/}
        {/*            <Circle*/}
        {/*                letter={''}*/}
        {/*            />*/}
        {/*        </li>*/}
        {/*    ))*/}
        {/*    }*/}
        {/*</ul>*/}
    </SolutionLayout>
  );
};
