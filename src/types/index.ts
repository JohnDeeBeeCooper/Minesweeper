export type Cell = {
    id: number
    open: boolean
    note?: 'flag' | '?'
    core: number
    isBoom: boolean
};

export type Field = Record<string, Cell>;
export type Difficulty = 'very easy' | 'easy' | 'normal' | 'hard' | 'impossible'