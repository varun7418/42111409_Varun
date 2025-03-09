let result = document.getElementById("result");

function appendValue(value) {
    result.value += value;
}

function clearDisplay() {
    result.value = "";
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try {

        result.value = eval(result.value.replace('%', '/100'));
    } catch {
        result.value = "Error";
    }
}