import React, { createContext, useReducer } from 'react'; 

//import the Reducer
import AppReducer from './AppReducer'
//Create the initial state
const initialState = {
    transactions : [
        { id: 1, description: "Income 1", transactionAmount: 500},
        { id: 2, description: "Expense 1", transactionAmount: -500},
    ]
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }
        }>
            { children }
        </GlobalContext.Provider>
    )
}