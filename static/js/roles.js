// Example role structure
const departmentRoles = {
    Marketing: ["Marketing Specialist", "Content Manager", "SEO Analyst"],
    Finance: ["Financial Analyst", "Accountant", "Treasury Officer"],
    IT: ["Backend Developer", "Frontend Developer", "IT Support"],
    HR: ["HR Manager", "Recruiter", "Training Coordinator"]
};

function populateRoles() {
    const department = document.getElementById("department").value;
    const roleSelect = document.getElementById("role");

    // Clear previous options
    roleSelect.innerHTML = '<option value="">Select a role</option>';

    // Populate new options if department selected
    if (departmentRoles[department]) {
        departmentRoles[department].forEach(role => {
            const option = document.createElement("option");
            option.value = role;
            option.textContent = role;
            roleSelect.appendChild(option);
        });

        roleSelect.disabled = false;
    } else {
        roleSelect.disabled = true;
    }

    // Clear position text if department is changed
    document.getElementById("position-text").textContent = "";
}

function updateSignatureRole() {
    const selectedRole = document.getElementById("role").value;
    document.getElementById("position-text").textContent = selectedRole;
}