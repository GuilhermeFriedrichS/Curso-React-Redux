function haveParam(param) {
    return process.argv.indexOf(param) !== -1
}

if(haveParam('--procucao')) {
    console.log('Atenção total!')
} else {
    console.log('Tranquilo!')
}