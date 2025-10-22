import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for (let i of pronoun) {          // Primer bucle: recorre cada pronombre
  for (let a of adj) {            // Segundo bucle: recorre cada adjetivo
    for (let n of noun) {         // Tercer bucle: recorre cada sustantivo
      console.log(i + a + n + ".com");  // Combina y muestra el dominio
    }
  }
}
}
