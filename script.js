//Mon écran de calcul
const ecranCalcul = document.querySelector("#operation");
const ecranResultat = document.querySelector("#resultat");

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
const listeOther = otherKeys.map((key) => key.value);
console.log(listeOther);

// Liste action
const actionKeys = [...document.querySelectorAll(".line > .action")];
const listeAction = actionKeys.map((key) => key.value);
console.log(listeAction);

// Liste all
const allowedValues = [
  ...listeNumber,
  ...listeOperation,
  ...listeOther,
  "(",
  ")",
];

const buttonList = [
  ...numberKeys,
  ...operationKeys,
  ...otherKeys,
  ...actionKeys,
];

// Function qui va afficher
function afficher(value) {
  const lastIndex = ecranCalcul.innerHTML.length - 1;
  const lastElement = ecranCalcul.innerHTML[lastIndex];
  if (listeOperation.includes(value)) {
    if (lastIndex > -1 && replaceOperator(value, lastElement)) {
      ecranCalcul.innerHTML = ecranCalcul.innerHTML.slice(0, -1) + value;
    } else if (lastIndex > -1) {
      ecranCalcul.innerHTML += value;
    }
  } else {
    ecranCalcul.innerHTML += value;
  }
}
function replaceOperator(value, lastElement) {
  return (
    listeOperation.includes(lastElement) &&
    !((lastElement === "/" || lastElement === "*") && value === "-")
  );
}

// Function pour afficher/delete/back
function manageEvent(value) {
  switch (value) {
    case "=":
    case "Enter":
      const calcul = eval(ecranCalcul.innerHTML);
      ecranResultat.innerHTML = calcul;
      break;
    case "del":
    case "Backspace":
      ecranCalcul.innerHTML = ecranCalcul.innerHTML.slice(0, -1);
      break;
    case "C":
    case "Delete":
      ecranCalcul.innerHTML = "";
      ecranResultat.innerHTML = ""; // Réinitialise le contenu de l'écran de calcul
      break;
    case "()":
      break;
    default:
      if (allowedValues.includes(value)) {
        afficher(value);
      }
  }
}

// écouteur d'event affichage

document.addEventListener("keydown", (e) => {
  const value = e.key;
  manageEvent(value);
});

for (const button of buttonList) {
  button.addEventListener("click", (e) => {
    const value = e.target.value || button.value;
    manageEvent(value);
  });
}
