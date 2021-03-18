const fostersUrl = "http://localhost:3000/api/v1/fosters"
let ask = document.getElementById("ask")


document.addEventListener('DOMContentLoaded', () => {
    fetch(fostersUrl)
      .then(res => res.json())
      .then(json => 
        json.forEach(foster => { 
            const fosterMarkup = `
            <li>
                <h1>${foster.name}</h1>
                <a href='api_v1_foster_inquiries' onclick="seeInquiries(event)">Ask about me!</a>
                <h3>${foster.age} years old</h3>
                <img src="${foster.img}" width="200px", height="200px">
            </li>`;
            document.querySelector("#foster").innerHTML += fosterMarkup;
        })
      );
  });


