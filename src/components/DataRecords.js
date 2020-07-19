import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { actionForOpenDataRecords } from '../redux/actions';
import IndividualRecords from './IndividualRecords';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '20px',
  },
  textField: {
    width: '80%',
  },
  lineBreak: {
    marginTop: '20px',
  },
};

function DataRecords() {
  const state = useSelector((state) => ({
    records: state.dataRecords,
    openDataRecords: state.openDataRecords,
  }));

  const dispatch = useDispatch();
  return (
    <>
      <h1 style={{ color: '#fff' }}>Data Records</h1>
      <Paper style={style.container}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            width: '100%',
            justifyContent: 'flex-end',
            cursor: 'pointer',
          }}
          onClick={() => dispatch(actionForOpenDataRecords(false))}
        >
          <CancelIcon />
        </div>
        <div style={style.lineBreak} />
        {state.records.length === 0 ? (
          <h1>No Records Found!</h1>
        ) : (
          <>
            {state.records.map((_, index) => (
              <IndividualRecords key={index} index={index} />
            ))}
          </>
        )}
      </Paper>
    </>
  );
}

export default DataRecords;
