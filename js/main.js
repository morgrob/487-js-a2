//main.js for learing JS in Day 2
var x = 2;
var userName = "morgrob";
var htmlBuilder = "";

var teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dodgers","Diamondbacks","Giants","Padres","Rockies",];
var wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
var losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

var table = document.getElementById("table");

console.log(teams);
console.log(wins);
console.log(wins[x]);

var htmlBuilder = '<h2>National League</h2>';

// logic to determine the team with the most wins.
var mostWins = 0;
var winningTeam = 0;

for (var i=0; i<teams.length; i++){
  if(wins[i] >= mostWins){
    mostWins = wins[i];
    winningTeam = i;
  }
}

for (var i=0; i<teams.length; i++){
  //console.log("inside the loop " + i);
  console.log(teams[i]);

  if (i == winningTeam) {
    table.rows[i+1].cells[0].innerHTML = "<strong>" + teams[i] + "</strong>"
    table.rows[i+1].cells[1].innerHTML = "<strong>" + wins[i] + "</strong>"
    table.rows[i+1].cells[2].innerHTML = "<strong>" + losses[i] + "</strong>"
  } else {
    table.rows[i+1].cells[0].innerHTML = teams[i]
    table.rows[i+1].cells[1].innerHTML = wins[i]
    table.rows[i+1].cells[2].innerHTML = losses[i]
  }

  if (losses[i] >= 60){
    console.log("This team is horrible!");
  } else {
    console.log('This team is not that bad');
  }

}
document.getElementById('teams').innerHTML=htmlBuilder;
