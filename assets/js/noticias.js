document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById('container-noticias');
    
    if (!newsContainer) {
        console.error('Erro: container-noticias não encontrado');
        return;
    }

    fetch('assets/json/noticias.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((noticia, index) => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <img src="${noticia.imagem}" alt="${noticia.titulo}">
                    <div class="article-content">
                        <h3>${noticia.titulo}</h3>
                        <p>${noticia.conteudo}</p>
                    </div>
                    <div class="article-button">
                        <a href="${noticia.url}" class="expand" data-index="${index}">Leia Mais</a>
                    </div>
                `;
                newsContainer.appendChild(article);
            });
        })
        .catch(error => console.error('Erro ao carregar notícias:', error));
});
