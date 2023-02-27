import React, {FormEvent, useMemo, useState} from "react";
import {SolutionLayout} from "../ui/solution-layout/solution-layout";
import styles from "./list-page.module.css";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";
import {LinkedList} from "./linked-list";
import {TCircleItem} from "../../types/types";
import {Circle} from "../ui/circle/circle";
import {ElementStates} from "../../types/element-states";


export const ListPage: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputIdx, setInputIdx] = useState('');
    const [isActive, setActive] = useState(false);
    const [isAddingToHead, setIsAddingToHead] = useState(false);
    const [isAddingToTail, setIsAddingToTail] = useState(false);
    const [isRemoveToHead, setIsRemoveToHead] = useState(false);
    const [isRemoveToTail, setIsRemoveToTail] = useState(false);
    const [isInsertByIndex, setIsInsertByIndex] = useState(false);
    const [isRemoveByIndex, setIsRemoveByIndex] = useState(false);

    const initialValues = useMemo(() => ['0', '34', '8', '1'], []);
    const list = useMemo(() => new LinkedList<string>(initialValues),
    [initialValues]);
    const [arrayWithState, setArrayWithState] = useState<TCircleItem[]>(list.getArrayWithState());

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
                    <Button text="Добавить в tail"/>
                    <Button text="Удалить из head"/>
                    <Button text="Удалить из tail"/>
                </div>
                <div className={styles.container}>
                    <Input
                        value={inputIdx}
                        onChange={handleInputIdxChange}
                        extraClass={styles.input}
                        placeholder={"Введите индекс"}
                    />
                    <Button text="Добавить по индексу" extraClass={styles.btn}/>
                    <Button text="Удалить по индексу" extraClass={styles.btn}/>
                </div>

                <ul className={styles.list}>
                    {arrayWithState.map((item, index) => (
                        <Circle
                            key={index}
                            letter={item.item}
                            state={item.state}/>
                    ))}
                </ul>

            </form>
        </SolutionLayout>
    );
};
