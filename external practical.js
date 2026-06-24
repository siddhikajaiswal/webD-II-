function checkNumber() {
    let num = document.getElementById("number").value;
    let result = document.getElementById("result");

    if (num === "") {
        result.innerHTML = "Please enter a number!";
        result.style.color = "red";
        return;
    }

    num = parseInt(num);

    if (num % 2 === 0) {
        result.innerHTML = num + " is Even";
        result.style.color = "green";
    } else {
        result.innerHTML = num + " is Odd";
        result.style.color = "orange";
    }
}