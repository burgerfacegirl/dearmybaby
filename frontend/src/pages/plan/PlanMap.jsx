import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState, useEffect } from 'react';

const kakao = window.kakao;

export default function PlanMap() {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [keyWord, setKeyWord] = useState('');

  const onChange = (e) => {
    setKeyWord(e.target.value);
    // console.log(keyWord);
  };

  let searchWord = '역삼';
  const onClick = () => {
    searchWord = keyWord;
    // console.log(searchWord);
  };
  // console.log(searchWord, '?????????????????');

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyWord, (data, status, _pagination) => {
      console.log('inside useEffect', searchWord);
      if (status === kakao.maps.services.Status.OK) {
        // console.log(data);
        // console.log(status);
        // console.log(_pagination);
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [keyWord]);

  return (
    <div>
      <input value={keyWord} onChange={onChange} type="text" placeholder="장소 검색 하세요" />
      <button onClick={onClick}>검색</button>
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: '100%',
          height: '350px',
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && <div style={{ color: '#000' }}>{marker.content}</div>}
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}

PlanMap.propTypes = {
  //   records,
};
