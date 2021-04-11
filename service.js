var diff;
var hours, minutes;
var startDate, endDate;
var initialHour, finalHour;
var initialDate, finalDate;

function calculateHourWorked() {
    getInputs();
    
    initialDate = initialDate.split("-");
    finalDate = finalDate.split("-");
    dateValidation(initialDate, finalDate);
    initialHour = initialHour.split(":");
    finalHour = finalHour.split(":");

    if (initialDate[2] == finalDate[2]) {
        startDate = new Date(0, 0, 0, initialHour[0], initialHour[1], 0);
        endDate = new Date(0, 0, 0, finalHour[0], finalHour[1], 0);
    }
    else {
        startDate = new Date(0, 0, initialDate[2], initialHour[0], initialHour[1], 0);
        endDate = new Date(0, 0, finalDate[2], finalHour[0], finalHour[1], 0);
    }
    diff = endDate.getTime() - startDate.getTime();
    hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    minutes = Math.floor(diff / 1000 / 60);
    document.getElementById("totalHours").innerText = hours + ":" + minutes;
}

function getInputs() {
    initialHour = document.getElementById("initialTime").value;
    initialDate = document.getElementById("initialDate").value;
    finalHour   = document.getElementById("finalTime").value;
    finalDate   = document.getElementById("finalDate").value;
    fieldsValidation();
    
}

function dateValidation(firstDate, lastDate) {
    if (lastDate < firstDate) {
        alert("Data de saída não pode ser maior que a de entrada!");
    }
}

function fieldsValidation() {
    
    if (initialHour === "" || finalHour === "") {
        alert("Os campos de Horas devem ser preenchidos!");
    }
    else if (initialDate === "" || finalDate === "") {
        alert("As datas de entrada e saída devem ser selecionadas!");
    }
    
}