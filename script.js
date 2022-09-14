function average(inputId, outputId) {
    const table = document.getElementById(inputId);
    let sumEtc = 0;
    let sumEtcTimesGrade = 0;

    if (table == null || table.rows == null) {
        console.log("table/rows null");
        return;
    }

    for (let i = 1; i < table.rows.length - 1; i++) {
        const etc = table.rows[i].cells[3];
        const cell = table.rows[i].cells[4];
        if (cell == null || cell.innerText == null || cell.innerText === "") continue;
        sumEtcTimesGrade += parseInt(etc.innerText) * parseInt(cell.innerText);
        sumEtc += parseInt(etc.innerText);
    }
    const average = sumEtcTimesGrade / sumEtc;
    document.getElementById(outputId).innerText = isNaN(average) ? 0 : average.toString().substring(0, 5);
}

function calcEtc(inputId, outputId){
    let sumEtc = 0;
    const table = document.getElementById(inputId);
    for (let i = 1; i < table.rows.length - 1; i++) {
        const etc = table.rows[i].cells[3];
        if (etc == null || etc.innerText == null || etc.innerText === "") continue;
        sumEtc += parseInt(etc.innerText);
    }
    document.getElementById(outputId).innerText = sumEtc.toString();
}

function toggle(button1, button2, elem) {
    const e = document.getElementById(elem);
    const bt1 = document.getElementById(button1);
    const bt2 = document.getElementById(button2);
    if (e.style.display === "none") {
        bt1.style.display = "none"
        bt2.style.display = "block"
        //button.innerText = "Hide";
        e.style.display = "block";
    } else {
        bt1.style.display = "block"
        bt2.style.display = "none"
        //button.innerText = "Show";
        e.style.display = "none";
    }
}