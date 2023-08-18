import logo from '../../assets/itens/cachorro.png';

import urso from '../../assets/itens/urso.jpg';
import franjudo from '../../assets/itens/franjudo.png';
import girafa from '../../assets/itens/girafa.png';
import lobo from '../../assets/itens/lobo.png';
import porco from '../../assets/itens/porco.png';

const cesta = {
  topo: {
    titulo: "Detalhe dos mais novos Ani-Exoticons",
  },
  detalhes: {
    nome: "Coleção de ani-exóticons",
    logoFazenda: logo,
    nomeFazenda: "Zoo Diferente",
    descricao: "Venda e troca dos mais novos Ani-Exoticons.",
    preco: "R$ 10.000,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Urso Obeso",
        imagem: urso,
      },
      {
        nome: "Leão Franjudo",
        imagem: franjudo,
      },
      {
        nome: "Girafa Linguda",
        imagem: girafa,
      },
      {
        nome: "Lobo Sentado Esquisito",
        imagem: lobo,
      },
      {
        nome: "Porco Sorridente",
        imagem: porco,
      }
    ]
  }
}

export default cesta;