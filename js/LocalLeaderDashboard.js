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

function makeEditable() {
      document.getElementById('save').style.display = "block";
      const table = document.getElementById('attendanceTable');
      for (let row of table.rows) {
        // Skip header row
        if (row.rowIndex === 0) continue;
        for (let i = 1; i < row.cells.length; i++) {
          const cell = row.cells[i];
          const currentValue = cell.textContent.trim();
          cell.innerHTML = `<input type="text" value="${currentValue}" class="form-control form-control-sm">`;
        }
      }
    }

    function saveChanges() {
      const table = document.getElementById('attendanceTable');
      for (let row of table.rows) {
        if (row.rowIndex === 0) continue;
        for (let i = 1; i < row.cells.length; i++) {
          const input = row.cells[i].querySelector('input');
          if (input) {
            row.cells[i].textContent = input.value;
          }
        }
      }
      alert("Changes saved!");
    }

    function makeEditable() {
      const table = document.getElementById('attendanceTable');
      for (let row of table.rows) {
        if (row.rowIndex === 0) continue;
        for (let i = 1; i < row.cells.length; i++) {
          const cell = row.cells[i];
          const currentValue = cell.textContent.trim();
          cell.innerHTML = `<input type="text" value="${currentValue}" class="form-control form-control-sm">`;
        }
      }
    }

    function saveChanges() {
      const table = document.getElementById('attendanceTable');
      for (let row of table.rows) {
        if (row.rowIndex === 0) continue;
        for (let i = 1; i < row.cells.length; i++) {
          const input = row.cells[i].querySelector('input');
          if (input) {
            row.cells[i].textContent = input.value;
          }
        }
      }
      alert("Changes saved!");
    }

    function addAttendee(event) {
      event.preventDefault();

      const name = document.getElementById('newName').value;
      const cell = document.getElementById('newCell').value;
      const village = document.getElementById('newVillage').value;
      const date = document.getElementById('newDate').value;

      const table = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];
      const newRow = table.insertRow();
      const rowCount = table.rows.length;

      newRow.insertCell(0).textContent = rowCount;
      newRow.insertCell(1).textContent = name;
      newRow.insertCell(2).textContent = cell;
      newRow.insertCell(3).textContent = village;
      newRow.insertCell(4).textContent = date;
      newRow.insertCell(5).textContent = "✔️";

      // Clear form
      document.getElementById('addForm').reset();
    }
    function postAnnouncement(){
      document.getElementById('postAnnouncement').addEventListener.event;
    }