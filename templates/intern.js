const InternTemplate = (data) => `<div class="card employee-card">
  <div class="card-header">
    <h2 class="card-title">${data.name}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${data.role}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${data.id}</li
      <li class="list-group-item">
        Email: <a href="mailto:{{email}}">${data.email}</a>
      </li>
      <li class="list-group-item">School: ${data.school}</li>
    </ul>
  </div>
  </div>`

module.exports = InternTemplate
