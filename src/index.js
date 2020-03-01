import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.js';

function Main(){
  return(
    <React.Fragment>
      <App/>
    </React.Fragment>
  );
}

const reactDom = document.getElementById('root');
ReactDom.render(<Main /> , reactDom);

