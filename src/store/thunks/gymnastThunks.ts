/* eslint-disable no-console */
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getGymnastList = createAsyncThunk('gymnast/getGymnastList', async () => {
    try {
        const response = await axios.get('https://elevien-fe-job.free.beeceptor.com/applications');
        console.log(response.data);

        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch recipes. Please try again later.');
    }
});
