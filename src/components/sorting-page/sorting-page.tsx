import React from "react";
import {SolutionLayout} from "../ui/solution-layout/solution-layout";
import {RadioInput} from "../ui/radio-input/radio-input";
import styles from "./sorting-page.module.css";
import {Button} from "../ui/button/button";
import {Column} from "../ui/column/column";

export const SortingPage: React.FC = () => {
    return (
        <SolutionLayout
            title="Сортировка массива"
        >
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.container__radio}>
                        <RadioInput label={"Выбор"}/>
                        <RadioInput label={"Пузырёк"}/>
                    </div>

                    <div className={styles.container__btn}>
                        <Button
                            text={"По возрастанию"}
                            extraClass={styles.btn}
                        />
                        <Button
                            text={"По убыванию"}
                            extraClass={styles.btn}
                        />
                        <Button
                            text={"Новый массив"}
                            extraClass={styles.btn}
                        />
                    </div>
                </div>
                <div className={styles.column__container}>
                    <Column
                        index={10}
                        extraClass={styles.column}
                    />
                </div>
            </div>
        </SolutionLayout>
    );
};
