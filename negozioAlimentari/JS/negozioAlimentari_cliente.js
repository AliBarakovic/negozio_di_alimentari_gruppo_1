export class Cliente{
     #m_nome;
     #m_cognome;
     #m_codice;
     #m_saldo;
     constructor(nome, cognome, codice ){
        this.nome = nome;
        this.cognome = cognome;
        this.codice = codice;
        this.saldo = saldo;
    }
    get nome(){
    return this.#m_nome;
    }
    get cognome(){
    return this.#m_cognome;
    }
    get codice(){
    return this.#m_codice;
    }
    get saldo(){
    return this.#m_saldo;
    }      
    set nome(nuovoNome){         
    this.#m_nome = nuovoNome;
    }      
    set cognome(nuovoCognome){         
    this.#m_cognome = nuovoCognome;
    }
    set codice(nuovoCodice){
    this.#m_codice = nuovoCodice;
    }
    set saldo(nuovoSaldo){
    Math.floor(Math.random() * 101);
    }
}     
	//let cliente = new Cliente("ofosfe", "oiswfwef", 987456544, 1);     
	//console.log(cliente);
