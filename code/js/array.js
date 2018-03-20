function toObject( values, keys ){
    let keyI = 0;
    let loopI = 0;
    let obj = {};

    for( let val of values ){
        let noKey = !keys[loopI] ? true : false;
        if( noKey ){
            obj[keyI] = val;
            keyI += 1;
        }else{
            obj[keys[loopI]] = val;
        }

        loopI += 1;
    }

    return obj;
}

Array.prototype.toObject = function( keys ){
    let keyI = 0;
    let loopI = 0;
    let obj = {};
    for( val of this ){
        let noKey = !keys[loopI] ? true : false;
        if( noKey ){
            obj[keyI] = val;
            keyI += 1;
        }else{
            obj[keys[loopI]] = val;
        }

        loopI += 1;
    }

    return obj;
}

module.exports = {
    toObject: toObject
}