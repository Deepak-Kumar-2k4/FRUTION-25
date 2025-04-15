document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    elements.forEach(el => observer.observe(el));
});

// document.addEventListener("DOMContentLoaded", () => {
//     const homeSection = document.querySelector('.Home');
//     const heading = homeSection.querySelector('h1');
//     let toggle = true;
  
//     setInterval( () => {
//       if (toggle) {
//         homeSection.style.background = "url('src/team.jpg') no-repeat center center / cover";
//         heading.textContent = "OUR PLACEMENT TEAM";
//       } else {
//         homeSection.style.background = "url('https://drive.google.com/thumbnail?id=1dp9pWT7Wp6tOKHGbP6Ao5pg60Gj_E1ys&sz=w1000') no-repeat center center / cover";
//         heading.textContent = "FRUTION`25 GALLERY";
//       }
//       toggle = !toggle;
//       heading.classList.remove('animated-text');
//       void heading.offsetWidth; // Force reflow
//       heading.classList.add('animated-text');
//     },2500);
//   });
document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.querySelector('.Home');
    const heading = homeSection.querySelector('h1');
    let toggle = true;
    let intervalId; // To store the setInterval reference
  
    // Function to toggle background and heading text
    function toggleBackground() {
      if (toggle) {
        homeSection.style.background = "url('src/team.jpg') no-repeat center center / cover";
        heading.textContent = "OUR PLACEMENT TEAM";
      } else {
        homeSection.style.background = "url('https://drive.google.com/thumbnail?id=1dp9pWT7Wp6tOKHGbP6Ao5pg60Gj_E1ys&sz=w1000') no-repeat center center / cover";
        heading.textContent = "FRUTION`25 GALLERY";
      }
      toggle = !toggle;
      heading.classList.remove('animated-text');
      void heading.offsetWidth; // Force reflow
      heading.classList.add('animated-text');
    }
  
    // Start the interval as soon as the page loads
    intervalId = setInterval(toggleBackground, 2000);
  
    // Stop the toggle when the mouse button is pressed down
    homeSection.addEventListener('mousedown', () => {
      if (intervalId) {
        clearInterval(intervalId); // Stop the interval
        intervalId = null; // Reset the interval ID
      }
    });
  
    // Restart the toggle when the mouse button is released
    homeSection.addEventListener('mouseup', () => {
      if (!intervalId) {
        intervalId = setInterval(toggleBackground, 2000); // Restart the interval
      }
    });
  
    // Optional: Handle touch events for mobile devices
    homeSection.addEventListener('touchstart', () => {
      if (intervalId) {
        clearInterval(intervalId); // Stop the interval
        intervalId = null; // Reset the interval ID
      }
    });
  
    homeSection.addEventListener('touchend', () => {
      if (!intervalId) {
        intervalId = setInterval(toggleBackground, 2000); // Restart the interval
      }
    });
  });
  