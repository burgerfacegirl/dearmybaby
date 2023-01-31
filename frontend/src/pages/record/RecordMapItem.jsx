import { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import './Record.css';

function RecordMapItem() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: '현재 위치를 불러올 수 없어요',
        isLoading: false,
      }));
    }
  }, []);

  return (
    <div>
      <Map // 지도를 표시할 Container
        center={state.center}
        style={{
          // 지도의 크기
          width: '100%',
          height: '90vh',
        }}
        level={3} // 지도의 확대 레벨
        draggable={true}
      >
        {!state.isLoading && (
          <MapMarker
            position={state.center}
            image={{
              src: 'http://simpleicon.com/wp-content/uploads/foot.png',
              size: {
                width: 40,
                height: 40,
              },
            }}
            clickable={true}
            onClick={() => setIsOpen(true)}
          >
            {state.errMsg ? state.errMsg : <div style={{ border: 'none' }}>이곳에 발자국을 남겨보세요</div>}
            {isOpen && (
              <div style={{ minWidth: '150px' }}>
                <button onClick={() => setIsOpen(false)}>X</button>
                <div style={{ padding: '50px', color: '#000000' }}></div>
              </div>
            )}
          </MapMarker>
        )}
      </Map>
    </div>
  );
}

export default RecordMapItem;
