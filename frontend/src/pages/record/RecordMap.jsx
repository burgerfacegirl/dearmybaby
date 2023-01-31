import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState } from 'react';

const RecordMap = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Map
      center={{
        lat: 37.5128064,
        lng: 127.0284288,
      }}
      style={{
        width: '100%',
        height: '450px',
      }}
      level={3} // 지도의 확대 레벨
    >
      <MapMarker
        position={{
          lat: 37.5128064,
          lng: 127.0284288,
        }}
        image={{
          src: '/assets/foot-print.png',
          size: {
            width: 25,
            height: 25,
          },
        }}
        clickable={true}
        onClick={() => setIsOpen(true)}
      >
        {isOpen && (
          <div style={{ minWidth: '150px' }}>
            <button onClick={() => setIsOpen(false)}>X</button>
            <div style={{ padding: '5px', color: '#000' }}>이곳에 발자국을 남겨주세요</div>
          </div>
        )}
      </MapMarker>
    </Map>
  );
};

export default RecordMap;
