import React from 'react';
import axios from 'axios';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { useState , useEffect} from "react";

function App() {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [textAreaBody, setTextAreaBody] = useState("")

  useEffect(() => {
    
      const getData = async ()=>{
        if(requestParams.url){
          const getDataApi = await axios({
            method: requestParams.method,
            url: requestParams.url,
            data:textAreaBody
          });
          setData(getDataApi);
        }
      }
      getData();
  }, [requestParams])


   const callApi = (formData) => {
    // mock output
    
    setRequestParams(formData);
    setTextAreaBody(formData.body);
  }


    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </React.Fragment>
    );

}

export default App;
