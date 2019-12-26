import firebase from "firebase/app";
import "firebase/storage";
import moment from 'moment';
import swal from 'sweetalert';

export default function SaveData(tableData, dados, dadosId) {

  var hoje = (moment(new Date()).format('YYYY-MM-DD')).toString();
  var arquivo = dados.imageUpload && dados.imageUpload.files[0].name;
  writeUserData(dadosId, dados, hoje, arquivo);

  // File or Blob named mountains.jpg

  var storageRef = firebase.storage().ref();

  var file = dados.imageUpload.files[0];

  alert(file);

  // Create the file metadata
  var metadata = {
    contentType: 'image/jpeg'
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
  alert(file.name);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function (snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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

      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;
        default:
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, function () {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log('File available at', downloadURL);
      });
    });

  swal({
    title: "Operação Concluída!",
    text: "Registro salvo com sucesso!",
    icon: "success"
  });

  function writeUserData(dadosId, dados, hoje, arquivo) {
    firebase.database().ref(`${tableData}/` + dadosId).set({
      id: dadosId,
      nome: dados.nome.value,
      nome_original: dados.nome_original.value,
      biografia: dados.biografia.value,
      ano_estreia: dados.ano_estreia.value,
      ano_aposentadoria: dados.ano_aposentadoria.value,
      data_nascimento: dados.data_nascimento.value,
      pais_origem: dados.pais_origem.value,
      premiacoes: dados.premiacoes.value,
      foto: `${arquivo}`,
      obra_maxima: dados.obra_maxima.value,
      data_adicionado: `${hoje}`
    });
  }

}
