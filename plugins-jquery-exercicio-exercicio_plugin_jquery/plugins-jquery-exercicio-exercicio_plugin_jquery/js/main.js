$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })
})

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '12345-678'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true,
            minlength: 10
        },
        endereco: {
            required: true
        },
        cep: {
            required: true,
            minlength: 8
        },
        cpf: {
            required: true,
            minlength: 11
        },
    },
    messages: {
        telefone: {
            required: "Por favor, insira seu telefone.",
            minlength: "O telefone deve ter pelo menos 10 dígitos."
        },
        cep: {
            required: "Por favor, insira seu CEP.",
            minlength: "O CEP deve ter pelo menos 8 dígitos."
        },
        cpf: {
            required: "Por favor, insira seu CPF.",
            minlength: "O CPF deve ter 11 dígitos."
        }
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
});