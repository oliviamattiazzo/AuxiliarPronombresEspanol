class ListaConjugaciones {
    constructor() {
        this._lstConjugaciones = [];
    }

    add(conjugacion) {
        this._lstConjugaciones.push(conjugacion);
    }

    get listaConjugaciones() {
        return [].concat(this._lstConjugaciones);
    }
}