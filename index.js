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
    //Store input values as they are typed

    const firstBaseName = firstBaseNameInput.value;
    console.log(firstBaseName);
});

const secondBaseNameInput = document.getElementById("second-base");

secondBaseNameInput.addEventListener("input", function(){
    const secondBaseName = secondBaseNameInput.value;
    console.log(secondBaseName);
});

const thirdBaseNameInput = document.getElementById("third-base");

thirdBaseNameInput.addEventListener("input", function(){
    const thirdBaseName = thirdBaseNameInput.value;
    console.log(thirdBaseName);
});

const shortstopNameInput = document.getElementById("shortstop");

shortstopNameInput.addEventListener("input", function(){
    const shortstopName = shortstopNameInput.value;
    console.log(shortstopName);
});

const catcherNameInput = document.getElementById("catcher");

catcher.addEventListener("input", function(){
    const catcherName = catcherNameInput.value;
    console.log(catcherName);
});

const leftFieldNameInput = document.getElementById("left-field");

leftFieldNameInput.addEventListener("input", function(){
    const leftFieldName = leftFieldNameInput.value;
    console.log(leftFieldName);
});

const rightFieldNameInput = document.getElementById("right-field");

rightFieldNameInput.addEventListener("input", function(){
    const rightFieldName = rightFieldNameInput.value;
    console.log(rightFieldName);
});

const centerFieldNameInput = document.getElementById("center-field");

centerFieldNameInput.addEventListener("input", function(){
    const centerFieldName = centerFieldNameInput.value;
    console.log(centerFieldName);
});

const designatedHitterNameInput = document.getElementById("designated-hitter");

designatedHitterNameInput.addEventListener("input", function(){
    const designatedHitterName = designatedHitterNameInput.value;
    console.log(designatedHitterName);
});





