class ExportacaoController {
    constructor() {
        this._listaConjugaciones = 
        this._conjugacionesView = new ConjugacionView($('#conjugacionView'));
        this._exportacaoView = new ExportacaoView(this._conjugacionesView, this._listaConjugaciones);
    }
}