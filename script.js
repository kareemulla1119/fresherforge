// Navbar toggle logic
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar ul li a');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
    navbar.classList.remove('active');
  }
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// Dropdown logic
// Dropdown logic
document.getElementById('category-dropdown').addEventListener('change', function () {
  const selectedValue = this.value; // Get the selected value
  localStorage.setItem('selectedPlan', selectedValue); // Save the selected value to local storage

  const sections = ['basic-section', 'premium-section', 'super-premium-section'];
  sections.forEach(section => {
    document.getElementById(section).style.display = 'none';
  });

  const selectedSection = selectedValue + '-section';
  document.getElementById(selectedSection).style.display = 'block';
});

// Restore the selected plan when the page loads
window.addEventListener('load', function () {
  const selectedPlan = localStorage.getItem('selectedPlan'); // Retrieve the selected value from local storage
  if (selectedPlan) {
    document.getElementById('category-dropdown').value = selectedPlan; // Set the dropdown value
    document.getElementById(selectedPlan + '-section').style.display = 'block'; // Show the corresponding section
  } else {
    // Default to "Basic" if no value is stored
    document.getElementById('basic-section').style.display = 'block';
  }
});

// WhatsApp Redirection
function redirectToWhatsApp(plan, amount) {
  const phone = "919490338810"; // Replace with your WhatsApp number
  const message = `Hi, I would like to purchase the ${plan} for ₹${amount}.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

