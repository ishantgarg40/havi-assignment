import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  TextField,
  FormControl,
  Select,
  InputLabel,
  Button,
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { actionForUpdateRecord, actionForAddTag } from '../redux/actions';
import proptypes from 'prop-types';

const styles = {
  lineBreak: {
    marginTop: '10px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  textField: {
    marginRight: '5px',
  },
};

export default function DisplayDataWithEdit({ index }) {
  const state = useSelector((state) => ({
    records: state.dataRecords,
    tags: state.tags,
  }));
  const currentRecord = state.records[index];
  const dispatch = useDispatch();

  const [tag, setTag] = useState('');

  function handleChange(event) {
    event.persist();
    const { name, value } = event.target;
    dispatch(actionForUpdateRecord({ name, value }, index));
  }

  function handleDateChange(date) {
    dispatch(actionForUpdateRecord({ name: 'date', value: date }, index));
  }

  function submitTag() {
    if (tag) {
      dispatch(actionForAddTag(tag));
    }
    return;
  }

  return (
    <>
      <div style={styles.container}>
        <div style={styles.item}>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            value={currentRecord.username}
            onChange={(evt) => handleChange(evt)}
            style={styles.textField}
          />
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            value={currentRecord.password}
            onChange={(evt) => handleChange(evt)}
            style={styles.textField}
          />
          <TextField
            label="Firstname"
            name="firstname"
            variant="outlined"
            value={currentRecord.firstname}
            onChange={(evt) => handleChange(evt)}
            style={styles.textField}
          />
        </div>
        <div style={styles.item}>
          <TextField
            label="Lastname"
            name="lastname"
            variant="outlined"
            value={currentRecord.lastname}
            onChange={(evt) => handleChange(evt)}
            style={styles.textField}
          />
          <TextField
            label="Address"
            name="address"
            variant="outlined"
            value={currentRecord.address}
            onChange={(evt) => handleChange(evt)}
            style={styles.textField}
          />
          <TextField
            label="City"
            name="city"
            value={currentRecord.city}
            onChange={(evt) => handleChange(evt)}
            variant="outlined"
            style={styles.textField}
          />
        </div>
        <div style={styles.item}>
          <TextField
            label="Phone Number"
            name="phone"
            value={currentRecord.phone}
            onChange={(evt) => handleChange(evt)}
            variant="outlined"
            style={styles.textField}
          />
          <TextField
            label="Description"
            name="description"
            variant="outlined"
            value={currentRecord.description}
            onChange={(evt) => handleChange(evt)}
            style={styles.textField}
          />
        </div>
        <div style={styles.item}>
          <TextField
            label="Add a Tag"
            name="tag"
            value={tag}
            onChange={(evt) => setTag(evt.target.value)}
            variant="outlined"
            style={styles.textField}
          />
          <Button variant="contained" color="secondary" onClick={submitTag}>
            + Add Tag
          </Button>
          <TextField
            label="Notes"
            name="notes"
            value={currentRecord.notes}
            onChange={(evt) => handleChange(evt)}
            variant="outlined"
            style={styles.textField}
          />
        </div>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-age-native-simple">Tags</InputLabel>
          <Select
            value={currentRecord.tag}
            name="tag"
            value={currentRecord.tag}
            onChange={(val) => handleChange(val)}
          >
            {state.tags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </Select>
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Pick a date..."
            format="MM/dd/yyyy"
            value={currentRecord.date}
            onChange={(date) => handleDateChange(date)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <div>{currentRecord.fileData}</div>
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
    </>
  );
}

DisplayDataWithEdit.propTypes = {
  index: proptypes.number.isRequired,
};
