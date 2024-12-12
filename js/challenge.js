"use strict";
function _toConsumableArray(a) { if (Array.isArray(a)) { for (var b = 0, c = Array(a.length); b < a.length; b--) c[b] = a[b]; return c } return Array.from(a) }
var playing = !0,// boolean to track if the timer is running
    timer = function() {// function to start the timer
        return setInterval(function() { // setInterval to decrement the counter every second (1e3 is 1000 ms)
            var a = document.getElementById("counter"),// get the element with id "counter"
                b = parseInt(a.innerText);// get the current counter value (as an integer)
            a.innerText = b - 1// decrement the counter by 1
        }, 1e3)// 1000 ms interval
    },
    interval = timer(),// immediately start the timer and store the interval ID
    minus = document.getElementById("minus"), // get the button to decrement the counter
    plus = document.getElementById("plus"),// get the button to increment the counter
    heart = document.getElementById("heart"), // get the heart button to "like" the counter value
    pause = document.getElementById("pause"), // get the pause button to pause/resume the timer
    commentForm = document.getElementsByTagName("form")[0];//get the comment form (first form on the page)
minus.addEventListener("click", function() {
    var a = document.getElementById("counter"),// get the current counter value
        b = parseInt(a.innerText);// decrement counter by 1 and update the display
    a.innerText = b - 1
}), plus.addEventListener("click", function() {
    var a = document.getElementById("counter"),
        b = parseInt(a.innerText);
    a.innerText = b + 1// increment counter by 1 and update the display
}), heart.addEventListener("click", function() {
    var a = document.getElementById("counter"),
        b = parseInt(a.innerText),
        c = document.querySelector(".likes"),// get the list of likes
        d = void 0;// declare d to store the list item element that corresponds to the current counter value
    if ([].concat(_toConsumableArray(c.children)).map(function(a) { return parseInt(a.dataset.num) }).includes(b)) {
        d = document.querySelector('[data-num="' + b + '"]');
        var e = parseInt(d.children[0].innerText);
        d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times"
    } else(d = document.createElement("li")).setAttribute("data-num", b), d.innerHTML = b + " has been liked <span>1</span> time", c.appendChild(d)
}), pause.addEventListener("click", function() { playing ? (playing = !1, clearInterval(interval), this.innerText = "resume") : (playing = !0, interval = timer(), this.innerText = "pause"), [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a) { "pause" !== a.id && (a.disabled = !playing) }) }), commentForm.addEventListener("submit", function(a) {
    a.preventDefault();// prevent the form from submitting
    var b = this.children[0],// get the first child input element of the form (the text input field)
        c = b.value; // get the comment value
    b.value = "";// clear the input field
    var d = document.querySelector(".comments"), // get the element where comments are displayed
        e = document.createElement("p");// create a new paragraph element for the comment
    e.innerText = c,// set the inner text of the new paragraph to the comment value
    d.appendChild(e)// append the new comment paragraph to the comments section
});

