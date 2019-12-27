import firebase from "firebase/app";
import moment from 'moment';
import swal from 'sweetalert';

export default function SaveDataMovie(tableData, _dados, dadosId) {

    const tablesWithoutImage = [ 'generos', 'premiacoes' ];

    if (!tablesWithoutImage.includes(tableData) ) {

      var storageRef = firebase.storage().ref();
      var file = _dados.image_upload;
      var metadata = {
          contentType: 'image/jpeg'
      };      
      var uploadTask = storageRef.child('images/' + tableData +'/' + file.name).put(file, metadata);
      
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
          function (snapshot) {              
              var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                  case firebase.storage.TaskState.PAUSED: // or 'paused'
                      console.log('Upload is paused');
                      break;
                  case firebase.storage.TaskState.RUNNING: // or 'running'
                      console.log('Upload is running');
                      break;
                  default:
                      break;
              }
          }, function (error) {                          
              switch (error.code) {
                  case 'storage/unauthorized':                      
                    break;
                  case 'storage/canceled':                      
                    break;                  
                  case 'storage/unknown':                      
                    break;
                  default:
                    break;
      
              }
          }, function () {
              // Upload completed successfully, now we can get the download URL
              uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                  console.log('File available at', downloadURL);
                  var hoje = (moment(new Date()).format('YYYY-MM-DD')).toString();
                  writeUserData(dadosId, _dados, hoje, downloadURL, tableData);
              });
          });
    } else {
      var hoje = (moment(new Date()).format('YYYY-MM-DD')).toString();
      var _downloadURL = '';
      writeUserData(dadosId, _dados, hoje, _downloadURL, tableData);
    }      

    swal({
        title: "Operação Concluída!",
        text: "Registro salvo com sucesso!",
        icon: "success"
    });

    function writeUserData(dadosId, _dados, hoje, downloadURL, tableData) {
      if (tableData === 'filmes') {
        firebase.database().ref(`${tableData}/` + dadosId).set({
          id: dadosId,
          titulo: _dados.titulo,
          titulo_original: _dados.titulo_original,
          sinopse: _dados.sinopse,
          ano_lancamento: _dados.ano_lancamento,
          trailer: _dados.trailer,
          diretor: _dados.diretor,
          genero: _dados.genero,
          pais_origem: _dados.pais_origem,
          premiacoes: _dados.premiacoes,
          elenco: _dados.elenco,
          roteirista: _dados.roteirista,
          cartaz: `${downloadURL}`,
          curiosidades: _dados.curiosidades,
          comentario_trailer: _dados.comentario_trailer,
          data_adicionado: `${hoje}`
        });          
      } else {
        if (tableData === 'generos' || tableData === 'premiacoes') {
          firebase.database().ref(`${tableData}/` + dadosId).set({
            id: dadosId,
            titulo: _dados.titulo,
            titulo_original: _dados.titulo_original,
            descricao: _dados.descricao,
            ano_criacao: _dados.ano_criacao,
            pais_origem: _dados.pais_origem,
            obra_maxima: _dados.obra_maxima,
            data_adicionado: `${hoje}` 
          });  
        } else {
          firebase.database().ref(`${tableData}/` + dadosId).set({
            id: dadosId,
            nome: _dados.nome,
            nome_original: _dados.nome_original,
            biografia: _dados.biografia,
            ano_estreia: _dados.ano_estreia,
            ano_aposentadoria: _dados.ano_aposentadoria,
            data_nascimento: _dados.data_nascimento,
            pais_origem: _dados.pais_origem,
            premiacoes: _dados.premiacoes,
            foto: `${downloadURL}`,
            obra_maxima: _dados.obra_maxima,
            data_adicionado: `${hoje}`  
          });  
        }  

      }    
    }

}
