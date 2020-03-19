/*
function myMove() {
    var a = document.getElementsByClassName("card");
    a[0].style.backgroundColor = "red";
    a[0].style.transform = "translateX(400px)";
    a[0].style.transition = "all 1000ms ease";
} 


function myMove() {
    var a = document.getElementsByClassName('card');
    a[0].style.transform = 'translateY(400px)';
    a[0].style.transition = 'all 1000ms ease';
}

*/
function myMove() {
    let a = document.getElementById('card_1');
    a.style.backgroundColor = "grey";
    a.style.color = "white";
    a.style.transform = "translate(0, 400px)";
    a.style.transition = "all 1s ease";
}

//document.getElementById('button_1').addEventListener("click",myMove);

document.getElementsByClassName('b1').addEventListener("click", myMove);





