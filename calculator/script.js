let input = document.getElementById("input");
const clearBtn = document.getElementById('clear');

function display(num) {
    input.value += num;
}

function clear() {
    input.value = "";
}

clearBtn.onclick = () => clear();

function del() {
    input.value  = input.value.slice(0, -1);
}

function equal() {
    try {
        input.value = Function("return " + input.value)();
    } catch (error) {
        alert("Invalid Input!!!");
    }
}