import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { faTrashAlt, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import swal from 'sweetalert';

export default function Table({ characterData: dados, titulos }) {

    function handleClickDelete(id) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            //buttons: true,
            buttons: ["Cancelar", "Remover"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal(id + " Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    // } else {
                    //     swal("Your imaginary file is safe!");
                }
            });
    }

    function actionButtons(a, row) {
        return (
            <>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Editar</Tooltip>}><Button variant="primary"><FontAwesomeIcon icon={faEdit} /></Button></OverlayTrigger>&nbsp;
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Excluir</Tooltip>}><Button variant="danger" onClick={() => handleClickDelete(row.id)}><FontAwesomeIcon icon={faTrashAlt} /></Button></OverlayTrigger>&nbsp;
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Visualizar</Tooltip>}><Button variant="warning"><FontAwesomeIcon icon={faEye} /></Button></OverlayTrigger>
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
        <BootstrapTable
            data={dados}
            options={options}
            hover
            striped
            pagination >

            {titulos.map(t => (
                <TableHeaderColumn hidden={t.hidden} key={t.title} isKey={t.iskey} filter={t.search === false ? {} : { type: 'TextFilter', placeholder: `Pesquisar pelo(a) ${t.title}` }} dataField={t.field} dataSort>
                    {t.title}
                </TableHeaderColumn>
            ))}
            <TableHeaderColumn dataField='price' dataFormat={actionButtons}>Ações</TableHeaderColumn>
        </BootstrapTable>
    )
}
