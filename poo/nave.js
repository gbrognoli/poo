class nave{
    constructor(nome,velocidadeRecomendada){
        this.nome = nome
        this.velocidadeRecomendada = velocidadeRecomendada
        this.velocidadeAtual = 400
    }
    //método
    acelerarNave(aumentar){
        this.velocidadeAtual += aumentar
        if(this.velocidadeAtual > this.velocidadeRecomendada){
            console.log("CUIDADO! A VELOCIDADE ESTÁ ACIMA DA RECOMENDADA")
        }
    }
}
//naveDeBatalha é uma herança de nave
class naveDeBatalha extends nave{
    //método
    parar(){
        this.velocidadeAtual = 0
        console.log("RECOLHENDO A NAVE! TRABALHO CONCLUIDO")
    }
    
}

let dag =  new nave("Dag",200)
let galaxy = new naveDeBatalha("Galaxy",30)

console.log(dag)
console.log(galaxy)

dag.acelerarNave(5)
galaxy.parar()