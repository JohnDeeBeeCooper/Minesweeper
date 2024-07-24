import { DIFFICULTY } from 'constants/index';

export type Cell = {
    id: number
    open: boolean
    note?: 'flag' | '?'
    core: number
    isBoom: boolean
};

export type Field = Cell[];
export type Difficulty = typeof DIFFICULTY[number];