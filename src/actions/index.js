import axios from 'axios';
// import { Dispatch } from 'react';
export const ADD_SMURF= 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';
export const LOADING = 'LOADING'
export const FETCH_SMURFS = 'FETCH_SMURFS'


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs= () => (dispatch) =>{
//need to put dispatch here

    axios.get('http://localhost:3333/smurfs')
        .then(res =>{
            // console.log('RES.DATA:', res.data)
            dispatch({type: FETCH_SMURFS, payload: res.data})
        })
        .catch(err =>{
            console.error(err)
        })
}

export const addSmurf = smurf =>{
    return({type: ADD_SMURF, payload: smurf})
};
//not totally sure this will work as intended

export const setError = () =>{
    console.log('fjdasiofs')
    return({type: SET_ERROR, payload: 'You dummy, you didnt enter any info!'})
}