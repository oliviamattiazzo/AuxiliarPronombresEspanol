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
                </head>
                <body>
                    ${this._viewConjugacion.templateExportacao(this._listaConjugacionModel)}
                </body>
            </html>
            `;
    }
}