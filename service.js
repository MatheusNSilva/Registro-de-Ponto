var initialHour, finalHour;
var initialDate, finalDate;

function calculateHourWorked() {
    var startDate, endDate;
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
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
    document.getElementById("totalHours").value = hours + ":" + minutes;
    event.preventDefault();
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
        alert("Data de entrada não pode ser maior que a de saída!");
        resetFields();
    }
}

function fieldsValidation() {    
    if (initialHour === "" || finalHour === "" || initialDate === "" || finalDate === "") {
        alert("Os campos de Data e Hora devem ser preenchidos corretamente!");
        resetFields();
    }
}

function resetFields() {
    document.getElementById("initialTime").value = "";
    document.getElementById("initialDate").value = "";
    document.getElementById("finalTime").value = "";
    document.getElementById("finalDate").value = "";
    document.getElementById("totalHours").value = "";
} 