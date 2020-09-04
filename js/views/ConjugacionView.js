class ConjugacionView extends View {
    template(model) {
        return `
            <h2>Resultados <i class="em em-white_check_mark" aria-role="presentation" aria-label="WHITE HEAVY CHECK MARK"></i></h2>
                ${model.listaConjugaciones.map(c =>
                    `<div class="verbo-conjugado">
                        <h3><button class="btn-delete"><i class="fas fa-minus-circle"></i></button> Infinitivo: ${c.infinitivo}</h3>
                        <p>Yo ${c.yo}</p>
                        <p>Tú ${c.tu}</p>
                        <p>Él | Ella | Usted ${c.el}</p>
                        <p>Nosotros | Nosotras ${c.nos}</p>
                        <p>Vosotros | Vosotras ${c.vos}</p>
                        <p>Ellos | Ellas | Ustedes ${c.ellos}</p>
                    <div>
                    `
                ).join('')}
            <button type="button" class="rainbow rainbow-1" onclick="conjugacionController.export()">
                    Exportar
            </button>`;
    }

    templateExportacao(model) {
        return `
            <h2>Conjugaciones de verbos</h2>
                ${model.listaConjugaciones.map(c =>
                    `<div class="verbo-conjugado">
                        <h3><i class="em em-arrow_right" aria-role="presentation" aria-label="BLACK RIGHTWARDS ARROW"></i> Infinitivo: ${c.infinitivo}</h3>
                        <p>Yo ${c.yo}</p>
                        <p>Tú ${c.tu}</p>
                        <p>Él | Ella | Usted ${c.el}</p>
                        <p>Nosotros | Nosotras ${c.nos}</p>
                        <p>Vosotros | Vosotras ${c.vos}</p>
                        <p>Ellos | Ellas | Ustedes ${c.ellos}</p>
                     </div>
                    `
                ).join('')}
            <button type="button" class="rainbow rainbow-1 btn-print" id="btn-print" onclick="exportacaoController.print()">
                <i class="fas fa-print"></i>
            </button>`;
    }
}