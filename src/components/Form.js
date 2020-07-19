import React from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionForChangeFormVal,
  actionForSaveFormData,
  actionForOpenDataRecords,
} from '../redux/actions';

const styles = {
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

export default function Form() {
  const state = useSelector((state) => state.form);
  const dispatch = useDispatch();

  function handleChange(event) {
    event.persist();
    const { name, value } = event.target;
    dispatch(actionForChangeFormVal({ name, value }));
  }

  function handleDateChange(date) {
    dispatch(actionForChangeFormVal({ name: 'date', value: date }));
  }

  function submitForm() {
    const dataToSend = { ...state };
    dispatch(actionForSaveFormData(dataToSend));
    dispatch(actionForOpenDataRecords(true));
  }

  function openDataRecords() {
    dispatch(actionForOpenDataRecords(true));
  }
  return (
    <Paper style={styles.container}>
      <h1>Havi Form</h1>
      <TextField
        label="Username"
        name="username"
        value={state.username}
        onChange={(evt) => handleChange(evt)}
        variant="outlined"
        style={styles.textField}
      />
      <div style={styles.lineBreak} />
      <TextField
        label="Password"
        name="password"
        value={state.password}
        onChange={(evt) => handleChange(evt)}
        variant="outlined"
        type="password"
        style={styles.textField}
      />
      <div style={styles.lineBreak} />
      <TextField
        label="Firstname"
        name="firstname"
        value={state.firstname}
        onChange={(evt) => handleChange(evt)}
        variant="outlined"
        style={styles.textField}
      />
      <div style={styles.lineBreak} />
      <TextField
        label="Lastname"
        name="lastname"
        value={state.lastname}
        onChange={(evt) => handleChange(evt)}
        variant="outlined"
        style={styles.textField}
      />
      <div style={styles.lineBreak} />
      <TextField
        label="Address"
        name="address"
        value={state.address}
        onChange={(evt) => handleChange(evt)}
        variant="outlined"
        style={styles.textField}
      />
      <div style={styles.lineBreak} />
      <TextField
        label="City"
        name="city"
        value={state.city}
        onChange={(evt) => handleChange(evt)}
        variant="outlined"
        style={styles.textField}
      />
      <div style={styles.lineBreak} />
      <TextField
        label="PhoneNumber"
        name="phone"
        value={state.phone}
        onChange={(evt) => handleChange(evt)}
        variant="outlined"
        style={styles.textField}
      />
      <div style={styles.lineBreak} />
      <TextField
        label="Description"
        name="description"
        value={state.description}
        onChange={(evt) => handleChange(evt)}
        variant="outlined"
        style={styles.textField}
      />
      <div style={styles.lineBreak} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '80%',
        }}
      >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Pick a date..."
            format="MM/dd/yyyy"
            value={state.date}
            onChange={(date) => handleDateChange(date)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <div style={styles.lineBreak} />
        <div>{state.fileData}</div>
        <Button
          variant="contained"
          color="default"
          component="label"
          startIcon={<CloudUploadIcon />}
        >
          Upload
          <input
            type="file"
            style={{ display: 'none' }}
            name="fileData"
            onChange={(evt) => handleChange(evt)}
          />
        </Button>
      </div>
      <div style={styles.lineBreak} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={submitForm}
          style={{
            marginRight: '5px',
          }}
          onClick={submitForm}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button variant="contained" color="secondary" onClick={openDataRecords}>
          Data Records
        </Button>
      </div>
    </Paper>
  );
}
