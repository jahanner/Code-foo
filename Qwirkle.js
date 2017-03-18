var numTiles = 108;
var redSquares = 3, redEightStar = 3, redDiamond = 3, redFourStar = 3, redClover = 3, redCircle = 3;
var blueSquares = 3, blueEightStar = 3, blueDiamond = 3, blueFourStar = 3, blueClover = 3, blueCircle = 3;
var greenSquares = 3, greenEightStar = 3, greenDiamond = 3, greenFourStar = 3, greenClover = 3, greenCircle = 3;
var yellowSquares = 3, yellowEightStar = 3, yellowDiamond = 3, yellowFourStar = 3, yellowClover = 3, yellowCircle = 3;
var orangeSquares = 3, orangeEightStar = 3, orangeDiamond = 3, orangeFourStar = 3, orangeClover = 3, orangeCircle = 3;
var purpleSquares = 3, purpleEightStar = 3, purpleDiamond = 3, purpleFourStar = 3, purpleClover = 3, purpleCircle = 3;
var square = [redSquares, blueSquares, greenSquares, yellowSquares, orangeSquares, purpleSquares];
var eightStar = [redEightStar, blueEightStar, greenEightStar, yellowEightStar, orangeEightStar, purpleEightStar];
var diamond = [blueDiamond, redDiamond, greenDiamond, yellowDiamond, orangeDiamond, purpleDiamond];
var fourStar = [redFourStar, blueFourStar, greenFourStar, yellowFourStar, orangeFourStar, purpleFourStar];
var clover = [redClover, blueClover, greenClover, yellowClover, orangeClover, purpleClover];
var circle = [redCircle, blueCircle, greenCircle, yellowCircle, orangeCircle, purpleCircle];
var tiles_in_hand = 6;
var grid = []
for (var row = 0 ; row <= 18; row++) {
    grid[row] = [];
    for (var col = 0; col <= 18; col++) {
        grid[row][col] = '';
    }
}
console.log(grid);
//make a clickable table with drop down menus containing shape and color option. Subtract type and color upon use from global
//variable. If move is possible replace empty cell in table with selection. When turn is done, auto fill tiles_in_hand
//back to 6 with randomly selected tiles from numTiles.
function createTable(data) {
    var table = document.createElement("table");
    table.style.border = "1px solid #ffcc33";
    var thead = document.createElement("thead");
    thead.style.padding = "5px";
    var tr = document.createElement("tr");
    for (var i = 0;i < data[0].length; i++){
            var th = document.createElement("th");
            th.style.border = "2px solid #ff0000";
            var newText = document.createTextNode(data[0][i]);
            // maybe an onclick goes here!
            th.appendChild(newText);
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);

        var tbody = document.createElement("tbody");
        for(var i=1;i<data.length;i++){
            var tr = document.createElement("tr");
            for(var j=0;j<data[i].length;j++){
                var td = document.createElement("td");
                td.style.padding = "5px";
                td.style.border = "2px solid #00ff00";
                var newText = document.createTextNode(data[i][j]);
                td.appendChild(newText);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
            }
            table.appendChild(tbody);               return table;

  }
  window.onload = function() {
        var table = createTable ([
        ["1","2","3","4"],
        ["One","Two","Three","Four"],
        ["Un","Deux","Trois","Quatre"],
        ["eins","zwei","drei","vier"]
        ]);
        document.body.appendChild(table)
      }
