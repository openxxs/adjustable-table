/**
    openxxs@gmail.com
    JS for add, remove and list rows
**/


// index of row name
var movieIdx = 0;
// keep the valid movie rows
var movieSet = {};

function addRow() {
    var movieTable = document.getElementById("movieTable");
    var movieRows = movieTable.rows;
    var rowLength = movieRows.length;

    // add new row
    var appendRow = movieTable.insertRow();
    appendRow.setAttribute("id", "movie" + movieIdx);
    var nameTd  = appendRow.insertCell(0);
    var rankTd  = appendRow.insertCell(1);
    var priceTd = appendRow.insertCell(2);
    var btnTd   = appendRow.insertCell(3);
    nameTd.innerHTML = "<input id='name" + movieIdx + "' type='text' placeholder='movie name' value='" + document.getElementById('newName').value + "'/>";
    rankTd.innerHTML = "<input id='rank" + movieIdx + "' type='text' placeholder='movie rank' value='" + document.getElementById('newRank').value + "'/>";
    priceTd.innerHTML = "<input id='price" + movieIdx + "' type='text' placeholder='ticket price' value='" + document.getElementById('newPrice').value + "'/>";
    btnTd.innerHTML = "<button class='button-add pure-button' onclick='addRow()'>Add</button><button class='button-remove pure-button' onclick='removeRow(\"movie" + movieIdx + "\")'>Remove</button>";

    // keep new row
    movieSet["movie" + movieIdx] = movieIdx;
    movieIdx = movieIdx + 1;

    // move adding-row to the bottom
    movieTable.deleteRow(rowLength - 1);
    var addingRow     = movieTable.insertRow();
    addingRow.setAttribute("id", 'addingRow');
    var addingNameTd  = addingRow.insertCell(0);
    var addingRankTd  = addingRow.insertCell(1);
    var addingPriceTd = addingRow.insertCell(2);
    var addingBtnTd   = addingRow.insertCell(3);
    addingNameTd.innerHTML  = "<input id='newName'  type='text' placeholder='movie name'/>";
    addingRankTd.innerHTML  = "<input id='newRank'  type='text' placeholder='movie rank'/>";
    addingPriceTd.innerHTML = "<input id='newPrice' type='text' placeholder='ticket price'/>";
    addingBtnTd.innerHTML   = "<button class='button-add pure-button' onclick='addRow()'>Add</button>";
}

function removeRow(removeId) {
    var movieTable = document.getElementById("movieTable");
    var movieRows = movieTable.rows;
    for (var i = 0; i < movieRows.length; i++) {
        if (movieRows[i].id == removeId) {
            movieTable.deleteRow(i);
            delete movieSet[removeId];
            break;
        }
    }
}

function submit() {
    var result = {};
    for (var movie in movieSet) {
        result["movie" + movieSet[movie]] = {
            "name" : document.getElementById("name"  + movieSet[movie]).value,
            "rank" : document.getElementById("rank"  + movieSet[movie]).value,
            "price": document.getElementById("price" + movieSet[movie]).value
        };
    }
    alert(JSON.stringify(result));
}
