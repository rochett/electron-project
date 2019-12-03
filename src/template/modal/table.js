import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

function Table(props) {

  function priceFormatter(cell, row) {
    return (
      <>
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Editar</Tooltip>}><Button variant="primary"><FontAwesomeIcon icon={faEdit} /></Button></OverlayTrigger>&nbsp;
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Excluir</Tooltip>}><Button variant="danger"><FontAwesomeIcon icon={faTrashAlt} /></Button></OverlayTrigger>
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


  const { characterData } = props;
  const options = () => ({
    noDataText: 'A consulta não encontrou resultados.',
    sizePerPage: 8,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
    clearSearch: true,
    nextPage: 'Próximo',
    prePage: 'Anterior',
    paginationShowsTotal: renderShowsTotal
  });
  return (
    <div>
      <BootstrapTable
        data={characterData}
        options={options()}
        hover
        striped
        pagination >
        <TableHeaderColumn dataField='titulo' isKey dataSort >Título</TableHeaderColumn>
        <TableHeaderColumn filter={{ type: 'TextFilter', placeholder: 'Pesquisar pelo número da conta' }} dataField='titulo_original' dataSort>
          Título Original
                </TableHeaderColumn>
        <TableHeaderColumn dataField='ano_criacao' dataSort>
          Ano de Criação
                </TableHeaderColumn>
        <TableHeaderColumn filter={{ type: 'TextFilter', placeholder: 'Pesquisar pelo número do documento' }} dataField='descricao' dataSort>
          Descrição
                </TableHeaderColumn>
        <TableHeaderColumn dataField='price' dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
}


export default Table;