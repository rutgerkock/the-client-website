function updateHeaderLineValue() {
const headerLine = document.getElementById("header-line");
const maxScrollHeight = document.body.scrollHeight - window.innerHeight;
const currentScrollPosition = window.scrollY;
const percentageScrolled = (currentScrollPosition / maxScrollHeight) * 100;

headerLine.value = percentageScrolled;
}

window.addEventListener("scroll", updateHeaderLineValue);

updateHeaderLineValue();