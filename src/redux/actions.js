import {
  CHANGE_FORM_VAL,
  SAVE_FORM_DATA,
  OPEN_DATA_RECORDS,
  DELETE_A_RECORD,
  UPDATE_A_RECORD,
  ADD_TAG,
} from './contants';

const actionForChangeFormVal = (data) => ({
  type: CHANGE_FORM_VAL,
  payload: data,
});

const actionForSaveFormData = (formData) => ({
  type: SAVE_FORM_DATA,
  payload: formData,
});

const actionForOpenDataRecords = (boolean) => ({
  type: OPEN_DATA_RECORDS,
  payload: boolean,
});

const actionForDeleteRecord = (index) => ({
  type: DELETE_A_RECORD,
  payload: index,
});

const actionForUpdateRecord = (data, index) => ({
  type: UPDATE_A_RECORD,
  payload: {
    data,
    index,
  },
});

const actionForAddTag = (val) => ({
  type: ADD_TAG,
  tag: val,
});
export {
  actionForChangeFormVal,
  actionForSaveFormData,
  actionForOpenDataRecords,
  actionForDeleteRecord,
  actionForUpdateRecord,
  actionForAddTag,
};
