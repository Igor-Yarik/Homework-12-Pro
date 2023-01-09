const myDiv = document.createElement('div');
myDiv.id = "myDiv";

function displayMyDiv() {
    document.getElementById("input").after(myDiv);
}

function hideMyDiv() {
   myDiv.remove();
}

const input = document.getElementById("input");

input.addEventListener('focus', displayMyDiv);
input.addEventListener('blur', hideMyDiv);