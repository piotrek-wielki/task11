const wrapper = document.getElementById('wrapper');

const createCircle = function (color, text) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.backgroundColor = color;

  if (text || text === 0) {
    circle.textContent = text;
  }

  wrapper.appendChild(circle);
}

//Line breaker

const addLineBreaker = function() {
  const makeALineBreak = document.createElement('div');
  makeALineBreak.style.width = "100%";
  makeALineBreak.style.height = "2px";
  makeALineBreak.style.backgroundColor = "black";
  wrapper.appendChild(makeALineBreak);
}

// Task 1

let strings = ['Element 0', 'Element 1', 'Element 2', 'Element 3', 'Element 4', 'Element 5', 'Element 6', 'Element 7', 'Element 8', 'Element 9']

for (let i = 0; i < 9; i++) {
  strings;
}

console.log(strings);
// Task 2

for (let i = 0; i < 9; i++) {
  createCircle('yellow');
}

addLineBreaker();

// Task 3


let n = 0;
while (n < 12) {
  if (n % 2) {
    createCircle('red');
  } else {
    createCircle('cyan');
  }
  n++;
}

addLineBreaker();

// Task 4

let m = 0;
do {
  createCircle('blue', m)
  m++;
} while (m < 15);