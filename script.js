
const jokeContainerQuestion = document.getElementById("jokeQuestion");
const jokeContainerReponse = document.getElementById("jokeReponse");
const btnTwoA = document.getElementById("btnTwoA");
const btnTwoB = document.getElementById("btnTwoB");

// Fetch API
const url = "https://v2.jokeapi.dev/joke/Any?lang=fr&type=twopart";

let getJokeTwoA = () => {
    jokeContainerQuestion.classList.remove("fade");
    jokeContainerReponse.classList.remove("fade");
    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContainerQuestion.textContent = `${item.setup}`;
            jokeContainerQuestion.classList.add("fade");
            jokeContainerReponse.textContent = `${item.delivery}`;
            console.log(item)
        })
}

getJokeTwoA();

btnTwoA.addEventListener("click", getJokeTwoA);

let getJokeTwoB = () => {
    jokeContainerReponse.classList.add("fade");
}
getJokeTwoB();

btnTwoB.addEventListener("click", getJokeTwoB);


