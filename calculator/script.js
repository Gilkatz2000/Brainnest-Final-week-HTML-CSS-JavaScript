let input = document.getElementById("input");

function display(num) {
    input.value += num;
}

function clear() {
    input.value = ""
}

function del() {
    input.value  = input.value.slice(0, -1);

}


function equal() {
    try {
        input.value = eval(input.value);   
    } catch (error) {
        alert("Invalid Input!!!");
    }
}