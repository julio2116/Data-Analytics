let usuarioCampo = document.getElementById('usuario');
let senhaCampo = document.getElementById('password');
let formLogin = document.getElementById('card-login');

let usuario = "";
let senha = "";

let usuarioRegistrado = 'abc';
let senhaRegistrada = '123';

formLogin.addEventListener('submit', function (event) {
    event.preventDefault();
    let valorUsuario = event.target.querySelector('#usuario');
    let valorSenha = event.target.querySelector('#password');
    usuario = valorUsuario.value;
    senha = valorSenha.value;

    if (usuario !== usuarioRegistrado) {
        alert('usuário inválido');
        valorUsuario.value = '';
        valorSenha.value = '';
    } else if (senha !== senhaRegistrada) {
        alert('Senha inválida');
        valorSenha.value = '';
    }
    if (usuario == usuarioRegistrado && senha == senhaRegistrada) {
        alert('login realiado com sucesso!')
    }
})
