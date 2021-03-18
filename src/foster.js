class Foster {
    constructor(foster) {
        this.id = foster.id;
        this.name = foster.name;
        this.age = foster.age;
        this.saves = foster.saves;
        Foster.all.push(this);
    }

    renderFosterList() {
        return `<h3>${this.name}</h3>`;
    }
}

Foster.all = [];

