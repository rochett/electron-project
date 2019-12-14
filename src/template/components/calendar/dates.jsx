import React from 'react';
import moment from 'moment';

export default function DateDiff({lastMovieTag}){

    const now = moment(new Date());  
    const past = moment(lastMovieTag && lastMovieTag.data_adicionado);  
    const dateDiff = now.diff(past, 'days');
    
    return (
        <>
            {dateDiff}
        </>
    )

}