// JavaScript to toggle the dropdown for both mobile and desktop
function toggleDropdown(button) {
    var dropdownContent = button.nextElementSibling;
    var isActive = button.classList.contains('active');

    // Close all dropdowns
    var allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(function (dropdown) {
        var content = dropdown.querySelector('.dropdown-content');
        content.style.display = 'none';
        dropdown.querySelector('button').classList.remove('active');
    });

    // Toggle the clicked dropdown
    if (!isActive) {
        dropdownContent.style.display = 'block';
        button.classList.add('active');
    }
}

// Close submenus when clicking outside
window.addEventListener("click", function (event) {
    var dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
            var dropdownContent = dropdown.querySelector(".dropdown-content");
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
                dropdown.querySelector("button").classList.remove('active');
            }
        }
    });
});


const images = [
  '../NotesWebpage/Image/tentonM.png', // Relative path to the "images" directory
  '../NotesWebpage/Image/stanton.jpg',
  '../NotesWebpage/Image/gunna-gunna-wunna (1).gif',
];

let currentImageIndex = 0;
 bodyElement = document.body;
 changeBgButton = document.getElementById('changeBgButton');
changeBgButton.addEventListener('click', changeBackground);

function changeBackground() {
  bodyElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

