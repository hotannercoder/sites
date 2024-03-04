const users = [
  { username: "renato.santos", password: "221206" },
  { username: "erivaldo.fonte", password: "123456" },
  { username: "caroline.fernandes", password: "160684" },
];

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      /*alert("Login successful");*/
      window.location.href = "index.html";
    } else {
      alert("Usuário ou senha incorretos");
    }
  });
