
function alternarManutencao() {
  const atual = localStorage.getItem("manutencao") === "true";
  localStorage.setItem("manutencao", (!atual).toString());
  alert("Modo manutenção: " + (!atual));
}

window.onload = () => {
  const manutencao = localStorage.getItem("manutencao") === "true";
  if (manutencao && location.pathname.includes("index.html")) {
    document.body.innerHTML = "<h1>🚧 Site em manutenção 🚧</h1>";
  }
};
