import React, { Component } from 'react';
import { Growl } from 'primereact/growl';
import { FileUpload } from 'primereact/fileupload';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class FileUploadDemo extends Component {

    constructor() {
        super();

        this.onUpload = this.onUpload.bind(this);
        this.onBasicUpload = this.onBasicUpload.bind(this);
        this.onBasicUploadAuto = this.onBasicUploadAuto.bind(this);
    }

    onUpload(event) {
        this.growl.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    onBasicUpload(event) {
        this.growl.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

    onBasicUploadAuto(event) {
        this.growl.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    }

    render() {
        return (
            <div>
                <div className="content-section implementation">
                    <label>Imagem</label>
                    <FileUpload name="demo[]" url="./upload.php" onUpload={this.onUpload}
                        multiple={false} accept="image/*" maxFileSize={2000000}
                        chooseLabel="Escolha o arquivo"
                        cancelLabel="Cancelar"
                        invalidFileSizeMessageSummary="ARQUIVO INVÁLIDO!"
                        invalidFileSizeMessageDetail="O tamanho máximo permitido é {0}"
                    />

                    <Growl ref={(el) => { this.growl = el; }}></Growl>
                </div>
            </div>
        )
    }
}

//export default FileUploadDemo