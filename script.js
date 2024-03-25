var i = 0;
var i2 = 0;
var txt1 = 'Ryan Drake';
var txt2 = 'Web Developer';
var speed = 100;
var mailFormat =  /\S+@\S+\.\S+/;

const $burgercontainer = $(".burger-container");
const $sidebar = $(".smallnav");
const $bodyAll = $(".main-body");
const $burger = $(".burger");

function typeWriter() {
    if (i < txt1.length) {
        document.getElementById("demo").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
function typeWriter2() {
    if (i2 < txt2.length) {
        document.getElementById("demo2").innerHTML += txt2.charAt(i2);
        i2++;
        setTimeout(typeWriter2, speed);
    }
}

$burgercontainer.on("click", function(event){
    $burger.toggleClass("is-active");
    $(this).toggleClass("burger-clicked");
    $sidebar.toggleClass("smallnav-show");
    $bodyAll.toggleClass("allmove");
    $(".clickableoverlay").show();
    $("body").css("overflow", "hidden");
});
  
$(".clickableoverlay").on("click", function(){
    $(this).hide();
    $burger.toggleClass("is-active");
    $sidebar.toggleClass("smallnav-show");
    $bodyAll.toggleClass("allmove");
    $("body").css("overflow", "auto");
});

function validateForm() {
    let w = document.forms["nameForm"]["name"].value;
    let x = document.forms["emailForm"]["email"].value;
    let y = document.forms["subjectForm"]["subject"].value;
    let z = document.forms["messageForm"]["message"].value;
    if (w == "") {
        alert("Name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Subject must be filled out");
        return false;
    }
    if (z == "") {
        alert("Message must be filled out");
        return false;
    }
    if (x.match(mailFormat)) {
        return true;
    } else {
        alert("Invalid address!");
        return false;
    }
    
}