import { createModel } from '@rematch/core';
import type { RootModel } from './';
import type { Field, Difficulty } from 'types';
import { lvlGenerator } from 'utils';

type CommonStore = {
    difficulty?: Difficulty
    field: Field
    availableFlags: number
    cellInRow: number
};

const initialState: CommonStore = {
    difficulty: undefined,
    field: {},
    availableFlags: 0,
    cellInRow: 0,
};
export const common = createModel<RootModel>()({
    state: initialState,
    reducers: {
        setDifficulty: (state, payload: Difficulty) => ({ ...state, difficulty: payload }),
        setAvailableFlags: (state, payload: number) => ({ ...state, availableFlags: payload }),
        setField: (state, payload: Field) => ({ ...state, field: payload }),
        setCellInRow: (state, payload: number) => ({ ...state, cellInRow: payload }),
    },
    effects: (dispatch) => ({
        init(payload: Difficulty) {
            const { availableFlags, cellInRow, field } = lvlGenerator(payload);
            dispatch.common.setDifficulty(payload);
            dispatch.common.setField(field);
            dispatch.common.setAvailableFlags(availableFlags);
            dispatch.common.setCellInRow(cellInRow);
        },
        reset() {

        },
    })
});