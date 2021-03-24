const fostersUrl = "http://localhost:3000/api/v1/fosters"
const container = document.querySelector("#foster")
const section = document.getElementById("section")
const show = document.getElementById('container')




document.addEventListener('DOMContentLoaded', () => {
    fetchFosters()
  });
    function fetchFosters() {
      fetch(fostersUrl)
      .then(res => res.json())
      .then(json => 
        json.forEach(foster => {  
            const newFoster = new Foster (foster.id, foster.name, foster.age, foster.img, foster.inquiries)
            container.innerHTML += newFoster.renderFosterList();
            addListeners()
        })
      );
    }

    function addListeners() {
      let images = document.querySelectorAll(".fosterImg")
      let newArray = Array.from(images)
      newArray.forEach(img => {
        img.addEventListener("click", askAbtMe)
      })
    }
      function askAbtMe(e) {

        section.style.visibility = "hidden"
        let judge = Foster.all.find(element => element.id == e.target.id)
        show.innerHTML =  judge.renderFosterList()
        // judge.inquiries.forEach(inq => inq.msg)
        debugger
         
      
      }


  