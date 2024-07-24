import { Models } from '@rematch/core';
import { common } from './common';
import { field } from './field';

export interface RootModel extends Models<RootModel> {
    common: typeof common
    field: typeof field
};

export const models: RootModel = { common, field };