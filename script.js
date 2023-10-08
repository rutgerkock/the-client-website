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

document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    var body = document.body;

    dropdowns.forEach(function(dropdown) {
        var dropdownContent = dropdown.querySelector('.dropdown-content');

        dropdown.addEventListener('click', function() {
            if (dropdownContent.style.height === '0px' || dropdownContent.style.height === '') {
                dropdownContent.style.height = dropdownContent.scrollHeight + 'px';
                body.style.overflow = 'hidden'; 
            } else {
                dropdownContent.style.height = '0';
                body.style.overflow = 'auto'; 
            }
        });
    });
});


var meerLezenButtons = document.querySelectorAll(".meerLezen");

meerLezenButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        var extraText = button.parentElement.querySelector(".extraText");
        if (extraText.style.display === "none" || extraText.style.display === "") {
            extraText.style.display = "block";
        } else {
            extraText.style.display = "none";
        }
    });
});
