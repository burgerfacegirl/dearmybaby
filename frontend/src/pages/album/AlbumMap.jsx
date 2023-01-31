import { records } from './props';
import { Map } from 'react-kakao-maps-sdk';
import { useState } from 'react';
import AlbumMapCluster from './AlbumMapCluster';

export default function AlbumMap({ records }) {
  const [targetRecord, setTargetRecord] = useState(null);

  function handleRecordId(recordId) {
    for (let record of records) {
      if (record.recordId == recordId) {
        setTargetRecord(record);
        break;
      }
    }
  }

  return (
    <>
      <Map center={{ lat: 37.4977288, lng: 127.0448612 }} style={{ width: '100%', height: '360px' }} draggable={true}>
        <AlbumMapCluster records={records} handleRecordId={handleRecordId}></AlbumMapCluster>
      </Map>
      {targetRecord && (
        <ul>
          <li>recordId : {targetRecord.recordId}</li>
          <li>dayCount : {targetRecord.dayCount}</li>
          <li>recordType : {targetRecord.recordType}</li>
          <li>latitude : {targetRecord.lat}</li>
          <li>longitude : {targetRecord.lng}</li>
          <li>
            <img src={targetRecord.recordFile} alt="random"></img>
          </li>
        </ul>
      )}
    </>
  );
}

AlbumMap.propTypes = {
  records,
};
