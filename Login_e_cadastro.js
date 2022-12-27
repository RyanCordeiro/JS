


//exemplo de objeto de lista de pessoas
var BD = [{
    'nome': 'RyanLuis',
    'senha': '30320417',
    'celular': '992511695',
    'instagram': '_ryan_cordeiro_',
    'equipe': 'charlie'
}, {
    'nome': 'eliza',
    'senha': '30320417',
    'celular': '982317958',
    'instagram': 'eliza_machado__',
    'equipe': 'charlie'
}, {
    'nome': 'Astolfo',
    'senha': 'AstolfoComedorDeRepohlho',
    'celular': '1234567890',
    'instagram': 'Astolfo',
    'equipe': 'bravo'
}, {
    'nome': 'Rogerio',
    'senha': 'Rogerio',
    'celular': '0987654321',
    'instagram': 'Rogerio',
    'equipe': 'delta'
}, {
    'nome': 'Juliana',
    'senha': 'Juliana123',
    'celular': '5555555555',
    'instagram': 'juliana_souza',
    'equipe': 'charlie'
}]
// mostra que o cadastro aconteceu
function adicionado() {
    alert('cadastro concluido')
}
// cadastra no BD
function newone(BD, object) {

    BD.push(object);
    adicionado();
    return "Criado";
    resposta.innerHTML = 'teste concuido';
}
//pega html e transforma em variaveis e deppis em objeto e adicona com o "newOne" ao BD
function adicionarObjeto() {

    var username = (document.getElementById('username')).value;
    var senha = (document.getElementById('senha')).value;
    var celular = (document.getElementById('celular')).value;
    var instagram = (document.getElementById('instagram')).value;
    var equipe = (document.getElementById('equipe')).value;

    var objeto = {
        'nome': username,
        'senha': senha,
        'celular': celular,
        'instagram': instagram,
        'equipe': equipe
    };
    console.log(objeto);
    newone(BD, objeto);
}
//////////////////////////////////////////////
// procurar por cadastro
var resPesquisa = document.getElementById('resPesquisa');

function busca() {
    var pesquisa = document.getElementById('pesquisa').value;
    console.log(pesquisa)
    if (pesquisa == '') {
        alert('preencha corretamente!')
    } else {
        var resposta = BD.filter(x => x.nome.toLowerCase().indexOf(pesquisa.toLowerCase()) === 0);
        if (resposta == '') {
            alert('nenhum nome no banco de dados')
        } else {
            console.log(resposta)
            resPesquisa.innerHTML = '';
            resposta.forEach(item => { resPesquisa.innerHTML += `<p>nome: ${item.nome}<p>` })
        }
    }
}
// LOGIN 2.0
var resPesquisa = document.getElementById('resPesquisa');

function LOGIN() {
    var username = (document.getElementById('usuario')).value;
    var senha = (document.getElementById('senha')).value;
    console.log(username, senha)
    if (username === '' || senha === '') {
        alert('preencha corretamente!')
    } else {
        var retornoUser = BD.filter(x => x.nome === username);
        console.log(retornoUser)
        if (senha === retornoUser[0].senha) {
            alert('Login concluido');
          } else {
            alert('Erro 404, Sem Cadastro');
          }}
}