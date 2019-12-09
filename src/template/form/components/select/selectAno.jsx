import React  from 'react';

export default function SelectAno() {

    const anosCombo = [];   
    const data = new Date();
    const anoAtual = data.getFullYear();
    var coReg = 0;

    while (coReg <= 120) {
        anosCombo.push({ name: anoAtual - coReg, value: anoAtual - coReg });
        coReg++
    }    
    return (     
        anosCombo && anosCombo.map((text, i) => <option key={i} value={text.value}>                                        
        {text.name}</option>)
    )            
}