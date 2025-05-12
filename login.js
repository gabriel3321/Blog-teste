
function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  if (user === "admin" && pass === "1234") {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";
    carregarPostagens();
  } else {
    alert("Credenciais incorretas.");
  }
}
