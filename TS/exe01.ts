class Disciplina{
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    exibirInformacoes(){
        console.log(`Nome: ${this.nome}`);
    }
}

class Professor {
    nome: string;
    disciplina: Disciplina[] = [];

    constructor(nome: string){
        this.nome = nome;
    }

    adicionarDisciplina(disciplina: Disciplina){
        this.disciplina.push(disciplina);
    }

    exibirInformacoes(){
        console.log(`Professor: ${this.nome}`);
        this.disciplinas.forEach(this.disciplina =>{
            console.log(`Disciplina: $(disciplina.nome)`);
        
        });
    }
}
