'use strict'
const api_url = 'https://api.tvmaze.com/search/shows?q='

var form = document.getElementById('form')
let movies = document.getElementById('query')
const results = document.getElementById('result');

//Haetaan tulokset apista
async function getApi(url) {
    let response = await fetch(url);
    if (!response.ok) throw new Error('Not found');
    else {
        return await response.json();
    }
}



//kaapataan haku ja iteroidaan tulokset
form.addEventListener('submit',async function (evt){
    results.innerHTML = '';
    evt.preventDefault();
    try {
        let jsonPackage = await getApi(api_url + movies.value);
        console.log(jsonPackage);
        for (let s of jsonPackage) {
            //luodaan tietojen haut
            const cont = document.createElement('div');
            cont.classList.add('s');

            const info = document.createElement('p');
            const infot = document.createElement('p2');

            const name = document.createElement('h3');
            name.innerText = s['show']['name'];

            const genre = document.createElement('h5');
            if (s['show']['genres'].length > 0) {
                for(let i=0; i < s['show']['genres'].length; i++) {
                    genre.innerText += '|' + s['show']['genres'][i] + '|' ;
                }
              }else {
                genre.innerHTML = '<i>Genre not found</i>';
            }

            const url = document.createElement('a');
            if (s['show']['url'] !== null) {
                url.innerText = s['show']['url'];
            } else {
                url.innerText = 'Url not found';
            }

            const descript = document.createElement('sum');
             if (s['show']['summary'] !== null) {
               descript.innerHTML = s['show']['summary'];
            } else {
                descript.innerText = 'Summary not found';
            }


            const figure = document.createElement('figure');
            const pic = document.createElement('img');
            if (s['show']['image'] !== null) {
                pic.src = s['show']['image']['medium'];
                pic.alt = s['show']['id'];
            } else {
                pic.src = 'https://via.placeholder.com/210x298?text=Not+found'
            }

            figure.appendChild(pic);
            cont.appendChild(figure);
            info.appendChild(name);
            info.appendChild(genre);
            info.appendChild(url);
            infot.appendChild(info);
            cont.appendChild(infot);
            info.appendChild(descript);
            cont.appendChild(info);
            results.appendChild(cont);

            //avaa artikkelin
            cont.addEventListener('click', () => {
            const iframe = dialog.appendChild(document.querySelector('#more'));
            iframe.src = s.show.url;
            console.log(iframe.src)
            dialog.showModal();
            })
        }
    } catch (error) {
        console.error(error);
    }});



//muuttujat dialogille
const closeDialog = document.querySelector('span');
const dialog = document.querySelector('dialog');
//sulkee dialogin
closeDialog.addEventListener('click', () => {
    dialog.close();
})