nums.addEventListener("change",function() {
        var numbers = document.getElementById("nums").value;
        if (numbers % 2 === 0) {
        console.log("It's an even number");
        } else {
        console.log("It's not an even number");
        }
});