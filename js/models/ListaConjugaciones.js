class ListaConjugaciones {
    constructor() {
        this._lstConjugaciones = [];
    }

    add(conjugacion) {
        this._lstConjugaciones.push(conjugacion);
    }

    delete(infinitivo) {
        this._lstConjugaciones.splice(this._getIndexOfElement(infinitivo), 1);
    }

    _getIndexOfElement(verboInfinitivo) {
        let conjugacion = this._lstConjugaciones.find(element => element.infinitivo == verboInfinitivo);
        return this._lstConjugaciones.indexOf(conjugacion);
    }

    get listaConjugaciones() {
        return [].concat(this._lstConjugaciones);
    }    
}