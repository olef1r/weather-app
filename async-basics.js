let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Asya'
    }
    setTimeout(() => {
        callback(user);
    }, 4400)
    
};
getUser(41, (userObj) => {
    console.log(userObj)
})