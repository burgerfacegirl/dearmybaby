import { records } from './props';
import { Map } from 'react-kakao-maps-sdk';
import AlbumMapItem from './AlbumMapItem';

export default function AlbumMap({ records }) {
  return (
    <>
      <Map center={{ lat: 37.4977288, lng: 127.0448612 }} style={{ width: '100%', height: '360px' }}>
        {records.map((record) => (
          <AlbumMapItem key={record.recordId} record={record}></AlbumMapItem>
        ))}
      </Map>
    </>
  );
}

AlbumMap.propTypes = {
  records,
};
