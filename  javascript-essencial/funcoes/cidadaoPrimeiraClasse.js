// função em forma literal
function fun1() {}

// Amazenar em variavel
const fun2 = function () {}

// Amazenar em array
const array = [function (a, b) {return a + b }, fun1, fun2]
console.log(array[0](2,3))

// Amazenar em atributo de objeto
const obj = {}
obj.falar = function () {return 'Teste!'}
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}

run(function() { console.log('Executando...')})

// Um função pode returnar/conter em função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = somar (2, 3)
cincoMais(4)