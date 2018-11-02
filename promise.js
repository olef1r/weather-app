let asynAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        } else {
            reject('Arguments must be number')
        }
    });
}

asynAdd(4, 42).then(res => {
    console.log(res);
    return asynAdd(res, '3')
})
.then(res => {
    console.log('Should be 49 equals ' + res)
})
.catch(e =>  console.log(e))