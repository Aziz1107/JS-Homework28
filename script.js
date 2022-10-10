const anime = document.querySelector('.anime');

anime.addEventListener('click', () => {
    if (anime.style.background == 'blue') {
        anime.style = `
            background: red;
            border-radius: 300px;
            transition: 1.5s;
        `
        var answer = 'Right, from Japan)';
        alert(answer);
     }else {
        anime.style = `
            background: blue;
            border-radius: none;
            transition: 1.5s;
        ` }});