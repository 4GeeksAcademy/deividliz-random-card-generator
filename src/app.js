/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const palos = ["♦", "♥", "♠", "♣"];
  const colores = { "♦": "red", "♥": "red", "♠": "black", "♣": "black" };
  const valores = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  function generarCartaAleatoria() {
    let paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    let valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
    return { valor: valorAleatorio, palo: paloAleatorio };
  }

  function mostrarCarta(carta) {
    let cartaElemento = document.getElementById('cardValue');
    let iconoA = document.getElementById('iconA');
    let iconoB = document.getElementById('iconB');

    cartaElemento.textContent = carta.valor; 
    iconoA.textContent = carta.palo;
    iconoB.textContent = carta.palo;

    iconoA.style.color = colores[carta.palo];
    iconoB.style.color = colores[carta.palo];
  }
  
  let cartaAleatoria = generarCartaAleatoria();
  mostrarCarta(cartaAleatoria);
  
  console.log("Chau prettier!!");
};
