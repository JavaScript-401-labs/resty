import React from 'react';
import Loading from '../loading';
import JSONPretty from 'react-json-pretty';

function Results(props){
 
    return (
      <section>
        {/* <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre> */}
        {props.data ? <div>
          <h2>Header</h2>
          <JSONPretty data={props.data ? props.data : null}></JSONPretty>
          <h2>Results</h2>
          <JSONPretty data={props.data ? props.data.headers : null}></JSONPretty>
        </div> : <Loading/>}
      </section>
    );
  
}

export default Results;
