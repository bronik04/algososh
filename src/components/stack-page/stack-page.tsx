import React, {FormEvent, useState} from "react";
import {SolutionLayout} from "../ui/solution-layout/solution-layout";
import styles from "./stack.module.css";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";
import {TCircleItem} from "../../types/types";
import {Stack} from "./utils";
import {ElementStates} from "../../types/element-states";
import {delay} from "../../utils/delay";
import {SHORT_DELAY_IN_MS} from "../../constants/delays";
import {Circle} from "../ui/circle/circle";

export const StackPage: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [array, setArray] = useState<TCircleItem[]>([]);
    const [stack] = useState(new Stack<TCircleItem>());

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }
    const handleAddButton = async () => {
        if (inputValue) {
            stack.push({item: inputValue, state: ElementStates.Changing});
            setInputValue('');
            setArray([...stack.getItems()]);
            await delay(SHORT_DELAY_IN_MS);
            stack.peak().state = ElementStates.Default;
            setArray([...stack.getItems()]);
        }
    }
    const handleRemoveButton = async () => {
        stack.peak().state = ElementStates.Changing;
        setArray([...stack.getItems()]);
        await delay(SHORT_DELAY_IN_MS);
        stack.pop();
        setArray([...stack.getItems()]);
    }
    const handleClearButton = () => {
    }

    return (
        <SolutionLayout title="Стек">
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
                <Button type="submit" text="Очистить"/>
            </form>
            <ul className={styles.list}>
                {array.map((item, index) => (
                    <Circle
                        key={index}
                        letter={item.item}
                        state={item.state}/>))
                }
            </ul>
        </SolutionLayout>
    );
};
