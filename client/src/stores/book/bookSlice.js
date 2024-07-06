import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results: [],
    resultsCount: 0,
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addAction: (state) => {
            // const res = await api.addAction(payload);
            // return res.data;
        },
        updateAction: (state) => {
            // const res = await api.updateAction(payload);
            // return res.data;
        },
        getAll: (state, action) => {
            const { payload } = action;
            console.log("payload", payload);
            if (payload.code === 200) {
                state.results = payload.body.listing;
                state.resultsCount = payload.body.total;
                state.allRecords = payload.body.allRecords
            }
        },
        getOne: (state) => {
            
        },
        deleteAction: (state) => {
            
        },
        getLeads: (state, action) => {
            const { payload } = action;
            // this.teamLeads = res.body.listing;
            // this.teamLeadsCount = res.body.total;
        },
        addBulkAction: (state) => {
            // const res = await api.addBulkAction(payload);
            // return res.data;
        },
        updateLeave: (state) => {
            // const res = await api.updateLeave(payload);
            // return res.data;
        },
    }
});

export const { addAction, updateAction, getAll, getOne, deleteAction, getLeads, addBulkAction, updateLeave } = bookSlice.actions;

export default bookSlice.reducer;