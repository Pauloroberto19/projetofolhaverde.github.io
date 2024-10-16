document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio automático do formulário

    // Redireciona diretamente para a página de confirmação
    window.location.href = "confirmacao.html";
});
document.getElementById("uploadBtn").addEventListener("click", function() {
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function() {
    var file = this.files[0];
    if (file) {
        // Exibir o nome do arquivo
        document.getElementById("fileName").textContent = "Foto selecionada: " + file.name;

        // Pré-visualizar a imagem escolhida
        var reader = new FileReader();
        reader.onload = function(e) {
            var previewImage = document.getElementById("previewImage");
            previewImage.src = e.target.result;
            previewImage.styles.display = "block";
        };
        reader.readAsDataURL(file);
    } else {
        document.getElementById("fileName").textContent = "Nenhuma foto selecionada";
        document.getElementById("previewImage").styles.display = "none";
    }
});