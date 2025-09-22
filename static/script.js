// Define department roles
const rolesByDepartment = {
    PMO: ["Head of Strategy", "Head of PMO", "IT Program Manager", "Business Analyst"],
    IT: ["Head of IT", "Senior Manager of Technology Operation & Applications", "Senior Analyst", "Senior Technical & Network Engineer", "IT Support Administrator", "Senior DevOps Engineer", "Outsourced"],
    Engineering: ["Head of Engineering", "Senior Software Engineer", "Staff IOS Engineer", "Senior Analyst", "Outsourced"],
    Data: ["Head of Data",  "Analyst", "Associate Data Engineer", "Data Engineer", "Data Analyst", "Outsourced"],
    Product: ["Principal", "Lead", "Senior"],
    Cybersecurity: ["CISO", "Cybersecurity Engineer", "Cybersecurity Analyst", "Threat Intelligence Analyst", "Outsourced"],
    Risk: ["Head of Risk", "Risk Officer", "AVP", "Credit Manager", "Credit underwriting senior analyst", "Credit Underwriting Analyst", "Credit Underwriting Analyst", "Credit Underwriting Analyst", "AVP - Operations Manager", "Senior Associate", "Associate", "Senior Operations Analyst", "Senior Analyst", "Analyst", "Credit Administration Analyst", "Operations Analyst", "Operations Analyst"],
    Legal: ["Senior Associate", "Associate", "Senior legal analyst", "Team Leader", "Legal Analyst", "Analyst", "Collection Manager", "Senior Analyst", "Senior Collection Officer", "Collection Officer", "Senior Corporate government Analyst"],
    Customer_Care: ["Head of Customer Care", "Senior Customer Care Specialist", "Customer Care Specialist"],
    Compliance: ["VP - Head of Compliance", "Senior AML Officer", "AML & Compliance Officer", "Compliance Specialist"],
    Digital_Lending: ["Commercial Director", "Digital Marketing Manager", "Customer Success Manager", "Customer Success Specialist"],
    Direct_Lending: ["Head of Sales", "Sales Manager", "Senior Team Leader", "Team Leader", "Growth Manager", "Growth Consultant II", "Growth Consultant I", "Growth Associate", "Key Accounts Manager", "Senior Key Accounts Manager", "Analyst", "Sales Operations", "Business Development Representative", "Quality Assurance Specialist"],
    Marketing: ["Senior Communication Specialist", "Marketing Executive", "Social Media Specialist", "Marketing Specialist"],
    Finance: ["VP - Head of Finance", "VP - Finance", "Senior Financial Associate", "Financial Associate", "Senior Finance Analyst", "Financial Analyst"]
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