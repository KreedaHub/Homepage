  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".loader-container").style.display = "flex";
});
  window.addEventListener("load", function() {
    setTimeout(() => {
        document.querySelector(".loader-container").style.display = "none";
    }, 1000);
});