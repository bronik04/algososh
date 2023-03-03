import React, {FormEvent, useState} from "react";
import {SolutionLayout} from "../ui/solution-layout/solution-layout";
import styles from "./stack.module.css";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";
import {TCircleItem} from "../../types/types";
import {Stack} from "./stack";
import {ElementStates} from "../../types/element-states";
import {delay} from "../../utils/delay";
import {SHORT_DELAY_IN_MS} from "../../constants/delays";
import {Circle} from "../ui/circle/circle";

export const StackPage: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [array, setArray] = useState<TCircleItem[]>([]);
    const [stack] = useState(new Stack<TCircleItem>());
    const [isActive, setActive] = useState(false);
    const [isAdding, setAdding] = useState(false);
    const [isRemoving, setRemoving] = useState(false);
    const [isCleaning, setCleaning] = useState(false);

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }

    const handleAddButton = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setActive(true);
        setAdding(true);
        if (inputValue) {
            stack.push({item: inputValue, state: ElementStates.Changing});
            setInputValue('');
            setArray([...stack.getItems()]);
            await delay(SHORT_DELAY_IN_MS);
            stack.peak().state = ElementStates.Default;
            setArray([...stack.getItems()]);
        }
        setAdding(false);
        setActive(false);
    }

    const handleRemoveButton = async () => {
        setActive(true);
        setRemoving(true);
        stack.peak().state = ElementStates.Changing;
        setArray([...stack.getItems()]);
        await delay(SHORT_DELAY_IN_MS);
        stack.pop();
        setArray([...stack.getItems()]);
        setActive(false);
        setRemoving(false);
    }
    const handleClearButton = async () => {
        setActive(true);
        setCleaning(true);
        await delay(SHORT_DELAY_IN_MS);
        stack.clear();
        setArray([...stack.getItems()]);
        setCleaning(false);
        setActive(false);
    }

    return (
        <SolutionLayout title="Стек">
            <form className={styles.form} onSubmit={handleAddButton}>
                <div className={styles.container}>
                    <Input
                        value={inputValue}
                        onChange={handleInputChange}
                        extraClass={styles.input}
                        isLimitText={true}
                        maxLength={4}
                    />
                    <Button
                        text="Добавить"
                        type={"submit"}
                        disabled={!inputValue || isActive}
                        isLoader={isAdding}
                    />
                    <Button
                        text="Удалить"
                        onClick={handleRemoveButton}
                        disabled={!array.length || isActive}
                        isLoader={isRemoving}
                    />
                </div>
                <Button
                    text="Очистить"
                    onClick={handleClearButton}
                    disabled={!array.length || isActive}
                    isLoader={isCleaning}
                />
            </form>
            <ul className={styles.list}>
                {array.map((item, index) => (
                    <li key={index}>
                        <Circle
                            letter={item.item}
                            state={item.state}
                            tail={index.toString()}
                            head={array.length - 1 === index ? 'top' : ''}
                        />
                    </li>
                ))
                }
            </ul>
        </SolutionLayout>
    );
};
