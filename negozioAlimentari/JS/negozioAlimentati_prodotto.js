class Prodotto{
    #m_nomeP = null;
    #m_codiceP = null;
    #m_prezzoP = null;
    #m_quantitaP = null;
    #m_scadenzaP = null;
    #m_freschezzaP = Boolean;
    constructor(nomeP, codiceP, prezzoP, quantitaP, scadenzaP){
        this.nomeP = nomeP;
        this.codiceP = codiceP;
        this.prezzoP = prezzoP;
        this.quantitaP = quantitaP;
        this.scadenzaP = scadenzaP;
    }


get nomeP(){
    return this.#m_nomeP;
}
get codiceP(){
    return this.#m_codiceP;
}
get prezzoP(){
    return this.#m_prezzoP;
}
get quantitaP(){
    return this.#m_quantitaP;
}
get scadenzaP(){
    return this.#m_scadenzaP;
}
set nomeP(nuovoNomeP){
    this.#m_nomeP = nuovoNomeP;
}
set codiceP(nuovoCodiceP){
    this.#m_codiceP = nuovoCodiceP;
}
set prezzoP(nuovoPrezzoP){
    this.#m_prezzoP = nuovoPrezzoP;
}
set quantitaP(nuovoQuantitaP){
    this.#m_quantitaP = nuovoQuantitaP;
}
set scadenzaP(nuovoScadenzaP){
    this.#m_scadenzaP = nuovoScadenzaP;
}
}
class prodottoFresco extends Prodotto{
    constructor(freschezzaP){
    freschezzaP = "";
    let x = Math.floor(Math.random()*2);
    
    if (x = 1){
            freschezzaP = "Prodotto fresco"
        }
        else{
            freschezzaP = "Prodotto non fresco"
        }
        
}
}
class prodottoConfezionato extends Prodotto{
    constructor(tipoConfezione){
    tipoConfezione = "";
}
}
