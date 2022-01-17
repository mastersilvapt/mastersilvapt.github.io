function average() {
    var table = document.getElementById('college_fcup_units');
    var sum = 0;
    var div = 0;

    if (table == null || table.rows == null) {
        console.log("table/rows null");
        return;
    }

    for (var i = 1; i < table.rows.length; i++) {
        var cell = table.rows[i].cells[3];
        if (cell == null || cell.innerText == null || cell.innerText == "") continue;
        sum += parseInt(cell.innerText);
        div++;
    }
    var average = sum / div;
    document.getElementById("average").innerText = average.toString().substring(0, 4);
}