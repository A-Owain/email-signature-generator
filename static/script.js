// Define department roles
const rolesByDepartment = {
    Marketing: ["Marketing Specialist", "Brand Manager", "Content Lead"],
    Finance: ["Financial Analyst", "Controller", "Accountant"],
    IT: ["Backend Developer", "Frontend Developer", "IT Support"],
    HR: ["HR Manager", "Recruiter", "People Partner"]
};

// Populate role dropdown when department changes
function populateRoles() {
    const departmentSelect = document.getElementById("department");
    const roleSelect = document.getElementById("role");
    const selectedDept = departmentSelect.value;

    // Clear previous roles
    roleSelect.innerHTML = '<option value="">Select a role</option>';

    // Populate new roles
    if (rolesByDepartment[selectedDept]) {
        rolesByDepartment[selectedDept].forEach(role => {
            const option = document.createElement("option");
            option.value = role;
            option.text = role;
            roleSelect.appendChild(option);
        });
    }

    // Clear role text on canvas
    document.getElementById("position-text").innerText = "";
}

// Update the signature preview when a role is selected
function updateSignatureRole() {
    const role = document.getElementById("role").value;
    document.getElementById("position-text").innerText = role;
}