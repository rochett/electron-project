import React  from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';

export default function ButtonSwap({titleTag}) {
    
    function getSelectedOptions(sel) {
        var opts = [], opt;    
        var erro = 'N';    
        
        for (var i=0, len=sel.options.length; i<len; i++) {
            opt = sel.options[i];            
            
            if ( opt.selected ) { 
                var testArray = (document.getElementById(titleTag).value.split(','));  
                var result = (testArray.indexOf(opt.value) > -1);                          
                if (result === true) {
                    swal({
                        title: "Erro ao enviar os dados!",
                        text: "O item " + opt.value + " já existe!",
                        icon: "error"
                      });  
                      erro = 'S' 
                } else {
                    opts.push(opt.value);
                }
                
            }
        }

        var display = document.getElementById(titleTag);
        if (display.value && erro !=='S') {
            display.innerHTML += ',' + opts;    
        } else {
            display.innerHTML += opts;           
        }
        
    }

    const handleGoClick = event => {                
        getSelectedOptions( document.getElementById(titleTag + '-a') )
    }

    const handleBackClick = event => {
        var myControl = document.getElementById(titleTag);
        var myArray = (myControl.value.split(','));        
        var resultText = myControl;
        resultText.innerHTML = myArray.slice(0, (myArray.length - 1));        
    }

    return (
        <>
            <br></br><br></br>
            <div align="center">
                <Button type="button" size="sm" variant="primary" onClick={handleGoClick} ><FontAwesomeIcon icon={faArrowRight} /></Button>
            </div>
            <br></br>
            <div align="center">
                <Button type="button" size="sm" variant="primary" onClick={handleBackClick} ><FontAwesomeIcon icon={faArrowLeft} /></Button>
            </div> 
        </>
    )
} 