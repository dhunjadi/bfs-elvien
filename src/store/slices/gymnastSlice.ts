import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Gymnast} from '../../types';
import {getGymnastList} from '../thunks/gymnastThunks';

export type GymnastSliceState = {
    gymnastList: Gymnast[];
    isLoading: boolean;
};

const initialState: GymnastSliceState = {
    gymnastList: [],
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
    },
});

export default gymnastSlice.reducer;
