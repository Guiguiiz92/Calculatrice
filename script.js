// Liste nombre
const numberKeys = [...document.querySelectorAll(".line > .number")];
const listeNumber = numberKeys.map((key) => key.value);
console.log(listeNumber);

// Liste opérateur
const operationKeys = [...document.querySelectorAll(".line > .operation")];
const listeOperation = operationKeys.map((key) => key.value);
console.log(listeOperation);

// Liste other
const otherKeys = [...document.querySelectorAll(".line > .other")];
const listeOther = otherKeys.map((key) => key.innerHTML);
console.log(listeOther);

// écouteur d'event

document.addEventListener("keydown", (e) => {
  const valeur = e.key;
  console.log(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  console.log(valeur);
});
