// В старояпонском календаре был принят 60-летний цикл, 
// состоящий из пяти 12-летних подциклов. Подциклы обозначались
// названиями цвета: зеленый, красный, желтый, белый, черный. 
// Внутри каждого подцикла годы носили названия животных:
// крысы, коровы, тигра, зайца, дракона, змеи, лошади, овцы, 
// обезьяны, курицы, собаки и свиньи. Например, 1984 год
// (год зеленой крысы) был началом очередного цикла. 
// Напишите сценарий, который по заданной дате определяет название
// года по старояпонскому календарю. Сделайте ответы изображениями

const btn = document.querySelector("#year__btn");
const input = document.querySelector("#year__id");
const display = document.querySelector(".year__display");
// const color = document.querySelector(".color");
// const animal = document.querySelector(".animal");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  var num = parseInt(input.value);
  const display = document.querySelector(".animal-pic");
  display.setAttribute('class', 'animal-pic');
  var child = display.children[0];


// ищем цвет
  while (num > 60) {
    num -= 60;
  }
  
  if (num <= 13 && num > 0) {
    display.classList.add("green");
  } if (num <= 24 && num > 12) {
    display.classList.add("red");
  } if (num <= 36 && num > 24) {
    display.classList.add("yellow");
  } if (num <= 48 && num > 36) {
    display.classList.add("white");
  } if (num <= 60 && num > 48) {
    display.classList.add("black");
  }

  // ищем животное
  while (num > 12) {
    num -= 12;
  }

  if (num == 1) {
    child.setAttribute('xlink:href', '../../images/animal.svg#chicken');
  } if (num == 2) {
    child.setAttribute('xlink:href', '../../images/animal.svg#dog');
  } if (num == 3) {
    child.setAttribute('xlink:href', '../../images/animal.svg#pig');
  } if (num == 4) {
    child.setAttribute('xlink:href', '../../images/animal.svg#rat');
  } if (num == 5) {
    child.setAttribute('xlink:href', '../../images/animal.svg#bull');
  } if (num == 6) {
    child.setAttribute('xlink:href', '../../images/animal.svg#tiger');
  } if (num == 7) {
    child.setAttribute('xlink:href', '../../images/animal.svg#rabbit');
  } if (num == 8) {
    child.setAttribute('xlink:href', '../../images/animal.svg#dragon');
  } if (num == 9) {
    child.setAttribute('xlink:href', '../../images/animal.svg#snake');
  } if (num == 10) {
    child.setAttribute('xlink:href', '../../images/animal.svg#horse');
  } if (num == 11) {
    child.setAttribute('xlink:href', '../../images/animal.svg#sheep');
  } if (num == 12) {
    child.setAttribute('xlink:href', '../../images/animal.svg#monkey');
  } 

});


