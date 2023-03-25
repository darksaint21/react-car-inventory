import {createSlice} from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name:'root',
    initialState:{
        make:'Make',
        model:'Model',
        accident_on_record:'Accident on Record',
        color:'Color',
        year: 'Year',

    },
    reducers:{
        // action is submitted esle where - writen to state.name
        chooseMake: (state, action) => {state.make=action.payload}, //all we are doing is setting input to the state.name
        chooseModel:(state, action ) => {state.model=action.payload},
        chooseAccident:(state, action) => {state.accident_on_record=action.payload},
        chooseColor:(state, action) => {state.color=action.payload},
        chooseYear:(state, action) =>{state.year=action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {chooseMake, chooseModel, chooseAccident, chooseColor, chooseYear}= rootSlice.actions