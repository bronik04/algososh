import React, {FormEvent, useState} from "react";
import {SolutionLayout} from "../ui/solution-layout/solution-layout";
import styles from "../stack-page/stack.module.css";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";
import {Circle} from "../ui/circle/circle";
import {Queue} from "./queue";
import {ElementStates} from "../../types/element-states";
import {TQueueItem} from "../../types/types";
import {delay} from "../../utils/delay";
import {SHORT_DELAY_IN_MS} from "../../constants/delays";

const empty = Array.from({length: 7}, () => ({
    item: '',
    state: ElementStates.Default
}));

export const QueuePage: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [array, setArray] = useState(empty);
    const [queue, setQueue] = useState(new Queue<TQueueItem>(7));
    const [isActive, setActive] = useState(false);

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }

    const handleAddButton = async () => {
        setActive(true);
        queue.enqueue({item: inputValue, state: ElementStates.Default});
        setQueue(queue);
        array[queue.getTail() - 1] = {item: '', state: ElementStates.Changing};
        setArray([...array]);
        await delay(SHORT_DELAY_IN_MS);
        array[queue.getTail() - 1] = {
            item: inputValue,
            state: ElementStates.Changing
        };
        setArray([...array]);
        array[queue.getTail() - 1] = {
            item: inputValue,
            state: ElementStates.Default
        };
        setArray([...array]);
        setInputValue('');
        setActive(false);
    }

    const handleRemoveButton = async () => {
        setActive(true)
        queue.dequeue();
        setQueue(queue);
        array[queue.getHead() - 1] = {
            item: array[queue.getHead() - 1].item,
            state: ElementStates.Changing
        };
        setArray([...array]);
        await delay(SHORT_DELAY_IN_MS);
        array[queue.getHead() - 1] = {item: '', state: ElementStates.Default};
        setArray([...array]);
        setActive(false)
    }

    const handleClearButton = () => {
        setActive(true)
        queue.clear();
        setQueue(queue);
        setArray(Array.from({length: 7}, () => ({
            item: '',
            state: ElementStates.Default
        })));
        setActive(false);
    }

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
                    <Button
                        text="Добавить"
                        onClick={handleAddButton}
                        disabled={isActive}
                    />
                    <Button
                        text="Удалить"
                        onClick={handleRemoveButton}
                        disabled={isActive}
                    />
                </div>
                <Button
                    text="Очистить"
                    onClick={handleClearButton}
                    disabled={isActive}
                />
            </form>
            <ul className={styles.list}>
                {array.map((item, index) => (
                    <li key={index}>
                        <Circle
                            letter={item.item}
                            state={item.state}
                            index={index}
                        />
                    </li>
                ))
                }
            </ul>
        </SolutionLayout>
    );
};
