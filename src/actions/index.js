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

export const increment5 = (nr) => {
    return ({
        type: "INCREMENT5",
        payload:nr
    })
}