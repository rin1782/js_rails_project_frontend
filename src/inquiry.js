class Inquiry {
    static all = []

    constructor(id, msg, saves){
        this.id = id;
        this.msg = msg;
        this.saves = saves;
        Inquiry.all.push(this)
    }

    createInquiry() {`
        return
        <form name="inquiry">
            <input type="text" name="Your Name" placeholder="Your Name">
                <br>
            <input type="text" name="Foster Name" placeholder="Foster Name">
                <br>
            <input type="textarea" name="message" placeholder="enter message"
            <button onclick="inquire()">Submit</button>
        </form>`}

        updateInquiry() {`
        return
        `}
}