class Negozio{
    #m_nome;
    #m_indirizzo;
    #m_prodotti_disponibili;
    constructor(nome,indirizzo,prodottiDisponibili){
        this.#m_nome = nome;
        this.#m_indirizzo = indirizzo;
        this.#m_prodotti_disponibili = prodottiDisponibili;
    }

    get prodottiDisponibili(){
        return this.#m_prodotti_disponibili;
    }

    getNProdotti(){
        return this.prodottiDisponibili.length;
    }
}


