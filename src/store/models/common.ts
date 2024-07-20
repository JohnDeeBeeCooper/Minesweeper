import { createModel } from '@rematch/core';
import type { RootModel } from './';
import type { Field, Difficulty } from 'types';
import { openCell, lvlGenerator } from 'utils';

export type CommonStore = {
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
        open(payload: number, rootState) {
            const field = structuredClone(rootState.common.field);
            field[payload].open = true;
            if (field[payload].isBoom) {
                dispatch.common.gameOver();
            }
            else {
                const cellInRow = rootState.common.cellInRow;
                openCell(field, payload, cellInRow, [payload]);
            }
            dispatch.common.setField(field);
        },
        gameOver() {
            console.log('GG');
        },
        reset() {

        },
    })
});