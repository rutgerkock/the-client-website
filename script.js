function updateHeaderLineValue() {
const headerLine = document.getElementById("header-line");
const maxScrollHeight = document.body.scrollHeight - window.innerHeight;
const currentScrollPosition = window.scrollY;
const percentageScrolled = (currentScrollPosition / maxScrollHeight) * 100;

headerLine.value = percentageScrolled;
}

window.addEventListener("scroll", updateHeaderLineValue);

updateHeaderLineValue();

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    this.reset();

const originalText = document.getElementById('submitButton').value;
document.getElementById('submitButton').value = "Verzonden!";
setTimeout(function () {
    document.getElementById('submitButton').value = originalText;
}, 5000);    
});
