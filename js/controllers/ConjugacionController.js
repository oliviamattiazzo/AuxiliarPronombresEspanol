class ConjugacionController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputVerbo = $('#verbo');
        this._inputConYo = $('#con-yo');
        this._inputConTu = $('#con-tu');
        this._inputConEl = $('#con-el');
        this._inputConNos = $('#con-nosotros');
        this._inputConVos = $('#con-vosotros');
        this._inputConEllos = $('#con-ellos');
    }

    add(conjugacion) {
        event.preventDefault();
        console.log('teste');
    }
}