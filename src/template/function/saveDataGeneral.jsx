import firebase from "firebase/app";
import moment from 'moment';
import swal from 'sweetalert';

export default function SaveDataGeneral(tableData, dados, dadosId) {

  var hoje = (moment(new Date()).format('YYYY-MM-DD')).toString();
  writeUserDataGeneral(dadosId, dados, hoje);

  swal({
    title: "Operação Concluída!",
    text: "Registro salvo com sucesso!",
    icon: "success"
  });

  function writeUserDataGeneral(dadosId, dados, hoje) {
    firebase.database().ref(`${tableData}/` + dadosId).set({
      id: dadosId,
      titulo: dados.titulo.value,
      titulo_original: dados.titulo_original.value,
      descricao: dados.descricao.value,
      ano_criacao: dados.ano_criacao.value,
      pais_origem: dados.pais_origem.value,
      obra_maxima: dados.obra_maxima.value,
      data_adicionado: `${hoje}`
    });
  }

}