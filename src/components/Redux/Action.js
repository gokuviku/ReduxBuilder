export const add = (item) => {
    return {
        type: "add",
        payload: item
    }
}

export const del = (index) => {
    return {
        type: "delete",
        payload: index
    }
}

export const edit = (index,newItem) => {
    return {
        type: "edit",
        payload: { index, newItem },
    }
}

// export const inc = (payload) => {
//     return {
//         type: "Increment",
//         payload: payload
//     }
// }

// export const dec = (payload) => {
//     return {
//         type: "Decrement",
//         payload: payload
//     }
// }

// export const mul = (payload) => {
//     return {
//         type: "Multiply",
//         payload: payload
//     }
// }

// export const div = (payload) => {
//     return {
//         type: "Division",
//         payload: payload

//     }
// }