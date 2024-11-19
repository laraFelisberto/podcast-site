document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Aqui poderia ir a lógica de autenticação
    alert('Login bem-sucedido!');
});
<script>
    const searchInput = document.getElementById('search');
    const podcastCards = document.querySelectorAll('.podcast-card');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        podcastCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
</script>
