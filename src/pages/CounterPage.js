import Button from "../components/Button";
import {useState, useReducer} from "react";
import Panel from "../components/Panel";
// import useCounter from "../hooks/use-counter";

const INCREMENT_COUNT = 'increment'
const CHANGE_VALUE_TO_ADD = 'change_value_to_add'
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        case CHANGE_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        default:
            return state;
    }
    // if (action.type === INCREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count + 1
    //     }
    // }
    // if (action.type === CHANGE_VALUE_TO_ADD) {
    //     return {
    //         ...state,
    //         valueToAdd: action.payload
    //     }
    // }
}

function CounterPage({initialCount}) {
    // const {count, increment} = useCounter(initialCount);
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        // setCount(count + 1);
        dispatch({
            type: INCREMENT_COUNT
        });
    }

    const decrement = () => {
        // setCount(count - 1)
        dispatch({
            type: DECREMENT_COUNT
        })
    }

    const handleToChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);
        dispatch({
            type: CHANGE_VALUE_TO_ADD,
            payload: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        })
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">{state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input value={state.valueToAdd || ''}
                       type="number"
                       className="p-1 m-3 bg-gray-50 border border-gray-300"
                       onChange={handleToChange}/>
                <Button>Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage;
