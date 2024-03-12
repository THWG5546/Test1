// Création de l'en-tête avec la liste de navigation
const header = document.createElement('header');
const body = document.querySelector('body');
body.append(header);

const nav = document.createElement('nav');
header.append(nav);

const ul = document.createElement('ul');
nav.append(ul);

// Ajout du logo dans la liste de navigation
const img = document.createElement('img');
img.setAttribute('src', 'img/logo.png');
const liLogo = document.createElement('li');
liLogo.append(img);
ul.append(liLogo);

// Ajout des articles à la liste de navigation
for (let i = 0; i < articles.length; i++) {
    const article = articles[i];

    const li = document.createElement('li');
    ul.append(li);

    const a = document.createElement('a');
    a.setAttribute('href', '#' + article.name); 
    a.textContent = article.title; 
    li.append(a);
}


articles.forEach(article => {
    const section = document.createElement('section');
    section.setAttribute('id', article.name);
    body.append(section);

    const imgArticle = document.createElement('img');
    imgArticle.setAttribute('src', article.image);
    imgArticle.classList.add('rounded');
    section.append(imgArticle);

    const div = document.createElement('div');
    section.append(div);

    const h2 = document.createElement('h2');
    h2.textContent = article.title;
    div.append(h2);

    const p = document.createElement('p');
    p.textContent = article.article;
    div.append(p);

    if (articles.indexOf(article) % 2 !== 0) {
        section.prepend(div);
    }

  

});
