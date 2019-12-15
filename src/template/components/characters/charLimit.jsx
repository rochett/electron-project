import React from 'react';

export default function CharLimit({lastMovieTag, limitTag, valueTag}){

    var text='';
    var i = 0;
    var charText = lastMovieTag && lastMovieTag[valueTag];

    for(i=0;i<limitTag;i++) {
        if (charText) {
        text+=charText.substr(i,1);
        }
    }    
   
    return (
        <>   
            {`${text}(...)`}
        </>
    );    

}