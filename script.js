function appendToTable() {
    var table = document.getElementById("data-table");
    var row = table.insertRow(-1);
    var cells = [];

    for (var i = 0; i < 8; i++) {
        cells[i] = row.insertCell(i);
    }

    // Get form values
    var firstname = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var foodSelections = document.querySelectorAll('input[name="food[]"]:checked');
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    // Check if at least two food items are selected
    if (foodSelections.length < 2) {
        alert("Please select at least two food items.");
        return;
    }

    cells[0].innerText = firstname;
    cells[1].innerText = lastname;
    cells[2].innerText = address;
    cells[3].innerText = pincode;
    cells[4].innerText = gender.value;

    var foodValues = Array.from(foodSelections).map(food => food.value).join(', ');
    cells[5].innerText = foodValues;

    cells[6].innerText = state;
    cells[7].innerText = country;

    // Clear form fields
    document.getElementById("data-form").reset();
}