import {validationAdd} from '../utils/addUserSchama';



doAsyncClassic((err, data) => { // cb
    if (err) {
        // error
    }else {
        // success
    }
});


function doAsyncPromise(data) {
    return new Promise((resolve, reject) => {

        validationAdd(data, { abortEarly: false });
        // some code that fills in err if there is an error
        if (err) {
            reject();
        } else {
            resolve();
        }
    });
}
