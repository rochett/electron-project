import React from 'react';

export default function CharLimit({lastMovieTag, limitTag}){

    var text='';
    var i = 0;
    var charText = lastMovieTag && lastMovieTag.sinopse;

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