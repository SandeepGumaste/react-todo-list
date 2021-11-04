import React from 'react';
import Form from './components/Form';

function App(props) {
  return (
    <div className="App mt-10 bg-white rounded-lg ml-3 mr-3 min-w-min max-w-2xl" >
      <h1 className="text-3xl mb-5 p-3 block text-center text-white rounded-t-lg font-bold bg-primary pt-5" >Todo List</h1>
      <Form className="flex"/>
    </div>
  );
}

export default App;
