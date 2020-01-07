import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown, Modal } from 'react-bootstrap';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListaGeral from '../table/listaGeral';
import removeAccents from 'remover-acentos';
import FormFilme from '../../form/filme/formFilme';
import FormGenPre from '../../form/genPre/formGenPre';
import FormAtorDirRot from '../../form/atorDirRot/formAtorDirRot';
import FormPais from '../../form/pais/formPais';
import '../../styles.css';

export default function NavBar() {

    const [show, setShow] = useState(false);
    const [tableData, setTableData] = useState('');
    const [titles, setTitles] = useState([]);
    const [showList, setShowList] = useState(false);
    const [formTag, setFormTag] = useState(false);

    function handleItemCadClick(tableData) {
        setShow(true);
        setTableData(tableData);
        setShowList(false);
        var tag = '';
        if (tableData === 'Atores') {
            tag = 'FormAtor';
        }
        if (tableData === 'Diretores') {
            tag = 'FormDiretor';
        }
        if (tableData === 'Roteiristas') {
            tag = 'FormRoteirista';
        }
        if (tableData === 'Gêneros') {
            tag = 'FormGenero';
        }
        if (tableData === 'Premiações') {
            tag = 'FormPremiacao';
        }
        if (tableData === 'Filmes') {
            tag = 'FormFilme';
        }
        if (tableData === 'Séries') {
            tag = 'FormSerie';
        }
        if (tableData === 'Países') {
            tag = 'FormPais';
        }
        setFormTag(tag);
    }

    function handleItemListClick(tableData) {
        setShow(true);
        setTableData(tableData);
        var titlesTable = [];
        if (tableData === 'Atores' || tableData === 'Diretores' || tableData === 'Roteiristas') {
            titlesTable = [{ id: "Id", field: "id", search: false, iskey: false, hidden: true },
            { title: "Nome", field: "nome", search: false, iskey: true },
            { title: "Data de Nascimento", field: "data_nascimento", search: false, iskey: false },
            { title: "Ano de Estréia", field: "ano_estreia", search: true, iskey: false },
            { title: "País de Origem", field: "pais_origem", search: true, iskey: false },
            { title: "Premiações", field: "premiacoes", search: true, iskey: false }];
        }

        if (tableData === 'Gêneros' || tableData === 'Premiações') {
            titlesTable = [{ id: "Id", field: "id", search: false, iskey: false, hidden: true },
            { title: "Título", field: "titulo", search: false, iskey: true },
            { title: "Título Original", field: "titulo_original", search: false, iskey: false },
            { title: "Ano de Criação", field: "ano_criacao", search: false, iskey: false },
            { title: "Obra Inaugural", field: "obra_maxima", search: false, iskey: false },
            { title: "Descrição", field: "descricao", search: true, iskey: false }];
        }

        if (tableData === 'Filmes' || tableData === 'Séries') {
            titlesTable = [{ id: "Id", field: "id", search: false, iskey: false, hidden: true },
            { title: "Título", field: "titulo", search: false, iskey: true },
            { title: "Título Original", field: "titulo_original", search: true, iskey: false },
            { title: "Ano de Lançamento", field: "ano_lancamento", search: false, iskey: false },
            { title: "País de Origem", field: "pais_origem", search: true, iskey: false }];
        }

        if (tableData === 'pais_origem') {
            titlesTable = [{ id: "Id", field: "id", search: false, iskey: false, hidden: true },
            { title: "Nome", field: "nome", search: false, iskey: true },
            { title: "Sigla", field: "sigla", search: false, iskey: false }];
        }

        setTitles(titlesTable);
        setShowList(true);
    }

    function renderSwitch({ formTag }) {
        switch (formTag) {
            case 'FormPremiacao':
                return <FormGenPre tableData="premiacoes" titleTag="Premiação" idForm="-1" dadosReg="" />;
            case 'FormFilme':
                return <FormFilme tableData="filmes" titleTag="Filme" idForm="-1" dadosReg="" />;
            case 'FormGenero':
                return <FormGenPre tableData="generos" titleTag="Gênero" idForm="-1" dadosReg="" />;
            case 'FormAtor':
                return <FormAtorDirRot tableData="atores" titleTag="Ator" idForm="-1" dadosReg="" />;
            case 'FormDiretor':
                return <FormAtorDirRot tableData="diretores" titleTag="Diretor" idForm="-1" dadosReg="" />;
            case 'FormRoteirista':
                return <FormAtorDirRot tableData="roteiristas" titleTag="Roteirista" idForm="-1" dadosReg="" />;
            case 'FormSerie':
                return <FormFilme tableData="series" titleTag="Série" idForm="-1" dadosReg="" />;
            case 'FormPais':
                return <FormPais tableData="pais_origem" titleTag="País" idForm="-1" dadosReg="" />;
            default:
                return <FormGenPre tableData="premiacoes" titleTag="Premiação" idForm="-1" dadosReg="" />;
        }
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
                <Navbar.Brand href="#home">SuperCinema 1.0</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Atores" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#atores/cadastro" onClick={() => handleItemCadClick('Atores')}>Cadastrar</NavDropdown.Item>
                            <NavDropdown.Item href="#atores/listagem" onClick={() => handleItemListClick('Atores', 'Ator')}>Listagem</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Diretores" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#diretores/cadastro" onClick={() => handleItemCadClick('Diretores')}>Cadastrar</NavDropdown.Item>
                            <NavDropdown.Item href="#diretores/listagem" onClick={() => handleItemListClick('Diretores', 'Diretor')}>Listagem</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Roteiristas" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#roteiristas/cadastro" onClick={() => handleItemCadClick('Roteiristas')}>Cadastrar</NavDropdown.Item>
                            <NavDropdown.Item href="#roteiristas/listagem" onClick={() => handleItemListClick('Roteiristas', 'Roteirista')}>Listagem</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Premiações" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#premiacoes/cadastro" onClick={() => handleItemCadClick('Premiações')}>Cadastrar</NavDropdown.Item>
                            <NavDropdown.Item href="#premiacoes/listagem" onClick={() => handleItemListClick('Premiações', 'Premiação')}>Listagem</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Gêneros" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#generos/cadastro" onClick={() => handleItemCadClick('Gêneros')}>Cadastrar</NavDropdown.Item>
                            <NavDropdown.Item href="#generos/listagem" onClick={() => handleItemListClick('Gêneros', 'Gênero')}>Listagem</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Filmes" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#filmes/cadastro" onClick={() => handleItemCadClick('Filmes')}>Cadastrar</NavDropdown.Item>
                            <NavDropdown.Item href="#filmes/listagem" onClick={() => handleItemListClick('Filmes', 'Filme')}>Listagem</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Séries" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#series/cadastro" onClick={() => handleItemCadClick('Séries')}>Cadastrar</NavDropdown.Item>
                            <NavDropdown.Item href="#series/listagem" onClick={() => handleItemListClick('Séries', 'Série')}>Listagem</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Países" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#paises/cadastro" onClick={() => handleItemCadClick('Países')}>Cadastrar</NavDropdown.Item>
                            <NavDropdown.Item href="#paises/listagem" onClick={() => handleItemListClick('pais_origem', 'País')}>Listagem</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://www.imdb.com" target="_blank">IMDB</Nav.Link>
                        <Nav.Link eventKey={2} href="https://pt.wikipedia.org/wiki/" target="_blank">
                            Wikipedia
                </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="Modal-Largo"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faGlobeAmericas} />&nbsp;
                        {showList === true ? 'Listagem' : 'Cadastro'} de {tableData === 'pais_origem' ? 'País' : tableData}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        showList === true ? <ListaGeral tableData={removeAccents(tableData).toLowerCase()} titulos={titles} /> :
                            renderSwitch({ formTag })
                    }
                </Modal.Body>
            </Modal>

        </>
    );

}