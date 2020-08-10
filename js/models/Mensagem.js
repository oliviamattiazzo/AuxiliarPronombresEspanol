class Mensagem {
    constructor(texto = '', sucesso) {
        this._texto = texto;
        this._sucesso = sucesso;
    }

    get texto() {
        return this._texto;
    }

    get sucesso() {
        return this._sucesso;
    }

    set texto(texto) {
        this._texto = texto;
    }

    set sucesso(sucesso) {
        this._sucesso = sucesso;
    }
}