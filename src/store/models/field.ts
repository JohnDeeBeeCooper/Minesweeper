import { createModel } from '@rematch/core';
import type { RootModel } from './';
import type { Field, Difficulty } from 'types';
import { openCell, lvlGenerator } from 'utils';

export type FieldStore = {
    difficulty: null | Difficulty
    field: Field
    availableFlags: number
    cellInRow: number
    bombsCount: number
    explodedID: null | number
};

const initialState: FieldStore = {
    difficulty: null,
    field: [],
    availableFlags: 0,
    cellInRow: 0,
    bombsCount: 0,
    explodedID: null
};
export const field = createModel<RootModel>()({
    state: initialState,
    reducers: {
        setDifficulty: (state, payload: Difficulty) => ({ ...state, difficulty: payload }),
        setAvailableFlags: (state, payload: number) => ({ ...state, availableFlags: payload }),
        setField: (state, payload: Field) => ({ ...state, field: payload }),
        setExplodedID: (state, payload: number) => ({ ...state, explodedID: payload }),
        setCellInRow: (state, payload: number) => ({ ...state, cellInRow: payload }),
        setBombsCount: (state, payload: number) => ({ ...state, bombsCount: payload }),
        reset: () => initialState,
    },
    effects: (dispatch) => ({
        init(payload: Difficulty) {
            const { availableFlags, bombsCount, cellInRow, field } = lvlGenerator(payload);
            dispatch.common.reseting();
            dispatch.common.start();
            dispatch.field.setDifficulty(payload);
            dispatch.field.setBombsCount(bombsCount);
            dispatch.field.setField(field);
            dispatch.field.setAvailableFlags(availableFlags);
            dispatch.field.setCellInRow(cellInRow);
        },
        open(payload: number, rootState) {
            const field = rootState.field.field;
            if (field[payload].isBoom) {
                dispatch.field.gameOver(payload);
            }
            else {
                const cellInRow = rootState.field.cellInRow;
                const newField = openCell(field, payload, cellInRow, [payload]);
                dispatch.field.setField(newField);
            }

        },
        openAll(_: void, rootState) {
            dispatch.common.defeat();
        },
        note(payload: number) {
            console.log('note id: ', payload);
        },
        gameOver(payload: number) {
            dispatch.field.setExplodedID(payload);
            console.log('GG');
        },
    })
});