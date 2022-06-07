import React from "react"
import {useDispatch,useSelector} from "react-redux"


const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.Counter)
    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
        </div>
    )
}
export default Counter