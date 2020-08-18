class ExportacaoView  {
    constructor(viewConjugacion, listaConjugacionModel) {
        this._viewConjugacion = viewConjugacion;
        this._listaConjugacionModel = listaConjugacionModel;
    }

    template() {
        return `
            <html>
                <head>
                    <title>Exportar conjugaciones</title>
                    <link href="css/general.css" rel="stylesheet">
                    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
                    <script src="https://kit.fontawesome.com/293847d6a2.js" crossorigin="anonymous"></script>
                </head>
                <body>
                    ${this._viewConjugacion.templateExportacao(this._listaConjugacionModel)}
                    
                    <div id="footerView"></div>

                    <script src="js/controllers/ExportacaoController.js"></script>
                    <script src="js/views/View.js"></script>
                    <script src="js/views/ConjugacionView.js"></script>
                    <script src="js/views/ExportacaoView.js"></script>
                    <script src="js/views/FooterView.js"></script>
                    <script>
                        let footerView = new FooterView(document.getElementById('footerView'));
                        footerView.update();

                        let exportacaoController = new ExportacaoController();
                    </script>
                    <div id="footerView"></div>
                </body>
            </html>
            `;
    }
}