// Declarar uma variável qualquer, que receba um objeto vazio.
var Pessoa = new Object();

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
Pessoa.nome = "Roberto";
Pessoa.sobrenome = "Santos";
Pessoa.sexo = "Masculino";
Pessoa.idade = 25;
Pessoa.altura = 1.80;
Pessoa.peso = 70;
Pessoa.andando = false;
Pessoa.caminhouQuantosMetros = 0;

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

Pessoa.fazerAniversario = function () {
        Pessoa.idade = Pessoa.idade + 1;
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

Pessoa.andar = function(metrosCaminhados) {
    Pessoa.caminhouQuantosMetros = Pessoa.caminhouQuantosMetros + metrosCaminhados;
    Pessoa.andando = true;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

Pessoa.parar = function() {
    Pessoa.andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

Pessoa.nomeCompleto = function() {
    return "Olá meu nome é " + Pessoa.nome + " " + Pessoa.sobrenome;
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

Pessoa.mostrarIdade = function() {
    return "Olá, eu tenho " + Pessoa.idade + " anos!"
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

Pessoa.mostrarPeso = function() {
    return "Eu peso " + Pessoa.peso + " Kg";
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

Pessoa.mostrarAltura = function() {
    return "Minha altura é " + Pessoa.altura + " m";
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(Pessoa.nomeCompleto()); // Olá meu nome é Roberto Santos

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(Pessoa.mostrarIdade()); // Olá, eu tenho 25 anos!

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(Pessoa.mostrarPeso()); // Eu peso 70 Kg

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(Pessoa.mostrarAltura()); // Minha altura é 1.8 m

/*
Faça a `pessoa` fazer 3 aniversários.
*/

Pessoa.fazerAniversario();
Pessoa.fazerAniversario();
Pessoa.fazerAniversario();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

console.log(Pessoa.mostrarIdade()); // Olá, eu tenho 28 anos!

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

Pessoa.andar(12);
Pessoa.andar(3);
Pessoa.andar(5);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

Pessoa.parar();

/*
Se a pessoa ainda está andando, faça-a parar.
*/

Pessoa.parar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

Pessoa.parar();

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(Pessoa.caminhouQuantosMetros); //20

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

Pessoa.apresentacao = function() {
    if (Pessoa.sexo == "masculino" || Pessoa.idade == 1 || Pessoa.caminhouQuantosMetros == 1) {
        let apresentacao = "Olá, eu sou o " + Pessoa.nomeCompleto +", tenho " + Pessoa.idade + " ano, " + Pessoa.altura + ", meu peso é " + Pessoa.peso + " e, só hoje, eu já caminhei " + Pessoa.caminhouQuantosMetros + " metro!";
        return apresentacao
    }
    else if (Pessoa.sexo == "masculino" || Pessoa.idade != 1 || Pessoa.caminhouQuantosMetros == 1) {
        let apresentacao = "Olá, eu sou o " + Pessoa.nome + " " + Pessoa.sobrenome +", tenho " + Pessoa.idade + " anos, " + Pessoa.altura + ", meu peso é " + Pessoa.peso + " e, só hoje, eu já caminhei " + Pessoa.caminhouQuantosMetros + " metro!";
        return apresentacao
    }
    else if (Pessoa.sexo == "masculino" || Pessoa.idade != 1 || Pessoa.caminhouQuantosMetros != 1) {
        let apresentacao = "Olá, eu sou o " + Pessoa.nome + " " + Pessoa.sobrenome +", tenho " + Pessoa.idade + " anos, " + Pessoa.altura + ", meu peso é " + Pessoa.peso + " e, só hoje, eu já caminhei " + Pessoa.caminhouQuantosMetros + " metros!";
        return apresentacao
    }
    else if (Pessoa.sexo == "masculino" || Pessoa.idade == 1 || Pessoa.caminhouQuantosMetros != 1) {
        let apresentacao = "Olá, eu sou o " + Pessoa.nome + " " + Pessoa.sobrenome +", tenho " + Pessoa.idade + " ano, " + Pessoa.altura + ", meu peso é " + Pessoa.peso + " e, só hoje, eu já caminhei " + Pessoa.caminhouQuantosMetros + " metros!";
        return apresentacao
    }
    else if (Pessoa.sexo == "feminino" || Pessoa.idade == 1 || Pessoa.caminhouQuantosMetros == 1) {
        let apresentacao = "Olá, eu sou a " + Pessoa.nome + " " + Pessoa.sobrenome +", tenho " + Pessoa.idade + " ano, " + Pessoa.altura + ", meu peso é " + Pessoa.peso + " e, só hoje, eu já caminhei " + Pessoa.caminhouQuantosMetros + " metro!";
        return apresentacao
    }
    else if (Pessoa.sexo == "feminino" || Pessoa.idade != 1 || Pessoa.caminhouQuantosMetros == 1) {
        let apresentacao = "Olá, eu sou a " + Pessoa.nome + " " + Pessoa.sobrenome +", tenho " + Pessoa.idade + " anos, " + Pessoa.altura + ", meu peso é " + Pessoa.peso + " e, só hoje, eu já caminhei " + Pessoa.caminhouQuantosMetros + " metro!";
        return apresentacao
    }
    else if (Pessoa.sexo == "feminino" || Pessoa.idade == 1 || Pessoa.caminhouQuantosMetros != 1) {
        let apresentacao = "Olá, eu sou a " + Pessoa.nome + " " + Pessoa.sobrenome +", tenho " + Pessoa.idade + " ano, " + Pessoa.altura + ", meu peso é " + Pessoa.peso + " e, só hoje, eu já caminhei " + Pessoa.caminhouQuantosMetros + " metros!";
        return apresentacao
    }
    else if (Pessoa.sexo == "feminino" || Pessoa.idade != 1 || Pessoa.caminhouQuantosMetros != 1) {
        let apresentacao = "Olá, eu sou a " + Pessoa.nome + " " + Pessoa.sobrenome +", tenho " + Pessoa.idade + " anos, " + Pessoa.altura + ", meu peso é " + Pessoa.peso + " e, só hoje, eu já caminhei " + Pessoa.caminhouQuantosMetros + " metros!";
        return apresentacao
    }
}

// Agora, apresente-se ;)

console.log(Pessoa.apresentacao()); // Olá, eu sou o Roberto Santos, tenho 28 anos, 1.8, meu peso é 70 e, só hoje, eu já caminhei 20 metro!