import { records } from './props';
import { Map } from 'react-kakao-maps-sdk';
import { useState } from 'react';
import { Modal, Box } from '@mui/material';
import AlbumMapCluster from './AlbumMapCluster';

export default function AlbumMap({ records }) {
  const [targetIndex, setTargetIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  function handleRecordId(recordId) {
    for (let index = 0; index < records.length; index++) {
      if (records[index].recordId == recordId) {
        setTargetIndex(index);
        break;
      }
    }
    setModalOpen(true);
  }

  return (
    <>
      <Map center={{ lat: 37.4977288, lng: 127.0448612 }} style={{ width: '100%', height: '360px' }} draggable={true}>
        <AlbumMapCluster records={records} handleRecordId={handleRecordId}></AlbumMapCluster>
      </Map>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          {targetIndex < records.length ? (
            <ul>
              <li>recordId : {records[targetIndex].recordId}</li>
              <li>dayCount : {records[targetIndex].dayCount}</li>
              <li>recordType : {records[targetIndex].recordType}</li>
              <li>latitude : {records[targetIndex].lat}</li>
              <li>longitude : {records[targetIndex].lng}</li>
              <li>
                <img src={records[targetIndex].recordFile} alt="random"></img>
              </li>
            </ul>
          ) : (
            <div>No Content!</div>
          )}
        </Box>
      </Modal>
    </>
  );
}

AlbumMap.propTypes = {
  records,
};
