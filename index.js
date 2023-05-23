const playerForm = document.getElementById("lineup-form");

playerForm.addEventListener('submit', function(event){
    event.preventDefault(); // Prevent form submission with no information

    //Retrieve input values 

    const firstBaseInput = document.getElementById("first-base");
    const secondBaseInput = document.getElementById("second-base");
    const thirdBaseInput = document.getElementById("third-base");
    const shortstopInput = document.getElementById("shortstop");
    const catcherInput = document.getElementById("catcher");
    const rightFieldInput = document.getElementById("right-field");
    const leftFieldInput = document.getElementById("left-field");
    const centerFieldInput = document.getElementById("center-field");
    const designatedHitterInput = document.getElementById("designated-hitter");

    //Store input values 

    const players = [
        {position: "1B", name: firstBaseInput.value},
        {position: "2B", name: secondBaseInput.value},
        {position: "3B", name: thirdBaseInput.value},
        {position: "SS", name: shortstopInput.value},
        {position: "C", name: catcherInput.value},
        {position: "RF", name: rightFieldInput.value},
        {position: "LF", name: leftFieldInput.value},
        {position: "CF", name: centerFieldInput.value},
        {position: "DH", name: designatedHitterInput.value},
    ]

    console.log(players);

});

const firstBaseNameInput = document.getElementById("first-base");

firstBaseNameInput.addEventListener("input", function(){
    const firstBaseName = firstBaseNameInput.value;
    console.log(firstBaseName);
})

const secondBaseNameInput = document.getElementById("second-base");

secondBaseNameInput.addEventListener("input", function(){
    const secondBaseName = secondBaseNameInput.value;
    console.log(secondBaseName);
})






