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
        this._listaConjugaciones = new ListaConjugaciones();

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

        this._conjugacionesView = new ConjugacionView($('#conjugacionView'));
        this._exportacaoView = new ExportacaoView(this._conjugacionesView, this._listaConjugaciones);
    }

    add() {
        event.preventDefault();

        if (!this._validaConjugacion(this._criaConjugacion())) { return; }
        
        this._listaConjugaciones.add(this._criaConjugacion());
        this._conjugacionesView.update(this._listaConjugaciones);

        this._mensagem.texto = 'Conjugación adicionada con éxito!';
        this._mensagem.sucesso = true;
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();
    }

    export() {
        let printWindow = window.open('', '', 'height=400, width=800');
        printWindow.document.write(this._exportacaoView.template());
        printWindow.document.close();
    }

    delete(infinitivo) {
        console.log(infinitivo);

        this._listaConjugaciones.delete(infinitivo);
        this._conjugacionesView.update(this._listaConjugaciones);

        this._mensagem.texto = 'Conjugación apagada con éxito!'
        this._mensagem.sucesso = true;
        this._mensagemView.update(this._mensagem);
    }

    _camposPreenchidosCorretamente() {
        if (this._inputVerbo.value.trim() == '')
            return this._inputVerbo;
        if (this._inputConYo.value.trim() == '')
            return this._inputConYo;
        if (this._inputConTu.value.trim() == '')
            return this._inputConTu;
        if (this._inputConEl.value.trim() == '')
            return this._inputConEl;
        if (this._inputConNos.value.trim() == '')
            return this._inputConNos;
        if (this._inputConVos.value.trim() == '')
            return this._inputConVos;
        if (this._inputConEllos.value.trim() == '')
            return this._inputConEllos;
    }

    _criaConjugacion() {
        return new Conjugacion(
            this._inputVerbo.value, 
            this._inputConYo.value, 
            this._inputConTu.value, 
            this._inputConEl.value, 
            this._inputConNos.value, 
            this._inputConVos.value, 
            this._inputConEllos.value
        );
    }

    _limpaFormulario() {
        this._inputVerbo.value = '';
        this._inputConYo.value = '';
        this._inputConTu.value = '';
        this._inputConEl.value = '';
        this._inputConNos.value = '';
        this._inputConVos.value = '';
        this._inputConEllos.value = '';

        this._inputVerbo.focus();
    }

    _validaConjugacion(conjugacion) {
        let campoErro = this._camposPreenchidosCorretamente();
        if (campoErro) {
            this._mensagem.texto = 'Es necesario llenar todos los campos!';
            this._mensagem.sucesso = false;
            this._mensagemView.update(this._mensagem);

            campoErro.focus();
            return false;
        }

        if (this._listaConjugaciones.listaConjugaciones.length > 0) {
            let existeVerboInfinitivoIgual = this._listaConjugaciones.listaConjugaciones.find(elemento => elemento.infinitivo == conjugacion.infinitivo) != undefined;
            if (existeVerboInfinitivoIgual) {
                this._mensagem.texto = 'Este verbo ya fue conjugado!';
                this._mensagem.sucesso = false;
                this._mensagemView.update(this._mensagem);

                this._inputVerbo.focus();
                return false;
            }
        }

        return true;
    }
}