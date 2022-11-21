// FUNCTION FOR GENERATING CARDS
const generateCards = (employee) => {
    let extra
    let extraName
    let icon
    if (employee.getRole() === "Manager") {
        extraName = "Office Number"
        extra = employee.officeNumber
        icon = "👴"
    } else if (employee.getRole() === "Engineer") {
        extraName = "GitHub"
        extra = `<a href="${employee.getGithub()}" target="_blank" rel="noopener noreferrer">${employee.github}</a>`
        icon = "👷"
    } else {
        extraName = "School"
        extra = employee.getSchool()
        icon = "👶"
    }
    return `<div class="card text-dark bg-light mb-3 shadow bg-body rounded" style="max-width: 18rem;">
    <div class="card-header bg-secondary text-white">
        <h2>${employee.name}</h2>
        <h3>${icon} ${employee.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group bg-white">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class="list-group-item">${extraName}: ${extra}</li>
          </ul>
    </div>
    </div>`
}

// EXPORTING THE FUNCTION TO BE USED ON index.js
module.exports = {generateCards};