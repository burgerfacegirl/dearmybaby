import { Map } from 'react-kakao-maps-sdk';
import AlbumMapItem from './PlanMapItem';

export default function PlanMap(place) {
  const lat = place.dummyPlace[0].lat;
  const lng = place.dummyPlace[0].lng;
  console.log(lng);
  return (
    <>
      <p></p>
      <Map center={{ lat: lat, lng: lng }} style={{ width: '100%', height: '360px' }}></Map>
    </>
  );
}

PlanMap.propTypes = {
  //   records,
};
