let container = document.getElementById("container");
let square = document.getElementsByClassName("square");

for (let i=1; i<=100; i++){
    container.innerHTML += `<div class="square"><p>${i}</p></div>`;
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
        square[i-1].style.backgroundColor = "#f0466f";
        square[i-1].innerHTML = "<p>fizzbuzz</p>"
    }
    else if (i % 3 === 0){
        console.log("Fizz");
        square[i-1].style.backgroundColor = "#0bd6a1";
        square[i-1].innerHTML = "<p>fizz</p>"
    }
    else if (i % 5 === 0){
        console.log("Buzz");
        square[i-1].style.backgroundColor = "#ffd166";
        square[i-1].innerHTML = "<p>buzz</p>"
    }
    else{
        console.log(i);
        square[i-1].style.backgroundColor = "#1389b2";
    }
}