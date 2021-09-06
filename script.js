function average(){
    var table = document.getElementById("college_fcup_units");
    var sum = 0;
    var rows = table.rows;
    var tr = document.createElement('tr');
    
    for(var i = 0, row; rows.length > i ; i++){
        sum += parseInt(table.rows[i].cells[2].innerHTLM);
    }
    console.log(sum);
    return sum;
}