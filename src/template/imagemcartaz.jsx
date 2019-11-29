import React from 'react';
import { titulo_secao } from '../configapp';
import Image from 'react-bootstrap/Image'
 
function ImagemCartaz() {    
    
    return (
        <>
           <Image src={titulo_secao.cartaz.imagem} fluid className="img-responsive" alt="Cartaz" />  
        </>
    );
       
}

export default ImagemCartaz;