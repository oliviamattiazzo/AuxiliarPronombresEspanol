class MensagemView extends View {
    template(model) {
        let classeMensagem = model.sucesso ? 'msg-sucesso' : 'msg-alerta';
        let iconeMensagem = model.sucesso ? '<i class="fas fa-check-circle"></i>'
                                            : '<i class="fas fa-exclamation-triangle"></i>';

        return model.texto ? `<p class="${classeMensagem}">
                                ${iconeMensagem} ${model.texto}</p>` 
                            : `<p></p>`;
    }
}