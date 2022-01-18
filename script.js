function average() {
    var table = document.getElementById('college_fcup_units');
    var sum = 0;
    var div = 0;

    if (table == null || table.rows == null) {
        console.log("table/rows null");
        return;
    }

    for (var i = 1; i < table.rows.length - 1; i++) {
        var cell = table.rows[i].cells[3];
        if (cell == null || cell.innerText == null || cell.innerText == "") continue;
        sum += parseInt(cell.innerText);
        div++;
    }
    var average = sum / div;
    document.getElementById("average").innerText = average.toString().substring(0, 4);
}

function toggle(button1, button2, elem) {
    if (elem.style.display === "none") {
        button1.style.display = "none"
        button2.style.display = "block"
        //button.innerText = "Hide";
        elem.style.display = "block";
    } else {
        button1.style.display = "block"
        button2.style.display = "none"
        //button.innerText = "Show";
        elem.style.display = "none";
    }
}