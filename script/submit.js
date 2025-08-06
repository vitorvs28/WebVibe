 
// Pega os valores dos inputs
const email = document.getElementById("email").value.trim();
const nome = document.getElementById("nome").value.trim();
const telefone = `${selectedCountry.dialCode} ${phoneInput.value}`;
const pais = document.getElementById("country-select").value;
  
  // Atualizar botão de envio
    if (isValidPhone) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
    } else {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Digite um número válido';
    }
 
 
 document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");

    form.addEventListener("submit", (e) => {
      e.preventDefault(); // impede o envio automático
      // Pega os valores dos inputs
      const email = document.getElementById("email").value.trim();
      const nome = document.getElementById("nome").value.trim();
      const telefone = `${selectedCountry.dialCode} ${phoneInput.value}`;
      const pais = document.getElementById("country-select").value;

      // Exibe no console (ou envie via fetch/AJAX)
      console.log("Email:", email);
      console.log("Nome:", nome);
      console.log("Telefone:", telefone);
      console.log("País:", pais);

      // Aqui você pode enviar pra um servidor usando fetch
      // Exemplo fake:
      /*
      fetch("/api/envio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, nome, telefone, pais })
      })
      .then(res => res.json())
      .then(data => {
        console.log("Resposta do servidor:", data);
      });
      */

      // Ou mostrar um alerta estilo UX:
      alert("Formulário enviado com sucesso! 🚀");
    });
  });