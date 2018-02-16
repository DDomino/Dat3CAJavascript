
var boys = ["Peter", "lars", "Ole"]; //List of boys
var girls = ["Janne", "hanne", "Sanne"]; //List of girl
var fullList = [];
updateLists(); //Run updatelist

function updateLists() {
    var listedBoys = boys.map(function (boy) {
        return "<li>" + boy + "</li>";
    });

    var boylist = listedBoys.join("\n");
    var ulElement = document.getElementById("boysul");
    ulElement.innerHTML = boylist;

    var listedGirls = girls.map(function (girl) {
        return "<li>" + girl + "</li>";
    });

    var girllist = listedGirls.join("\n");
    var ulElement = document.getElementById("girlsul");
    ulElement.innerHTML = girllist;

    var ulElement = document.getElementById("allul");
    fullList = listedBoys.concat(listedGirls);
    fullListFormatted = fullList.join("\n");
    ulElement.innerHTML = fullListFormatted;

}




//////////////////////////////////////////////////

document.getElementById("everything").addEventListener("click", function (e) {

    var btnpressed = e.target.id;

    if (btnpressed === "addboy") {
        var newboy = document.getElementById("newboy").value;
        boys.push(newboy);
        updateLists();
    }
    if (btnpressed === "addgirl") {
        var newgirl = document.getElementById("newgirl").value;
        girls.push(newgirl);
        updateLists();
    }
    if (btnpressed === "removeboy") {
        if (document.getElementById("first").checked) {
            boys.shift();
        } else {
            boys.pop();
        }
        updateLists();
    }

    if (btnpressed === "removegirl") {
        if (document.getElementById("first").checked) {
            girls.shift();
        } else {
            girls.pop();
        }
        updateLists();
    }

    if (btnpressed === "reverse") {
        fullList.reverse();
        var ulElement = document.getElementById("allul");
        fullListFormatted = fullList.join("\n");
        ulElement.innerHTML = fullListFormatted;
    }

    if (btnpressed === "sort") {
        fullList.sort(
                (function (x, y) {
                    var a = String(x).toUpperCase();
                    var b = String(y).toUpperCase();
                    if (a > b)
                        return 1
                    if (a < b)
                        return -1
                    return 0;
                }));
        var ulElement = document.getElementById("allul");
        fullListFormatted = fullList.join("\n");
        ulElement.innerHTML = fullListFormatted;
    }



});


























