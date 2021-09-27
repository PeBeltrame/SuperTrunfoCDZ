var carta1 = {
  nome: "Shiryu de dragão",
  imagem:
    "http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};

var carta2 = {
  nome: "Seiya de Pégaso",
  imagem:
    "https://pm1.narvii.com/6809/ab20c7c73e900b9dfc40bed8f6e32bf9561f0bbcv2_hq.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var carta3 = {
  nome: "Shun de Andrômeda",
  imagem:
    "http://pm1.narvii.com/6400/1c55c6cbf4831e75b9f678e742a5212c6face3f6_00.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};

var carta4 = {
  nome: "Hyoga de Cisne",
  imagem:
    "https://pm1.narvii.com/6399/ededa8235289a84d041bd4601609103d91493f5f_hq.jpg",
  atributos: {
    ataque: 6,
    defesa: 8,
    magia: 5
  }
};

var carta5 = {
  nome: "Ikki de Fênix",
  imagem: "https://downloadwap.com/thumbs2/wallpapers/p2/15/anime/FtUdxBoX.jpg",
  atributos: {
    ataque: 10,
    defesa: 5,
    magia: 6
  }
};

var carta6 = {
  nome: "Mu de Áries",
  imagem:
    "http://pm1.narvii.com/6400/ea865a7becbff8859d0825e5d088c58818ad1414_00.jpg",
  atributos: {
    ataque: 6,
    defesa: 10,
    magia: 7
  }
};

var carta7 = {
  nome: "Aldebaran de Touro",
  imagem:
    "https://pm1.narvii.com/6403/ffe9e1b19c99f2c7da6471cf290c2e7695c15573_hq.jpg",
  atributos: {
    ataque: 9,
    defesa: 7,
    magia: 4
  }
};

var carta8 = {
  nome: "Saga de Gêmeos",
  imagem:
    "https://pm1.narvii.com/6713/77cfef15755466a8390ba74bcf148ef081b79a4c_hq.jpg",
  atributos: {
    ataque: 10,
    defesa: 6,
    magia: 9
  }
};

var carta9 = {
  nome: "Máscara da Morte de Câncer",
  imagem:
    "http://pm1.narvii.com/6719/b3a61f72fccb6848906c3bb3e9e06879ae341c25_00.jpg",
  atributos: {
    ataque: 8,
    defesa: 6,
    magia: 10
  }
};

var carta10 = {
  nome: "Aiolia de Leão",
  imagem:
    "http://pm1.narvii.com/6885/5a6a4204d55c8736142c87d7031590038a3e219er1-480-480v2_00.jpg",
  atributos: {
    ataque: 9,
    defesa: 6,
    magia: 7
  }
};

var carta11 = {
  nome: "Shaka de Virgem",
  imagem:
    "https://http2.mlstatic.com/D_NQ_NP_975022-MLB32021843034_082019-O.jpg",
  atributos: {
    ataque: 8,
    defesa: 8,
    magia: 10
  }
};

var carta12 = {
  nome: "Dohko de Libra",
  imagem:
    "https://i.pinimg.com/736x/79/66/ac/7966ac24247ec86fd87ff9e8254010f9.jpg",
  atributos: {
    ataque: 8,
    defesa: 8,
    magia: 8
  }
};

var carta13 = {
  nome: "Milo de Escorpião",
  imagem:
    "http://4.bp.blogspot.com/-EeZNUr2mt_0/U_5B2t607wI/AAAAAAAAAPY/wZ_W90DL7aA/s1600/Milo%2Bde%2BEscorpi%C3%A3o%2B(1).jpg",
  atributos: {
    ataque: 9,
    defesa: 6,
    magia: 7
  }
};

var carta14 = {
  nome: "Aiolos de Sagitário",
  imagem:
    "https://i.pinimg.com/736x/bb/1f/64/bb1f640ccf9669f80674d8709dfee922.jpg",
  atributos: {
    ataque: 8,
    defesa: 7,
    magia: 9
  }
};

var carta15 = {
  nome: "Shura de Capricórnio",
  imagem:
    "https://i.pinimg.com/originals/85/e9/69/85e9697feea602a6c0a32448fcf99c61.jpg",
  atributos: {
    ataque: 9,
    defesa: 5,
    magia: 7
  }
};

var carta16 = {
  nome: "Camus de Aquário",
  imagem:
    "https://http2.mlstatic.com/D_NQ_NP_866918-MLB32020635038_082019-O.jpg",
  atributos: {
    ataque: 9,
    defesa: 9,
    magia: 7
  }
};

var carta17 = {
  nome: "Afrodite de Peixes",
  imagem:
    "https://i.pinimg.com/originals/e5/22/9e/e5229e1878b5af93e8b00d86cf6e444e.jpg",
  atributos: {
    ataque: 8,
    defesa: 7,
    magia: 10
  }
};

var cartaMaquina;
var cartaJogador;
var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12,
  carta13,
  carta14,
  carta15,
  carta16,
  carta17
];
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 17);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 17);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 17);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Elevou seu cosmo</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Não elevou o cosmo</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}