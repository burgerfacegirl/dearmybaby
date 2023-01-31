import { record } from './props';
import { MapMarker } from 'react-kakao-maps-sdk';

export default function AlbumMapItem({ record }) {
  return (
    <MapMarker
      position={{
        lat: record.lat,
        lng: record.lng,
      }}
      image={{
        src: record.recordFile,
        size: {
          width: 50,
          height: 50,
        },
      }}
    ></MapMarker>
  );
}

AlbumMapItem.propTypes = {
  record,
};
