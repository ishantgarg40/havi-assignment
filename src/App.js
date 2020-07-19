import React from 'react';
import Form from './containers/Form';
import DataRecords from './containers/DataRecords';
import { useSelector } from 'react-redux';

function App() {
  const openDataRecords = useSelector((state) => state.openDataRecords);
  return !openDataRecords ? <Form /> : <DataRecords />;
}

export default App;
