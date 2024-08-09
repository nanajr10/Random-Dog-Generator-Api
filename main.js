let buttonRef = document.getElementById('generateButton');
let mainInput = document.getElementById('dogInput');
let dogImg = document.getElementById('dogImg');
let dogTitle = document.getElementById('dogTitle');



//2) make function to define the changes we want to make
function generateDog(event){
    event.preventDefault();
    //capture the user's input
    let userInput = mainInput.value;
    fetch("https://dog.ceo/api/breed/"+ userInput + "/images/random")
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);
        if (myJson.status == "error"){
            dogImg.src= "confused.jpg";
            dogImg.style.width = "200px";
            dogTitle.innerText = "Woof, I don't understand that!";
        }
        else{
            dogImg.src= myJson.message;
            dogImg.style.width = "200px";
            dogTitle.innerText = userInput;
        }

    })
}

buttonRef.addEventListener("click", generateDog);