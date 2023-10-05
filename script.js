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

// Add this JavaScript code to toggle the dropdown on click
document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
        var dropdownContent = dropdown.querySelector('.dropdown-content');
        
        dropdown.addEventListener('click', function() {
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });
    });
});

