import { Cliente } from "./negozioAlimentari_cliente.js";
// import { any } from "./negozioAlimentari_prodotto";

class Negozio{
    #m_nome;
    #m_indirizzo;
    #m_prodotti_disponibili;
    constructor(nome,indirizzo,prodottiDisponibili){
        this.#m_nome = nome;
        this.#m_indirizzo = indirizzo;
        this.#m_prodotti_disponibili = prodottiDisponibili;
    }

    get nome(){
        return this.#m_nome;
    }

    get indirizzo(){
        return this.#m_indirizzo;
    }

    get prodottiDisponibili(){
        return this.#m_prodotti_disponibili;
    }

    nTotaleProdotti(){
        return this.prodottiDisponibili.length;
    }

    valProdotti(){
        
    }
}

const prodottiDisponibili = [];

for (let i = 0; i < 15; i++) {
    prodottiDisponibili[i] = "Prodotto "+(i+1);
}

const negozio = new Negozio("Ciccio","Via del Cavolo",prodottiDisponibili);
document.writeln("Nome: " + negozio.nome + "<br>");
document.writeln("Indirizzo: " + negozio.indirizzo + "<br>");
document.writeln("Prodotti disponibili: " + negozio.prodottiDisponibili + "<br>");
document.writeln("Lunghezza prodotti disponibili: " + negozio.nTotaleProdotti() + "<br>");
const cliente = new Cliente("ofosfe", "oiswfwef", 987456544);
console.log(Object.getOwnPropertyNames(cliente));
