document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById('container-noticias');
    
    fetch('assets/json/noticias.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((noticia, index) => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <img src="${noticia.imagem}" alt="${noticia.titulo}">
                    <div class="article-content">
                        <h2>${noticia.titulo}</h2>
                        <p>${noticia.conteudo}</p>
                        <p class="conteudo-completo" style="display:none;">${noticia.conteudo_completo}</p>
                    </div>
                    <div class="article-button">
                        <button class="expand" data-index="${index}">Leia Mais</button>
                    </div>
                `;
                newsContainer.appendChild(article);
            });

            document.querySelectorAll('button.expand').forEach(button => {
                button.addEventListener('click', function() {
                    const article = button.closest('article');
                    const fullContent = article.querySelector('.conteudo-completo');
                    if (button.textContent === 'Leia Mais') {
                        article.style.maxHeight = 'none'; // Remove height restriction
                        fullContent.style.display = 'block'; // Show full content
                        button.textContent = 'Leia Menos';
                    } else {
                        article.style.maxHeight = '200px'; // Reset to initial height
                        fullContent.style.display = 'none'; // Hide full content
                        button.textContent = 'Leia Mais';
                    }
                });
            });
        })
        .catch(error => console.error('Erro ao carregar notícias:', error));
});
