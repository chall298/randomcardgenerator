/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();

  setTimeout(() => {
    document.querySelector(".card").classList.remove("hearts");

    document.querySelector(".card").classList.add("spade");
  }, 1000); // 1 second
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "hearts", "clubs"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
