import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Country, Gymnast} from '../../types';
import {getCountryList, getGymnastList} from '../thunks/gymnastThunks';

export type GymnastSliceState = {
    gymnastList: Gymnast[];
    countryList: Country[];
    isLoading: boolean;
};

const initialState: GymnastSliceState = {
    gymnastList: [],
    countryList: [],
    isLoading: false,
};

export const gymnastSlice = createSlice({
    name: 'gymnast',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getGymnastList.pending, (state: GymnastSliceState) => {
            state.isLoading = true;
        });
        builder.addCase(getGymnastList.fulfilled, (state: GymnastSliceState, action: PayloadAction<Gymnast[]>) => {
            state.gymnastList = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getGymnastList.rejected, (state: GymnastSliceState) => {
            state.isLoading = false;
        });

        builder.addCase(getCountryList.pending, (state: GymnastSliceState) => {
            state.isLoading = true;
        });
        builder.addCase(getCountryList.fulfilled, (state: GymnastSliceState, action: PayloadAction<Country[]>) => {
            state.countryList = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getCountryList.rejected, (state: GymnastSliceState) => {
            state.isLoading = false;
        });
    },
});

export default gymnastSlice.reducer;
