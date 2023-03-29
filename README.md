# negozio_di_alimentari_gruppo_1
ruoli : 

    capogruppo = Ali
    file readme = Elias   
    UML = Ali
    JS_prodotto = Ali
    JS_cliente = Elias
    JS_negozio = Thomas

## Negozio di alimentari

Si vuole realizzare un sistema di gestione di un negozio di alimentari. 

Le entità principali del sistema sono i prodotti e i clienti. 

I prodotti hanno un nome, un codice univoco, un prezzo e una quantità disponibile in magazzino. I prodotti possono essere 
freschi ed in questo caso hanno una data di scadenza oppure confezionati ed in questo caso hanno un tipo di confezione: ad 
esempio, lattina, barattolo, scatola, ecc.

I clienti hanno un nome, un cognome, un codice univoco e un saldo disponibile per gli acquisti.

Il negozio deve poter calcolare il numero totale di prodotti disponibili in magazzino.

Il negozio deve poter calcolare il valore complessivo dei prodotti disponibili in magazzino.


## Immagine del diagramma UML
![Negozio di alimentari](https://github.com/AliBarakovic/negozio_di_alimentari_gruppo_1/blob/main/negozioAlimentari/UML/negozioAlimentariUML.svg?raw=true)
## Codice del diagramma UML

``` plantUml
@startuml
class Negozio{
  nome : string
  indirizzo : string
  prodottiDisponibili : Prodotto[]

  getNProdotti() : int
  getValProdotti() : int
}

class Cliente{
  nome : string
  cognome : string
  codice : int
  saldo : int
  
  getSaldo() : int
}

class Prodotto{
  nome : string
  codice : int
  prezzo : int
  quantitaDisponibile : int

  
}
class prodottoConfezionato{
tipoConfezione : string
}
class prodottoFresco{
dataScadenza : Date  

Negozio "1..1"--"1..N" Cliente : possiede
Cliente "1..1" -- "1..N" Prodotto : acquista
Prodotto "1..N"--"1..1" Negozio : è venduto
Negozio "1..1"-- "1..N"Prodotto : vende
prodottoConfezionato --|> Prodotto
prodottoFresco --|> Prodotto
@enduml
```

