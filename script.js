function average(){
    var table = document.getElementById('college_fcup_units');
    var sum = 0;
    var div = 0;
    
    if(table == null) {
        console.log("table null");
        return;
    }

    var rows = table.rows;
    var tr = document.createElement('tr');
    
    if(rows == null){
        console.log("rows null");
        return;
    }

    for(var i = 1, row; i < rows.length; i++){
        var cells = table.rows[i].cells[2];
        if(cells == null || cells.innerText == null) continue;
        sum += parseInt(cells.innerText);
        div++;
    }
    var average = sum / div;
    console.log(average.toString().substring(0,4));
    return parseFloat(average.toString().substring(0,4));
}