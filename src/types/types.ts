import {ElementStates} from "./element-states";

export type TCircleItem = {
    item: string,
    state: ElementStates;
}

export type TQueueItem = TCircleItem & {
    head?: string;
}