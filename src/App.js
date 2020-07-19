import React from 'react';
import Form from './components/Form';
import DataRecords from './components/DataRecords';
import { useSelector } from 'react-redux';

function App() {
  const openDataRecords = useSelector((state) => state.openDataRecords);
  return !openDataRecords ? <Form /> : <DataRecords />;
}

export default App;
