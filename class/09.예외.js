function doException() {
    throw new Error('ERROR');
}

function noException() {
    return true;
}

function callException(type) {
    if (type === 'do') {
        doException();
    } else {
        noException();
    }
}

function main() {
    try {
        callException('do');
    } catch (error) {
        console.log(error)
    } finally {
        console.log('done');
    }
}

main();