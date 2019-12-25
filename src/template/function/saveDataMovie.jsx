import firebase from "firebase/app";
import moment from 'moment';
import swal from 'sweetalert';

export default function SaveDataMovie(tableData, dados, dadosId) {           
    
    var hoje=(moment(new Date()).format('YYYY-MM-DD')).toString();   
    var arquivo = dados.imageUpload && dados.imageUpload.files[0].name;                                    
    writeUserData(dadosId, dados, hoje, arquivo);    
            
    // var formData = new FormData();
    // formData.append('file', dados.imageUpload && dados.imageUpload.files[0]);
    // fetch('https://localhost:3000/public/images', {            
    // method: 'POST',
    // body: formData
    // })
    // .then(response => response.json())
    // .then(_success => {
    //     alert('OK');
    // })
    // .catch(error => alert(error)
    // );     

    swal({
        title: "Operação Concluída!",
        text: "Registro salvo com sucesso!",
        icon: "success"
      });     

    function writeUserData(dadosId, dados, hoje, arquivo) {
        firebase.database().ref(`${tableData}/` + dadosId).set({
            id: dadosId,
            titulo: dados.titulo.value,
            titulo_original: dados.titulo_original.value,
            sinopse: dados.sinopse.value,
            ano_lancamento: dados.ano_lancamento.value,
            trailer: dados.trailer.value,
            diretor: dados.diretor.value,
            genero: dados.genero.value,
            pais_origem: dados.pais_origem.value,
            premiacoes: dados.premiacoes.value,
            elenco: dados.atores.value,
            roteirista: dados.roteiristas.value,
            cartaz: `${arquivo}`,
            curiosidades: dados.curiosidades.value,
            comentario_trailer: dados.comentario_trailer.value,
            data_adicionado: `${hoje}`
        });
    }       
    
}
