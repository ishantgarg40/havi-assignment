import React from 'react';
import {
  Accordion,
  Box,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from 'react-redux';
const style = {
  lineBreak: {
    marginTop: '10px',
  },
  BoxStyleNoEdit: {
    textAlign: 'center',
  },
};

export default function DisplayDataWithoutEdit({ index }) {
  const state = useSelector((state) => state.dataRecords);
  const record = state[index];
  return (
    <>
      {record.username ? (
        <Box style={{ ...style.lineBreak, ...style.BoxStyleNoEdit }}>
          <h2>Username</h2>
          <Typography>{record.username}</Typography>
        </Box>
      ) : null}
      {record.password ? (
        <Box style={{ ...style.lineBreak, ...style.BoxStyleNoEdit }}>
          <h2>Password</h2>
          <p>{record.password}</p>
        </Box>
      ) : null}
      {record.firstname ? (
        <Box style={{ ...style.lineBreak, ...style.BoxStyleNoEdit }}>
          <h2>Firstname</h2>
          <p>{record.firstname}</p>
        </Box>
      ) : null}
      {record.lastname ? (
        <Box style={{ ...style.lineBreak, ...style.BoxStyleNoEdit }}>
          <h2>Lastname</h2>
          <p>{record.lastname}</p>
        </Box>
      ) : null}
      {record.address ? (
        <Box style={{ ...style.lineBreak, ...style.BoxStyleNoEdit }}>
          <h2>Address</h2>
          <p>{record.address}</p>
        </Box>
      ) : null}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Expand for more info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
            }}
          >
            {record.city ? (
              <Box style={{ ...style.lineBreak, ...style.BoxStyleNoEdit }}>
                <h2>City</h2>
                <p>{record.city}</p>
              </Box>
            ) : null}
            {record.phone ? (
              <Box style={{ ...style.lineBreak, ...style.BoxStyleNoEdit }}>
                <h2>Phone Number</h2>
                <p>{record.phone}</p>
              </Box>
            ) : null}
            {record.description ? (
              <Box style={{ ...style.lineBreak, ...style.BoxStyleNoEdit }}>
                <h2>Description</h2>
                <p>{record.description}</p>
              </Box>
            ) : null}
            {record.date.toString() ? (
              <Box style={{ ...style.lineBreak, ...style.BoxStyleNoEdit }}>
                <h2>Date Chosen</h2>
                <p>{record.date.toString()}</p>
              </Box>
            ) : null}
            {record.fileData ? (
              <Box style={{ ...style.lineBreak, ...style.BoxStyleNoEdit }}>
                <h2>Uploaded Data</h2>
                <p>{record.fileData}</p>
              </Box>
            ) : null}
            {record.tag ? (
              <Box style={{ ...style.lineBreak, ...style.BoxStyleNoEdit }}>
                <h2>Tag</h2>
                <p>{record.tag}</p>
              </Box>
            ) : null}
            {record.notes ? (
              <Box style={{ ...style.lineBreak, ...style.BoxStyleNoEdit }}>
                <h2>Notes</h2>
                <p>{record.notes}</p>
              </Box>
            ) : null}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
