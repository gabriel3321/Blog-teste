
function criarPost() {
  const titulo = document.getElementById("titulo").value;
  const conteudo = document.getElementById("conteudo").value;
  const post = { titulo, conteudo };
  let posts = JSON.parse(localStorage.getItem("posts") || "[]");
  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));
  carregarPostagens();
}

function carregarPostagens() {
  const container = document.getElementById("lista-posts") || document.getElementById("postagens");
  if (!container) return;
  container.innerHTML = "";
  let posts = JSON.parse(localStorage.getItem("posts") || "[]");
  posts.forEach((post, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${post.titulo}</h3><p>${post.conteudo}</p>`;
    if (document.getElementById("lista-posts")) {
      const btn = document.createElement("button");
      btn.textContent = "Excluir";
      btn.onclick = () => excluirPost(index);
      div.appendChild(btn);
    }
    container.appendChild(div);
  });
}

function excluirPost(index) {
  let posts = JSON.parse(localStorage.getItem("posts") || "[]");
  posts.splice(index, 1);
  localStorage.setItem("posts", JSON.stringify(posts));
  carregarPostagens();
}

window.onload = carregarPostagens;
