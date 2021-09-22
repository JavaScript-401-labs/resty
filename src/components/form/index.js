import React from 'react';
import { useState } from "react";

import './form.scss';

function Form (props){


    const [method, setMethod] = useState('get');
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [showTextArea, setShowTextArea] = useState('false');
    const [requestTextAreaBody, setRequestTextAreaBody] = useState('');

    const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method : method,
      url : url,
      body : requestTextAreaBody,
    };
    props.handleApiCall(formData);
  }

    const urlHandler = (e)=>{
      setUrl(e.target.value);
    }

    const getMethodHandler = (e)=>{
      setShowTextArea(false);
      setMethod(e.target.id)
    }

    const postMethodHandler = (e)=>{
      setShowTextArea(true);
      setMethod(e.target.id)
    }

    const putMethodHandler = (e)=>{
      setShowTextArea(true);
      setMethod(e.target.id)
    }

    const deleteMethodHandler = (e)=>{
      setShowTextArea(false);
      setMethod(e.target.id)
    }

    const requestBodyHandler= ()=>{
      setRequestTextAreaBody(e.target.value)
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={urlHandler}/>
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get" onClick={getMethodHandler}>GET</span>
            <span id="post" onClick={postMethodHandler}>POST</span>
            <span id="put" onClick={putMethodHandler}>PUT</span>
            <span id="delete" onClick={deleteMethodHandler}>DELETE</span>
          </label>
          {showTextArea && <textarea rows="4" cols="50" onChange={requestBodyHandler}></textarea>}
        </form>
      </>
    );
  
}

export default Form;
