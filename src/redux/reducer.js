import {
  CHANGE_FORM_VAL,
  SAVE_FORM_DATA,
  OPEN_DATA_RECORDS,
  DELETE_A_RECORD,
  UPDATE_A_RECORD,
  ADD_TAG,
} from './contants';

export default function Reducer(state, action) {
  switch (action.type) {
    case CHANGE_FORM_VAL:
      return {
        ...state,
        form: { ...state.form, [action.payload.name]: action.payload.value },
      };
    case SAVE_FORM_DATA:
      return {
        ...state,
        dataRecords: [
          ...state.dataRecords,
          { ...action.payload, tag: '', notes: '' },
        ],
      };
    case OPEN_DATA_RECORDS:
      return {
        ...state,
        openDataRecords: action.payload,
      };
    case DELETE_A_RECORD:
      return {
        ...state,
        dataRecords: state.dataRecords.filter(
          (_, idx) => idx !== action.payload
        ),
      };
    case UPDATE_A_RECORD:
      const { data, index } = action.payload;
      const { name, value } = data;
      return {
        ...state,
        dataRecords: state.dataRecords.map((obj, idx) => {
          if (idx === index) {
            return {
              ...obj,
              [name]: value,
            };
          }
          return obj;
        }),
      };
    case ADD_TAG:
      return {
        ...state,
        tags: [...state.tags, action.tag],
      };
    default:
      return state;
  }
}
