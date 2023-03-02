import React, {ChangeEvent, useEffect, useState} from "react";
import {SolutionLayout} from "../ui/solution-layout/solution-layout";
import {RadioInput} from "../ui/radio-input/radio-input";
import styles from "./sorting-page.module.css";
import {Button} from "../ui/button/button";
import {Column} from "../ui/column/column";
import {randomArray} from "../../utils/randomArray";
import {selectionSortAsc, selectionSortDesc} from "./selection-sort";
import {SortName, TArrayItem} from "../../types/types";
import {Direction} from "../../types/direction";
import {bubbleSortAsc, bubbleSortDesc} from "./bubble-sort";

export const SortingPage: React.FC = () => {
    const [initArray, setInitArray] = useState<TArrayItem[]>([]);
    const [isActive, setActive] = useState(false);
    const [radioBtnValue, setRadioBtnValue] = useState<string>(SortName.select);
    const [sort, setSort] = useState<Direction>();

    useEffect(() => {
        setInitArray(randomArray());
    }, []);

    const getRandomArray = () => {
        setInitArray(randomArray());
    }

    const handleRadioBtnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRadioBtnValue(e.target.value);
    }

    const handleSortBtnClick = (value: Direction) => {
        setSort(value);

        if (radioBtnValue === SortName.select && sort === Direction.Ascending) {
            selectionSortAsc(initArray, setInitArray, setActive);
        }
        if (radioBtnValue === SortName.select && sort === Direction.Descending) {
            selectionSortDesc(initArray, setInitArray, setActive);
        }
        if (radioBtnValue === SortName.bubble && sort === Direction.Ascending) {
            bubbleSortAsc(initArray, setInitArray, setActive);
        }
        if (radioBtnValue === SortName.bubble && sort === Direction.Descending) {
            bubbleSortDesc(initArray, setInitArray, setActive);
        }
    }

    return (
        <SolutionLayout title="Сортировка массива">
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.container__radio}>
                        <RadioInput
                            label={"Выбор"}
                            value={SortName.select}
                            checked={radioBtnValue === SortName.select}
                            onChange={handleRadioBtnChange}
                            disabled={isActive}
                        />
                        <RadioInput
                            label={"Пузырёк"}
                            value={SortName.bubble}
                            checked={radioBtnValue === SortName.bubble}
                            onChange={handleRadioBtnChange}
                            disabled={isActive}
                        />
                    </div>

                    <div className={styles.container__btn}>
                        <Button
                            text={"По возрастанию"}
                            sorting={Direction.Ascending}
                            extraClass={styles.btn}
                            onClick={() => handleSortBtnClick(Direction.Ascending)}
                            disabled={isActive}
                        />
                        <Button
                            text={"По убыванию"}
                            sorting={Direction.Descending}
                            extraClass={styles.btn}
                            onClick={() => handleSortBtnClick(Direction.Descending)}
                            disabled={isActive}
                        />
                        <Button
                            text={"Новый массив"}
                            onClick={getRandomArray}
                            extraClass={styles.btn}
                            disabled={isActive}
                        />
                    </div>
                </div>
                <ul className={styles.column__container}>
                    {initArray?.map((item, index) => (
                        <li key={index}>
                            <Column
                                index={item.item}
                                state={item.state}
                                extraClass={styles.column}
                            />
                        </li>
                    ))}

                </ul>
            </div>
        </SolutionLayout>
    );
};
