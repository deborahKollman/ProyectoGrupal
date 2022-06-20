export const  rgxName = (value) => { 
    return !/^[a-zA-Z0-9\s]{3,45}$/m.test(value)
}


// export const regular_expretion = {
//     name: /^[a-zA-Z0-9_]{3,}$/m,
//     date: /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/m,
//     rating: /^([0-9])(\.[0-9]{1})?$/m,
//     name: /^[a-zA-Z0-9\s]{3,45}$/m,
// };
