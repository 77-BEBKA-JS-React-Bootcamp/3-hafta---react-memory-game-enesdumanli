import React from 'react';
import {withRouter} from 'react-router-dom';

const Result = (props) => {
    console.warn(props);
    return (
        <div>
            "Tebrikler! {props.location.score+0.5} denemede tüm kartları eşleştirdiniz."
        </div>
    )
}

export default withRouter(Result);
