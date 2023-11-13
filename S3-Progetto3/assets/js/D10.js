/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20; 
console.log(sum); 


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor((Math.random()) * 21); 
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: 'Jessica',
  surname: 'Cairone', 
  age: 28
}

console.log(me);


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age; 

console.log(me);


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

let skills = ['JavaScript', 'Java', 'Python', 'PHP', 'C/C++'];

me.skills = skills;

console.log(me); 

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push('Swift'); 
console.log(me);


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop(); 
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  let x = Math.ceil(Math.random() * 6); 
  // let y = Math.floor(Math.random() * 6) + 1; 
  console.log(x);
  // console.log(y);
  return x;
}

dice(); 


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b; 
  }
}

let risultato = whoIsBigger(15,17);
console.log(risultato); 

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe (stringa) {
 let nuovoArray = stringa.split(' ');
 return nuovoArray;
}

let output = splitMe('I love sunflowers');
console.log(output); 

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne (parola, bool) {

 if (bool === true) {
  return parola.substring(1, parola.length); 
 } else {
  return parola.substring(0, parola.length - 1);
 }
}

let output2 = deleteOne('croissant', true); 
console.log(output2);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters (stringa1) {
  let parolaFinale = stringa1.replaceAll('0', '');
  parolaFinale = parolaFinale.replaceAll('1', '');
  parolaFinale = parolaFinale.replaceAll('2', '');
  parolaFinale = parolaFinale.replaceAll('3', '');
  parolaFinale = parolaFinale.replaceAll('4', '');
  parolaFinale = parolaFinale.replaceAll('5', '');
  parolaFinale = parolaFinale.replaceAll('6', '');
  parolaFinale = parolaFinale.replaceAll('7', '');
  parolaFinale = parolaFinale.replaceAll('8', '');
  parolaFinale = parolaFinale.replaceAll('9', '');
  return parolaFinale;
}

let nuovaStringa = onlyLetters('I have 2 dogs and 5 cats');
console.log(nuovaStringa);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail (stringa2) {
  let punto = stringa2.lastIndexOf('.');
  let chiocciola = stringa2.indexOf('@');
if (stringa2.includes('@') && stringa2.includes('.') && punto > chiocciola) {
  return true;
} else {
  return false;
}
}

let checkedEmail = isThisAnEmail ('mario.rossi@gmail.com');
console.log(checkedEmail);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt () {
  const dataOggi = new Date();
  let oggi = dataOggi.getDay();
  let giorno = '';  

  switch (oggi) {
    case 1:
		giorno = 'lunedì';
		break;

	case 2:
		giorno = 'martedì';
		break;

	case 3:
		giorno = 'mercoledì';
		break;

	case 4:
		giorno = 'giovedì';
		break;

	case 5:
		giorno = 'venerdì';
		break;

	case 6:
		giorno = 'sabato';
		break;

	default:
		giorno = 'domenica';
		break;
 }
return giorno;
}
  let giornoOdierno = whatDayIsIt(); 
  console.log(giornoOdierno);



/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices (numeroLanci) {

  let oggetto = {
    sum: 0,
    values: []
  };

  let somma = 0;
  let valoriEstratti = [];

for (i = 0; i < numeroLanci; i++) {
  let invocaFunzione = dice(); 
 // console.log(invocaFunzione);

  somma = somma + invocaFunzione;
 valoriEstratti.push(invocaFunzione);  
  
}

oggetto.sum = somma;
oggetto.values = valoriEstratti;

return oggetto;

}

let risultato3 = rollTheDices(5); 
console.log(risultato3);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays (dataPassata) {
  const dataAttuale = new Date();
  let dataOggi = Date.parse(dataAttuale);
  //console.log(dataOggi);
  let dataPassataInMillisecondi = Date.parse(dataPassata);
  //console.log(dataPassataInMillisecondi);
let diffGiorni = dataOggi - dataPassataInMillisecondi; 
diffGiorni = Math.floor(diffGiorni / 86400000); 
return diffGiorni;
}

let giorniTrascorsi = howManyDays(new Date('07/07/1995')); 
console.log(giorniTrascorsi);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday () {
  const dataOdierna = new Date();
  const mioCompleanno = new Date('07/07');
  if (dataOdierna.getDate() === mioCompleanno.getDate() && dataOdierna.getMonth() === mioCompleanno.getMonth()) {
    return true;
  } else {
    return false;
  }
}
 let yesOrNot = isTodayMyBirthday();
 console.log(yesOrNot); 

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/


function deleteProp (mioOggetto, proprieta) {
  delete mioOggetto[proprieta];
  return mioOggetto; 
}

let output3 = deleteProp(me, 'surname'); 
console.log(output3); 

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

function newestMovie (movies) { 
let filmPiuRecente = movies[0];
for (i = 0; i < movies.length; i++) {
  if (parseInt(movies[i].Year) > parseInt(filmPiuRecente.Year)) {
    filmPiuRecente = movies[i];
  }
}

return filmPiuRecente;
} 
 let ultimaUscita = newestMovie(movies); 
 console.log(ultimaUscita.Title); 


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies (movies) {
  let numeroFilm = movies.length; 
  return numeroFilm;
}

let totaleFilm = countMovies(movies); 
console.log(totaleFilm);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears (movies) {
  let anni = [];
  for (i = 0; i < movies.length; i++) {
anni.push(movies[i].Year); 
  } return anni;
}

let anniFilm = onlyTheYears(movies); 
console.log(anniFilm);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium (movies) {
  let filmNovecenteschi = [];
  for (i = 0; i < movies.length; i++) {
    let annoFilm = parseInt(movies[i].Year);
    if (annoFilm < 2000) {
      filmNovecenteschi.push(movies[i]); 
    }
  } return filmNovecenteschi;
}

let filmMillennioScorso = onlyInLastMillennium(movies); 
console.log(filmMillennioScorso);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears (movies) {
  let sommaAnni = 0;
  for (i = 0; i < movies.length; i++) {
 sommaAnni = sommaAnni + parseInt(movies[i].Year); 
} return sommaAnni;
}

let totaleAnni = sumAllTheYears(movies); 
console.log(totaleAnni);


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle (stringa) {
  let titoli = [];
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title.toUpperCase().includes(stringa.toUpperCase())) {
titoli.push(movies[i].Title); 
    }
  } return titoli;
}

let ricerca = searchByTitle('Rings');
console.log(ricerca);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide (termineDiRicerca) {
  let oggettoFilm = {
    match: [],
    unmatch: []
  }
    for (i = 0; i < movies.length; i++) {
      if (movies[i].Title.toUpperCase().includes(termineDiRicerca.toUpperCase())) {
        oggettoFilm.match.push(movies[i].Title);
      } else {
        oggettoFilm.unmatch.push(movies[i].Title);
      }
  } return oggettoFilm;
}

let selezione = searchAndDivide('Rings');
console.log(selezione);


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex (num) {
movies.splice(num, 1); 
return movies;
}

let rimozione = removeIndex(7); 
console.log(rimozione); 

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function findContainer() {
return document.getElementById('container').innerHTML;
}

console.log(findContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function findTd () {
 return document.getElementsByTagName('td');
}
 console.log(findTd());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/ 
function printText () {
  let arrayElementi = [];
let elementi = document.getElementsByTagName('td');
for (let i = 0; i < elementi.length; i++) {
  arrayElementi.push(elementi[i].innerText); 
}
return arrayElementi; 
}
 console.log(printText());


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function redLinks () {
 let elementi = document.querySelectorAll('.links');
 for (let i = 0; i < elementi.length; i++) {
  elementi[i].style.backgroundColor = 'red';
  }
}
redLinks(); 

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function aggiungiElemento () {
let lista = document.querySelector('#myList');
let nuovoElemento = document.createElement('li');
nuovoElemento.innerText = 'Sono il nuovo elemento'; 
lista.appendChild(nuovoElemento); 
}

aggiungiElemento(); 


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuotaLista () {
  document.querySelector('#myList').innerHTML = ''; 
}
svuotaLista(); 

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function aggiungiClasse () {
  let righe = document.getElementsByTagName('tr');
  for (i = 0; i < righe.length; i++) {
    righe[i].classList.add('test'); 
  }
}

aggiungiClasse(); 

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

//let mezzoAlbero = halfTree(4); 



/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime (numeroPrimoProva) {

  let numeroDiDivisori = [];
for (i = 1; i <= numeroPrimoProva; i++) {

if (numeroPrimoProva % i === 0 ) {
  numeroDiDivisori.push(i); 
}
} 
console.log(numeroDiDivisori);
if (numeroDiDivisori.length === 2) {
  return true; 
} else {
  return false;
}
}

let numeroPrimo = isItPrime(17); 
console.log(numeroPrimo);


/* Questo array viene usato per gli esercizi. Non modificarlo. */


