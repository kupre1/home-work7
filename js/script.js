let first = Number(prompt("გთხოვთ შეიყვანოთ ასაკი"));
let second = prompt("გთხოვთ შეიყვანოთ ტიპი ფილმის(3D ან ჩვეულებრივი ");
let third = prompt("მიუთითეთ დღის მონაკვეთი (დილა ან ღამე)");

switch (true) {
  case first <= 10:
    first = 5;
    break;
  case first >= 10 && first <= 65:
    first = 15;
    break;
  case first >= 65:
    first = 10;
}

switch (true) {
  case second === "3D":
    second = 5;
    break;
  case second === "ჩვეულებრივი":
    second = 1 - 1;
    break;
}

switch (true) {
  case third === "დილა":
    third = 1 - 1;
    break;
  case third === "ღამე":
    third = 5;
    break;
}

alert(`თქვენი ბილეთის ფასი არის: ${first + second + third}  `);
