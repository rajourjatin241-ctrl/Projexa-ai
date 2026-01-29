// Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Search Bar Functionality
function searchSite() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  if (!query) { alert("Enter a search term."); return; }
  let found = false;
  document.querySelectorAll("h2, h3, p, td").forEach(el => {
    if (el.innerText.toLowerCase().includes(query)) {
      el.style.backgroundColor = "#ffeaa7";
      found = true;
    } else {
      el.style.backgroundColor = "";
    }
  });
  if (!found) alert("No results found for: " + query);
}

// Contact Form Validation
function validateContactForm(event) {
  event.preventDefault();
  const name = document.querySelector("input[placeholder='Your Name']").value.trim();
  const email = document.querySelector("input[placeholder='Your Email']").value.trim();
  const message = document.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}

// Progress Circles (Student Portal)
function initProgressCircles() {
  document.querySelectorAll('.progress-circle').forEach(el => {
    let progress = el.getAttribute('data-progress');
    el.style.background = `conic-gradient(#2ecc71 ${progress}%, #ddd ${progress}%)`;
    el.innerHTML = `<span>${progress}%</span>`;
  });
}

// Certificate Download Simulation
function downloadCertificate() {
  alert("Certificate downloaded successfully!");
}

// Initialize
window.onload = () => {
  initProgressCircles();
  const contactForm = document.querySelector("form");
  if (contactForm && contactForm.querySelector("textarea")) {
    contactForm.addEventListener("submit", validateContactForm);
  }
};      
// Show feature action simulation
function showFeature(featureName) {
  alert(featureName + " feature activated!");
}
// Populate Attendance Report Table
function populateAttendanceReport() {
  const attendanceData = [
    { date: '2024-09-01', status: 'Present' },
    { date: '2024-09-02', status: 'Absent' },
    { date: '2024-09-03', status: 'Present' },
    { date: '2024-09-04', status: 'Present' },
    { date: '2024-09-05', status: 'Absent' },
  ];
  const table = document.getElementById('attendanceTable');
  attendanceData.forEach(record => {
    const row = table.insertRow();
    const cellDate = row.insertCell(0);
    const cellStatus = row.insertCell(1);
    cellDate.innerText = record.date;
    cellStatus.innerText = record.status;
  });
}
window.onload = () => {
  initProgressCircles();
  populateAttendanceReport();
  const contactForm = document.querySelector("form");
  if (contactForm && contact  
.querySelector("textarea")) { 
    contactForm.addEventListener("submit", validateContactForm);  
  } 
};

