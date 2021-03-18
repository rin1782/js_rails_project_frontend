const fostersUrl = "http://localhost:3000/api/v1/fosters"


document.addEventListener('DOMContentLoaded', () => {
    fetch(fostersUrl)
      .then(res => res.json())
      .then(json => 
        json.forEach(foster => { 
            const fosterMarkup = `
            <li>
                <h1>${foster.name}</h1>
                <h3>${foster.age} years old</h3>
                <img src="${foster.img}" width="200px", height="200px">
                
            </li>`;
            document.querySelector("#foster").innerHTML += fosterMarkup;
        })
      );
  });