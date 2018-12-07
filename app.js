const main = document.querySelector('main');

window.addEventListener('load', e => {
updateBike();

});





async function updateBike() {

  const res = await fetch(`https://data.cityofchicago.org/resource/aavc-b2wj`);
  const json = await res.json();

main.innerHTML = json.articles.map(createArticle).join('\n');
}

function createArticle(article) {
  return `
    <div class="article">
      <a href="${article.address}">
        <h2>${article.id}</h2>
        
        <p>${article.total_docks}</p>
      </a>
    </div>
  `;
}