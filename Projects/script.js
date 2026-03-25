document.querySelectorAll('.apply-referral').forEach(button => {
  button.addEventListener('click', function() {
      let card = this.closest('.bundle-card');
      let input = card.querySelector('.referral');
      let priceTag = card.querySelector('.discount-price');
      let originalPrice = parseInt(card.getAttribute('data-original-price'));
      
      let referrals = [
          { code: "DISCFF30", discount: 30 },
          { code: "DISCFF40", discount: 40 },
          { code: "DISCFF60", discount: 60 },
          { code: "DISC80FF", discount: 80 },
          { code: "DISC75FF", discount: 75 }
      ];
      
      let appliedReferral = referrals.find(ref => ref.code === input.value.trim());
      
      if (appliedReferral) {
          let discountAmount = (originalPrice * appliedReferral.discount) / 100;
          let newPrice = originalPrice - discountAmount;
          priceTag.textContent = `${newPrice.toFixed(2)}`;
          alert(`Referral Applied! ${appliedReferral.discount}% Off 🎉`);
      } else {
          alert("Invalid referral code ❌");
      }
  }); 
});

document.querySelectorAll('.buy-button').forEach(button => {
  button.addEventListener('click', function() {
      const referral = this.previousElementSibling.value;
      this.innerHTML = '✅ Purchased!';
      this.style.background = '#27ae60';
      
      const project = this.parentElement.querySelector('h2').textContent.split(' ')[0];
      const encodedMessage = encodeURIComponent(`I'm interested in the ${project} bundle. Referral Code: ${referral}`);
      window.open(`https://wa.me/919490338810?text=${encodedMessage}`, '_blank');
  });
});

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
