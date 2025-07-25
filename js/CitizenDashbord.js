function toggleDropdown() {
      document.getElementById("dropdownMenu").classList.toggle("show");
}
    // Close the dropdown if user clicks outside of it
      window.onclick = function(event) {
      if (!event.target.matches('.dropdown-toggle') && !event.target.closest('.dropdown-toggle')) {
            var dropdowns = document.getElementsByClassName("dropdown-menu");
            for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove("show");
      }
      }
}

 function showFinesSection() {
      const section = document.getElementById('finesSection');
      section.style.display = section.style.display === 'block' ? 'none' : 'block';
      window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    }
function PyFines(){
  document.getElementById('payeFines').style.display = "block";
}
function MtnShow(){
      document.getElementById('mtn').style.display = "block"
      document.getElementById("airtel").style.display = "none "
}
function AirtelShow(){
      document.getElementById("mtn").style.display = "none"
      document.getElementById("airtel").style.display = "block "
}
// Monthly Attendance Chart
const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');
new Chart(monthlyCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    datasets: [{
      label: 'Attendance (%)',
      data: [70, 85, 60, 90, 50, 60],
      backgroundColor: '#cfa109ff'
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false }
    },
    scales: {
      x: {
        max: 100,
        title: { display: true, text: 'Percentage' }
      }
    }
  }
});

// Attendance by Population Group Chart
const populationCtx = document.getElementById('populationChart').getContext('2d');
new Chart(populationCtx, {
  type: 'bar',
  data: {
    labels: ['Youth', 'Adults', 'Elderly', 'Students'],
    datasets: [{
      label: 'Attendance (%)',
      data: [95, 20, 50, 40],
      backgroundColor: '#0a6b6eff'
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false }
    },
    scales: {
      x: {
        max: 100,
        title: { display: true, text: 'Percentage' }
      }
    }
  }
});


   