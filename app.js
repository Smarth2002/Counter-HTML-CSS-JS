//count value to display
let cnt = 0;

const counter = document.getElementById("value");
let buttons = document.querySelectorAll(".btn");

//add event listener to all buttons
buttons.forEach(function (btn) {

    btn.addEventListener("click", function () {
//accessing classlist of targe button and checking specific class in it
        if (this.classList.contains("decrease"))
            cnt--
        else if (this.classList.contains("reset"))
            cnt = 0;
        else
            cnt++;

        counter.textContent = cnt;

        if (cnt < 0)
            counter.style.color = "red";
        else if (cnt > 0)
            counter.style.color = "green";
        else
            counter.style.color = "#222";
    })
})
