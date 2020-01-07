import React, { useState, useEffect } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { faTrashAlt, faEdit, faEye, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';
import swal from 'sweetalert';
import FormGenPre from '../../form/genPre/formGenPre';
import FormAtorDirRot from '../../form/atorDirRot/formAtorDirRot';
import FormFilme from '../../form/filme/formFilme';
import FormPais from '../../form/pais/formPais';
import ShowData from '../../form/showData/showData';
import '../../../template/styles.css';
import moment from 'moment';
//import removeAccents from 'remover-acentos';
import firebase from "firebase/app";

export default function Table({ characterData: dados, titulos, tableData }) {

    const [show, setShow] = useState(false);
    const [titleTagForm, setTitleTagForm] = useState('');
    const [idForm, setIdForm] = useState('');
    const [selectGeral, setSelectGeral] = useState([]);
    const [returnData, setReturnData] = useState([]);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        firebase.database().ref(`${tableData}/`).on('value', function (_selectGeral) {
            setSelectGeral(_selectGeral.val());
        });
    }, []);

    function handleClickShow() {
        setShow(true);
        setShowList(false);
    }

    function handleClickEdit(id, tableData) {
        var titleForm = '';
        switch (tableData) {
            case 'premiacoes':
                titleForm = 'Premiação';
                break;
            case 'filmes':
                titleForm = 'Filme';
                break;
            case 'generos':
                titleForm = 'Gênero';
                break;
            case 'atores':
                titleForm = 'Ator/Atriz';
                break;
            case 'diretores':
                titleForm = 'Diretor';
                break;
            case 'roteiristas':
                titleForm = 'Roteirista';
                break;
            case 'pais_origem':
                titleForm = 'País de Origem';
                break;
            case 'series':
                titleForm = 'Séries';
                break;
            default:
                titleForm = 'Premiação';
                break;
        }
        setTitleTagForm(titleForm);
        setShow(true);
        setIdForm(id);
        setShowList(true);

        var regData = selectGeral.filter(function (item) {
            return item.id === id;
        });

        setReturnData(regData[regData.length - 1]);
    }

    function renderSwitch({ tableData }) {
        switch (tableData) {
            case 'premiacoes':
                return <FormGenPre tableData="premiacoes" titleTag="Premiação" idForm={idForm} dadosReg={returnData} />;
            case 'filmes':
                return <FormFilme tableData="filmes" titleTag="Filme" idForm={idForm} dadosReg={returnData} />;
            case 'generos':
                return <FormGenPre tableData="generos" titleTag="Gênero" idForm={idForm} dadosReg={returnData} />;
            case 'atores':
                return <FormAtorDirRot tableData="atores" titleTag="Ator" idForm={idForm} dadosReg={returnData} />;
            case 'diretores':
                return <FormAtorDirRot tableData="diretores" titleTag="Diretor" idForm={idForm} dadosReg={returnData} />;
            case 'roteiristas':
                return <FormAtorDirRot tableData="roteiristas" titleTag="Roteirista" idForm={idForm} dadosReg={returnData} />;
            case 'series':
                return <FormFilme tableData="series" titleTag="Série" idForm={idForm} dadosReg={returnData} />;
            case 'pais_origem':
                return <FormPais tableData="pais_origem" titleTag="País" idForm={idForm} dadosReg={returnData} />;
            default:
                return <FormGenPre tableData="premiacoes" titleTag="Premiação" id={idForm} dadosReg={returnData} />;
        }
    }

    function handleClickDelete(id) {
        swal({
            title: "Deseja realmente EXCLUIR?",
            text: "Uma vez removida, não será possível recuperar a informação!",
            icon: "warning",
            buttons: ["Cancelar", "Remover"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    firebase.database().ref(`${tableData}/` + id).remove();

                    swal("O Registro " + id + " foi removido com sucesso!", {
                        icon: "success",
                    });
                }
            });
    }

    function actionButtons(a, row) {
        return (
            <>
                <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-disabled">Editar</Tooltip>}><Button variant="primary" onClick={() => handleClickEdit(row.id, tableData)}><FontAwesomeIcon icon={faEdit} /></Button></OverlayTrigger>&nbsp;
                <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Excluir</Tooltip>}><Button variant="danger" onClick={() => handleClickDelete(row.id)}><FontAwesomeIcon icon={faTrashAlt} /></Button></OverlayTrigger>&nbsp;
                <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Visualizar</Tooltip>}><Button variant="warning" onClick={() => handleClickShow()}><FontAwesomeIcon icon={faEye} /></Button></OverlayTrigger>
            </>
        );
    }

    function renderShowsTotal(start, to, total) {
        return (
            <p className="table-footer">
                Exibindo {start} a {to}, de {total}&nbsp;linhas
      </p>
        );
    }

    function dataFormatter(cell, row) {
        return (
            row.data_nascimento ? (moment(`${cell}`).format('DD/MM/YYYY')).toString() : `${cell}`
        );
    }

    function cellFormatter(cell, row) {
        return (
            `${cell}`
        );
    }

    const options = {
        noDataText: 'A consulta não encontrou resultados.',
        sizePerPage: 8,
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true,
        clearSearch: true,
        nextPage: 'Próximo',
        prePage: 'Anterior',
        paginationShowsTotal: renderShowsTotal
    };
    return (
        <>
            <BootstrapTable
                data={dados}
                options={options}
                hover
                striped
                pagination>

                {titulos.map(t => (
                    <TableHeaderColumn hidden={t.hidden} key={t.title + t.field} isKey={t.iskey} filter={t.search === false ? {} : { type: 'TextFilter', placeholder: `Pesquisar pelo(a) ${t.title}` }}
                        dataField={t.field} dataFormat={t.title === 'Data de Nascimento' ? dataFormatter : cellFormatter} dataSort>
                        {t.title}
                    </TableHeaderColumn>
                ))}
                <TableHeaderColumn dataField='price' dataFormat={actionButtons}>Ações</TableHeaderColumn>
            </BootstrapTable>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="Modal-Largo"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faVideo} />&nbsp;Dados do(a) {titleTagForm}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        showList === true ? renderSwitch({ tableData }) :
                            <ShowData />
                    }

                </Modal.Body>
            </Modal>
        </>
    )
}
