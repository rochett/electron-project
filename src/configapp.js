import moment from 'moment';

var ano = moment(new Date()).format('YYYY');

export const titulo_secao = {
  filme: { titulo: 'Filmes', imagem: require('./image/bestmoviesofalltime.jpg'), form_titulo: 'Filme' },
  ator: { titulo: 'Atores & Atrizes', imagem: require('./image/atoratriz.jpg'), form_titulo: 'Ator/Atriz' },
  diretor: { titulo: 'Diretores', imagem: require('./image/bestmoviesofalltime.jpg'), form_titulo: 'Diretor' },
  roteirista: { titulo: 'Roteiristas', imagem: require('./image/bestmoviesofalltime.jpg'), form_titulo: 'Roteirista' },
  genero: { titulo: 'Gêneros', imagem: require('./image/bestmoviesofalltime.jpg'), form_titulo: 'Gênero' },
  premiacao: { titulo: 'Premiações', imagem: require('./image/bestmoviesofalltime.jpg'), form_titulo: 'Premiação' },
  trailer: { titulo: 'Trailers', imagem: require('./image/bestmoviesofalltime.jpg') },
  cartaz: { titulo: 'Cartazes', imagem: require('./image/it2_poster.jpg') },
  curiosidade: 'Curiosidades',
  rodape: 'Super Cinema 1.0',
  comentario_rodape: 'Desenvolvido por Rochett Tavares - copyright© 2019 - ' + ano,
  ult_adic: 'Último Adicionado:',
}