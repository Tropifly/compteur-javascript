//partie local
const localePoints = document.getElementById("local-points");
const localePenalite = document.getElementById("local-penalite");
//partie visiteurs
const visiteurPoints = document.getElementById("visiteurs-points");
const visiteurPenalite = document.getElementById("visiteurs-penalite");
// block if else
const boiteLocal = document.getElementById("boite_child1");
const boiteVisiteur = document.getElementById("boite_child2");


  localePoints.addEventListener("click", function(event) {
    let pointsLocal = document.getElementById("boite_child1-score");
    pointsLocal.innerHTML++;
    let local = pointsLocal.innerHTML;
    let visiteur = document.getElementById("boite_child2-score").innerHTML;
    event.stopPropagation();
    event.preventDefault();

    if (local > visiteur) {
      boiteLocal.style.backgroundColor = "#2BC474";
      boiteVisiteur.style.backgroundColor = "#EE6517";
    } else if (local < visiteur) {
      boiteLocal.style.backgroundColor = "#EE6517";
      boiteVisiteur.style.backgroundColor = "#2BC474";
    } else if (visiteur === local) {
      boiteLocal.style.backgroundColor = "#8D959B";
      boiteVisiteur.style.backgroundColor = "#8D959B";
    }

  });

  localePenalite.addEventListener("click", function(event) {
    let pointsLocal = document.getElementById("boite_child1-score");
    pointsLocal.innerHTML -=2;
    let local = pointsLocal.innerHTML;
    let visiteur = document.getElementById("boite_child2-score").innerHTML;
    event.stopPropagation();
    event.preventDefault();

    if (local > visiteur) {
      boiteLocal.style.backgroundColor = "#2BC474";
      boiteVisiteur.style.backgroundColor = "#EE6517";
    } else if (local < visiteur) {
      boiteLocal.style.backgroundColor = "#EE6517";
      boiteVisiteur.style.backgroundColor = "#2BC474";
    } else if (visiteur === local) {
      boiteLocal.style.backgroundColor = "#2BC474";
      boiteVisiteur.style.backgroundColor = "#2BC474";
    }
  });

  visiteurPoints.addEventListener("click", function(event) {
    let pointsVisiteur = document.getElementById("boite_child2-score");
    pointsVisiteur.innerHTML++;
    let visiteur = pointsVisiteur.innerHTML;
    let local = document.getElementById("boite_child1-score").innerHTML;
    event.stopPropagation();
    event.preventDefault();

    if (local > visiteur) {
      boiteLocal.style.backgroundColor = "#2BC474";
      boiteVisiteur.style.backgroundColor = "#EE6517";
    } else if (local < visiteur) {
      boiteLocal.style.backgroundColor = "#EE6517";
      boiteVisiteur.style.backgroundColor = "#2BC474";
    } else if (visiteur === local) {
      boiteLocal.style.backgroundColor = "#2BC474";
      boiteVisiteur.style.backgroundColor = "#2BC474";
    }
  });

  visiteurPenalite.addEventListener("click", function(event) {
    let pointsVisiteur = document.getElementById("boite_child2-score");
    pointsVisiteur.innerHTML -= 2;
    let visiteur = pointsVisiteur.innerHTML;
    let local = document.getElementById("boite_child1-score").innerHTML;
    event.stopPropagation();
    event.preventDefault();

    if (local > visiteur) {
      boiteLocal.style.backgroundColor = "#2BC474";
      boiteVisiteur.style.backgroundColor = "#EE6517";
    } else if (local < visiteur) {
      boiteLocal.style.backgroundColor = "#EE6517";
      boiteVisiteur.style.backgroundColor = "#2BC474";
    } else if (visiteur === local) {
      boiteLocal.style.backgroundColor = "#2BC474";
      boiteVisiteur.style.backgroundColor = "#2BC474";
    }
  });

  

//remise a zero des scores
const reset = document.getElementById("remise-a-zero");

reset.addEventListener("click", function() {
  let score1 = document.getElementById("boite_child1-score");
  let score2 = document.getElementById("boite_child2-score");
  score1.innerHTML = 0;
  score2.innerHTML = 0;
  boiteLocal.style.backgroundColor = "#2BC474";
  boiteVisiteur.style.backgroundColor = "#2BC474";
});