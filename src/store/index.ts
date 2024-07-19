import { useDispatch, useSelector } from 'react-redux';
import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { models, RootModel } from './models';

export const appSelector = useSelector.withTypes<RootState>();
export const appDispatch = useDispatch.withTypes<Dispatch>();

export const store = init({
    models
});

export type Store = typeof store;
export type RootState = RematchRootState<RootModel>;
export type Dispatch = RematchDispatch<RootModel>;
