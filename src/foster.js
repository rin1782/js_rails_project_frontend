class Foster {
    constructor(id, name, age, img, inquiries) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.img = img;
        this.inquiries = inquiries;
        Foster.all.push(this);
    }

    renderFosterList() {
        return `
        <li>
            <h1>${this.name}</h1>
            <h3>${this.age} years old</h3>
            <img src="${this.img}" class="fosterImg" id="${this.id}" width="200px", height="200px">
            <p>click below to save to your favorites and ask about me</p>
            <input type = "button" ondblclick="addToFavs()" value = "Add me to your favorites"/>
        </li>`
    }
}

Foster.all = [];

