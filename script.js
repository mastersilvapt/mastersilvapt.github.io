function average() {
    var table = document.getElementById('college_fcup_units');
    var sumEtcs = 0;
    var sumEtcsTimesGrade = 0;

    if (table == null || table.rows == null) {
        console.log("table/rows null");
        return;
    }

    for (var i = 1; i < table.rows.length - 1; i++) {
        var etcs = table.rows[i].cells[3];
        var cell = table.rows[i].cells[4];
        if (cell == null || cell.innerText == null || cell.innerText == "") continue;
        sumEtcsTimesGrade += parseInt(etcs.innerText) * parseInt(cell.innerText);
        sumEtcs += parseInt(etcs.innerText);
    }
    var average = sumEtcsTimesGrade / sumEtcs;
    document.getElementById("average").innerText = average.toString().substring(0, 5);
}

function etcs(){
    var sumEtcs = 0;
    var table = document.getElementById('college_fcup_units');
    for (var i = 1; i < table.rows.length - 1; i++) {
        var etcs = table.rows[i].cells[3];
        if (etcs == null || etcs.innerText == null || etcs.innerText == "") continue;
        sumEtcs += parseInt(etcs.innerText);
    }
    document.getElementById("etcs").innerText = sumEtcs.toString();
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