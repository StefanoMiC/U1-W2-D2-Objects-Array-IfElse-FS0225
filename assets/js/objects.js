// OGGETTI

/*
    Un Oggetto in JavaScript è una struttura che ci consente di modellare entità del mondo reale.
    Ovvero in tutte quelle situazioni in cui non ci bastano stringhe, numeri, booleani, ecc..
    Avemo quindi bisogno di aggregare più informazioni dentro un'unica variabile/costante.

    L'oggetto è una struttura delimitata da GRAFFE con all'interno coppie CHIAVE - VALORE separate da VIRGOLE

    Useremo gli oggetti quando dovremo descrivere entità più complesse di un singolo valore.

    Creare variabili separate per nome, cognome, età, regione, ecc. non ha più senso, se queste si riferiscono alla stessa persona/entità
*/

const teacher = {
  name: "Stefano",
  surname: "Miceli",
  age: 35,
  hasWebcam: true,
  location: {
    region: "FVG",
    country: "Italy",
    coordinates: {
      lat: 49.728,
      lon: 25.272
    }
  },
  "e-mail": "stefano@epicode.it",
  "is Live Now": true,
  toBeDeleted: "cancellami"
};

console.log(teacher); // Object

// DOT NOTATION
console.log(teacher.name); // String ==> "Stefano"
console.log(teacher.surname); // String ==> "Miceli"
console.log(teacher.age); // Number ==> 35

console.log(teacher.location.coordinates.lat);
console.log(teacher.location.coordinates.lon);

// SQUARE BRACKETS NOTATION
console.log(teacher["age"]);
console.log(teacher["location"]["coordinates"]["lat"]);
console.log(teacher["location"]["coordinates"]["lon"]);

// console.log(teacher.e - mail); // non possiamo mai accedere ad una proprietà "e-mail" tramite la dot notation
// ci tocca ricorrere alla square brackets notation
console.log(teacher["e-mail"]); // "stefano@epicode.it"
console.log(teacher["is Live Now"]); // true
// la square brackets ha anche un superpotere!
// poter valutare valori dinamici (varibili) o espressioni al suo interno

console.log(teacher["e" + "-" + "mail"]); // teacher["e-mail"] // "stefano@epicode.it"

const propertyToLookUpFor = "hasWebcam";
console.log(teacher[propertyToLookUpFor]); // teacher["hasWebcam"] // true

// AGGIUNGERE UN VALORE PROGRAMMATICAMENTE
console.log(teacher);

console.log(teacher.height); // undefined
// da questo momento l'oggetto teacher acquisirà una coppia chiave:valore per height
teacher.height = 180;
console.log(teacher.height); // 180

// inseriamo la temperatura dentro la location di teacher

console.log(teacher.location.temp); // undefined
teacher.location.temp = 12;
console.log(teacher.location.temp); // 12

// ELIMINARE UNA PROPRIETA'
console.log(teacher.toBeDeleted); // "cancellami"
delete teacher.toBeDeleted;
console.log(teacher.toBeDeleted); // undefined
