const users = require('../Models/usersModel');

exports.login = (loginData) => {
    return new Promise((resolve, reject) => {
        console.log("hi")
        users.findOne({username: loginData.username}, (err, res) => {
            const loginReplay = { success : false , message: null, full_name: null}
            if( err ){ reject(err) } else {
                if( !res ) {
                    loginReplay.success = false;
                    loginReplay.message = 'No Such User';
                }
                else if( res.password !== loginData.password ){
                    loginReplay.success = false;
                    loginReplay.message = 'Invalid Password';
                }
                else {
                    loginReplay.success = true;
                    loginReplay.full_name = res.full_name;
                }
                resolve(loginReplay)
            }
        })
    })
}