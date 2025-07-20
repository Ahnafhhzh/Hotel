const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

document.addEventListener('DOMContentLoaded', () => {
const toggleBtn = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

// Toggle Categories dropdown
toggleBtn.addEventListener('click', (e) => {
e.stopPropagation();
// Close all other dropdowns if needed
document.querySelectorAll('.dropdown-content').forEach(menu => {
        if (menu !== dropdownMenu) menu.classList.remove('show');
});
// Toggle current
dropdownMenu.classList.toggle('show');
});

// Close dropdown if clicking outside
document.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
    });
});