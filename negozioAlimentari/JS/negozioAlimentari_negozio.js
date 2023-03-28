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

    getNProdotti(){
        return this.prodottiDisponibili.length;
    }

    getValProdotti(){
        
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
document.writeln("Lunghezza prodotti disponibili: " + negozio.getNProdotti() + "<br>");

