let search = document.querySelector(".search");
let menu = document.querySelector(".navbar");
let games = document.querySelectorAll(".game");
let play = document.querySelectorAll(".play");
let logo = document.querySelector(".logo");
let btn2 = document.querySelector(".outer");
let body = document.querySelector("body");
let icon = document.querySelector(".icon");
let links = document.querySelectorAll("a");
let currmode = "light";
let logos = ["LogoPlay.png", "LogoWin.png", "LogoRepeat.png", "Logo.png"];
let logoIndex = 0;

// Searching Function
search.addEventListener("input", () => {
    let input = search.value.toLowerCase();
    games.forEach(game => {
        game.style.display = game.querySelector(".game-name").innerText.toLowerCase().includes(input) ? "" : "none";
    });
});

// Logo Changer
logo.addEventListener("click", () => {
    logo.src = logos[logoIndex]; 
    logoIndex = (logoIndex + 1) % logos.length;
});

// Light and Dark Mode Toggle
btn2.addEventListener("click", () => {
    icon.classList.add("spin");
    setTimeout(() => icon.classList.remove("spin"), 300);

    currmode = currmode === "light" ? "dark" : "light";
    body.style.backgroundColor = currmode === "light" ? "#fff" : "#222";
    btn2.style.backgroundColor = currmode === "light" ? "#DE9E44" : "#72462F";
    icon.innerText = currmode === "light" ? "light_mode" : "dark_mode";
    search.classList.toggle("search-dark");
    search.classList.toggle("search");
    menu.classList.toggle("navbar-dark");
    menu.classList.toggle("navbar");
    games.forEach(game => game.classList.toggle("game-dark"));
    play.forEach(btn => btn.classList.toggle("play-dark"));
    links.forEach(link => {
      link.style.color = currmode === "light" ? "black" : "white";
    })
})

// Loader
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".loader-container").style.display = "flex";
});
  window.addEventListener("load", function() {
    setTimeout(() => {
        document.querySelector(".loader-container").style.display = "none";
    }, 1000);
});