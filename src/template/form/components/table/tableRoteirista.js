import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { faTrashAlt, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

export default function Table({ characterData: dados }) {

    function actionButtons() {
        return (
            <>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Editar</Tooltip>}><Button variant="primary"><FontAwesomeIcon icon={faEdit} /></Button></OverlayTrigger>&nbsp;
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Excluir</Tooltip>}><Button variant="danger"><FontAwesomeIcon icon={faTrashAlt} /></Button></OverlayTrigger>&nbsp;
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
            <TableHeaderColumn filter={{ type: 'TextFilter', placeholder: 'Pesquisar pelo título original' }} dataField='nome' isKey dataSort>
                Nome
            </TableHeaderColumn>
            <TableHeaderColumn dataField='data_nascimento' dataSort>
                Data de Nascimento
            </TableHeaderColumn>
            <TableHeaderColumn dataField='pais_origem' dataSort>
                País de Origem
            </TableHeaderColumn>
            <TableHeaderColumn filter={{ type: 'TextFilter', placeholder: 'Pesquisar pela descrição' }} dataField='filmes' dataSort>
                Filmes
            </TableHeaderColumn>
            <TableHeaderColumn filter={{ type: 'TextFilter', placeholder: 'Pesquisar pela descrição' }} dataField='premiacoes' dataSort>
                Premiações
            </TableHeaderColumn>
            <TableHeaderColumn dataField='price' dataFormat={actionButtons}>Ações</TableHeaderColumn>
        </BootstrapTable>
    )
}
