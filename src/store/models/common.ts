import { createModel } from '@rematch/core';
import type { RootModel } from './';

type CommonStore = {
    end: boolean
    defeat: boolean
    win: boolean
    start: boolean
};

const initialState: CommonStore = {
    end: false,
    defeat: false,
    win: false,
    start: false,
};
export const common = createModel<RootModel>()({
    state: initialState,
    reducers: {
        start: (state) => ({ ...state, start: true }),
        win: (state) => ({ ...state, win: true, end: true }),
        defeat: (state) => ({ ...state, defeat: true, end: true }),
        reset: () => initialState,
    },
    effects: (dispatch) => ({
        reseting() {
            dispatch.field.reset();
            dispatch.common.reset();
        },
    })
});