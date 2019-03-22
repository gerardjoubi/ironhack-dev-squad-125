const convertor = (data) => {
    return Object.keys(data).map((key, index) => {
        return [Number(index), data[key], data[key]];
    }).reduce((acc, arr, i) => {
        // console.log(typeof )
        console.log(acc, arr,  i)
        // return acc.flat(arr);
        // if (arr.flat)
        acc.concat(arr)
        console.log(acc);
        return acc;
}, []);
};

console.log(convertor({name: "bill", age: 30}))
