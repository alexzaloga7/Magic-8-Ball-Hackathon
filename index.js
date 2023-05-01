const mainEl = document.querySelector(".hero");

const heroEl = document.createElement("div");
heroEl.classList.add("hero__background");
mainEl.append(heroEl);

const headerEl = document.createElement("h1");
headerEl.classList.add("hero__header");
headerEl.classList.add("font-effect-fire");
headerEl.innerText = "Magic 8 Ball";
heroEl.append(headerEl);

const ballEl = document.createElement("div");
ballEl.className = "ball";
heroEl.append(ballEl);

const whiteCircle = document.createElement("div");
whiteCircle.className = "whitecircle";
ballEl.append(whiteCircle);

const answerEl = document.createElement("p");
answerEl.id = "response";
answerEl.innerText = "8";
whiteCircle.append(answerEl);

const formEl = document.createElement("form");
formEl.className = "form";
heroEl.append(formEl);

const questionEl = document.createElement("input");
questionEl.id = "question";
questionEl.setAttribute("type", "text");
questionEl.setAttribute("name", "question");
questionEl.setAttribute("placehoder", "Ask Me Anthing on Your Mind!");

formEl.append(questionEl);

const btnEl = document.createElement("button");
btnEl.className = "btn";
btnEl.innerText = "Tell Me My Fortune!";
formEl.append(btnEl);

const descriptionEl = document.createElement("p");
descriptionEl.className = "website-description";
descriptionEl.innerText =
  "Have any of you fellow developers ever been stuck inside a LOOP? Have questions you cant find the answer to? Look no further! The magic eight ball will solve all your problems. The better alernative to ChatGPT! Just type any question into the box and the magic 8 ball will solve your problems!";
heroEl.append(descriptionEl);

//import axios from "axios";

const options = {
  method: "GET",
  url: "https://magic-8-ball1.p.rapidapi.com/my_answer/",
  params: {
    question: "I will succeed ?",
  },
  headers: {
    "X-RapidAPI-Key": "2fce1d27c1msh3868b4e49547c42p183b36jsn6ec8c7494817",
    "X-RapidAPI-Host": "magic-8-ball1.p.rapidapi.com",
  },
};

const handleSubmit = (event) => {
  event.preventDefault();

  console.log("hi");

  axios
    .request(options)
    .then((response) => {
      console.log(response.data.answer);
      answerEl.innerText = response.data.answer;
      answerEl.removeAttribute("id", "response");
      answerEl.classList.add("answer");
    })
    .catch((error) => {
      console.log(error);
      answerEl.innerText = "Failed to get answer. Try again later.";
    });

  event.target.reset();
};

formEl.addEventListener("submit", handleSubmit);
