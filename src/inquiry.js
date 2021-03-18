class Inquiry {
    constructor(inquiry) {
        this.id = inquiry.id;
        this.msg = inquiry.msg;
        this.saves = inquiry.saves;
        Inquiry.all.push(this);
    }

    renderMsgList() {
        return `<h3>${this.msg}</h3>
                <h4>${this.saves} people have asked so far!</h4>`;
    }

}