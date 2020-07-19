import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Button } from '@material-ui/core';
import DisplayDataWithoutEdit from '../Helper/DisplayDataWithoutEdit';
import DisplayDataWithEdit from '../Helper/DisplayDataWithEdit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { actionForDeleteRecord } from '../redux/actions';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    alignItems: 'center',
    paddingBottom: '20px',
  },
  lineBreak: {
    marginTop: '10px',
  },
};

function IndividualRecords({ index }) {
  const state = useSelector((state) => state.dataRecords);
  const dispatch = useDispatch();
  const [currentRecord, setCurrentRecord] = useState(state[index]);
  const [edit, setEdit] = useState(false);

  return (
    <Paper style={style.container}>
      <h1>Data Record {index + 1}</h1>
      {!edit ? (
        <div>
          <DisplayDataWithoutEdit index={index} />
          <div style={style.lineBreak} />
          <Button
            variant="contained"
            color="primary"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
        </div>
      ) : (
        <DisplayDataWithEdit index={index} />
      )}
      <div style={style.lineBreak} />
      <div>
        {edit ? (
          <Button
            variant="contained"
            color="primary"
            style={{
              marginRight: '10px',
            }}
            onClick={() => setEdit(false)}
            startIcon={<SaveIcon />}
          >
            Save Changes
          </Button>
        ) : null}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(actionForDeleteRecord(index))}
          startIcon={<DeleteIcon />}
        >
          Delete Record
        </Button>
      </div>
    </Paper>
  );
}

export default IndividualRecords;
