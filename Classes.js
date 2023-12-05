class Hero{
    
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}
 

// const HeroMago = new Hero("Merlin", 50, "mago");
// const HeroGuerreiro = new Hero("Arthur", 30, "guerreiro");
// const HeroMonge = new Hero("Li", 40, "monge");
// const HeroNinja = new Hero("Hanzo", 25, "ninja");

// HeroMago.atacar();
// HeroGuerreiro.atacar();
// HeroMonge.atacar();
// HeroNinja.atacar();