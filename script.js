document.getElementById("year").textContent = new Date().getFullYear();
const menuButton = document.querySelector(".menu-button");
const nav = document.getElementById("main-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open ? "true" : "false");
});
document.querySelectorAll("#main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
const emailButton = document.getElementById("email-button");
const emailOutput = document.getElementById("email-output");
emailButton.addEventListener("click", () => {
  const address = "raulreyesca84" + "@" + "gmail.com";
  emailOutput.innerHTML = '<a href="mailto:' + address + '">' + address + "</a>";
  emailButton.remove();
});
