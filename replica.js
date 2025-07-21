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
const bookBtn = document.querySelector('.book-btn');
const bookingModal = document.getElementById('bookingModal');
const closeBooking = document.getElementById('closeBooking');

bookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  bookingModal.style.display = 'flex';
});

// Close modal on clicking close button
closeBooking.addEventListener('click', () => {
  bookingModal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === bookingModal) {
    bookingModal.style.display = 'none';
  }
});

// Optional: handle form submission (just prevent default for now)
document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Booking submitted! Thank you.');
  bookingModal.style.display = 'none';
});