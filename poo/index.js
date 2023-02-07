//CRIAR UM OBJETO E UMA CLASSE COM MÉOTDOS DE: PESSOA 

//EXEMPLO ORIENTAÇÃO A OBJETO

class Animal{
    //atributos
    constructor(type,name,sound,age){
      this.type = type
      this.name = name
      this.sound = sound
      this.age = age
    }
    //método
    fazerSom(){
        console.log(`${this.name} disse: ${this.sound}`)
    }
    aniversario(novaIdade){
        this.age+=novaIdade // novaIdade = novaIdade + age
        console.log(`Eu sou ${this.name} e eu fiz ${this.age} anos`)
    }
}
//objeto
let loboGuara = new Animal('Lobo','Flor','uivo',7)
let cachorro = new Animal('Cachorro','Ted','auau',2)

//chamando a função(método) fazerSom
cachorro.fazerSom()
//chamando a função(método) aniversário
loboGuara.aniversario(1)