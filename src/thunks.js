import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadApp, updateMenu } from './store';

export const loadApplication = createAsyncThunk(
    'app/loadApplication',
    async (appConfig, { dispatch }) => {
        const module = await import(`./apps/${appConfig.name}`);
        dispatch(loadApp(module.default));
        dispatch(updateMenu(appConfig.menu));
    }
);
