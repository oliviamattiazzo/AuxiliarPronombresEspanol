class ExportacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._conjugacionesView = new ConjugacionView($('#conjugacionView'));
        this._exportacaoView = new ExportacaoView(this._conjugacionesView, this._listaConjugaciones);
    }

    print() {
        let btnImprimir = document.getElementById('btn-print');
        btnImprimir.parentNode.removeChild(btnImprimir);

        window.print();
    }
}