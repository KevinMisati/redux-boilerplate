Store = we use the createStore API imported from redux, it is used to store all the state of the app

    const store = createStore(reducer,optional redux devtools)

reducers = they are functions that takes in two arguments: the initial state and the actions.They alter the state depending on the dispatched action. Reducers can be combined by the combineReducers API.

    const counterReducer = (state = 0, action) => {
        switch(action.type){
            case "INCREMENT":
                return state + 1
            case "DECREMENT":
                return state - 1
            case "INCREMENT5":
                return state + action.payload
            default:
                return state
        }
    }

combine reducers

    const allReducers = combineReducers({
        counter:counterReducer,
        isLogged:isLoggedReducer
    })


actions = these are funcs that returns objects with a type and an optional payload

    export const increment = () => {
        return({
            type:"INCREMENT"
        })
    }

    export const decrement = () => {
        return ({
            type: "DECREMENT"
        })
    }

    export const increment5 = (number) => {
        return ({
            type: "INCREMENT5",
            payload:number
        })
    }