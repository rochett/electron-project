import firebase from "firebase/app";
import moment from 'moment';
import swal from 'sweetalert';

export default function SaveData(tableData, dados, dadosId) {           
    
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
