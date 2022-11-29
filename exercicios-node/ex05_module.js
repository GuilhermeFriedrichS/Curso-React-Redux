console.log(global === this)
console.log(module === this)
console.log(module.exports === this)

this.sayHi = function () {
    console.log('Oi!')
}