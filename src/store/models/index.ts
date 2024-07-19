import { Models } from '@rematch/core';
import { common } from './common';

export interface RootModel extends Models<RootModel> {
    common: typeof common
};

export const models: RootModel = { common };