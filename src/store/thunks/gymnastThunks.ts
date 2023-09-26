/* eslint-disable no-console */
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getGymnastList = createAsyncThunk('gymnast/getGymnastList', async () => {
    try {
        const response = await axios.get('https://elevien-fe-job.free.beeceptor.com/applications');
        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch gymnast list. Please try again later.');
    }
});

export const getCountryList = createAsyncThunk('gymnast/getCountryList', async () => {
    try {
        const response = await axios.get('https://elevien-fe-job.free.beeceptor.com/countries');
        console.log(response.data);

        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch country list. Please try again later.');
    }
});
