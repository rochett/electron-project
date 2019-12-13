import React, { useState } from 'react';

export default function SelectAno() {

    const [anosCombo] = useState([]);
    const anoAtual = new Date().getFullYear();
    var coReg, valReg;
    coReg = valReg = 0;

    function ComboAno() {
        while (coReg <= 120) {
            valReg = anoAtual - coReg;
            anosCombo.push(<option key={coReg} value={{ valReg }}>{valReg}</option>)
            coReg++;
        }
        return anosCombo;
    }

    return ComboAno()
}
