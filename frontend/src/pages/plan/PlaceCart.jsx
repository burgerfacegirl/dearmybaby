/* eslint-disable react/prop-types */
import { apiGetPlan } from '@/commons/api/plan';
import { useState, useEffect, Fragment, useReducer } from 'react';
import { Map as KakaoMap, MapMarker, CustomOverlayMap, Polyline } from 'react-kakao-maps-sdk';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { apiGetBookmarkList } from '@/commons/api/bookmark';
import { Component } from 'react';
// import { faLocationDot } from '@fortawesome/free-regular-svg-icons';
// import { faLocationDot } from '@fortawesome/free-light-svg-icons';

// color pallete
const colorPallete = ['red', 'blue', 'green', 'yellow', 'yellowgreen', 'pink'];
// {
//   "planId": 0,
//   "planName": "string",
//   "planDestination": "string",
//   "startDate": "2023-02-13",
//   "endDate": "2023-02-13",
//   "planLatitude": "string",
//   "planLongitude": "string",
//   "planPeriod": 0,
//   "planState": 0,
//   "familyId": 0,
//   "currentDay": 0,
//   "days": [
//     {
//       "dayId": 0,
//       "dayNumber": 0,
//       "planId": 0,
//       "bookmarks": [
//         {
//           "placeOrder": 0,
//           "placeName": "string",
//           "placeLatitude": "string",
//           "placeLongitude": "string",
//           "placeAddress": "string",
//           "dayId": 0
//         }
//       ]
//     }
//   ]
// }

// 입력 받은 여행 기간을 불러와서 배열에 저장
const dummyDays = [
  {
    day: 1,
    course: [],
  },
  {
    day: 2,
    course: [],
  },
  {
    day: 3,
    course: [],
  },
];

// 여행 날 만큼 버튼 만들어주기

const dummymodalInfo = [];

const PlaceCart = (props) => {
  // const [bookmarks, setbookmarks] = useState(dummymodalInfo);

  const [days, setDays] = useState([[], [], []]);
  const [targetDayIndex, setTargetDayIndex] = useState(0);
  const [place2dayIndex] = useState(new Map());
  // 장소바구니 내용 가져오기 위한 getAPI 호출 파라미터
  const { planId } = useParams();
  // 장소 바구니에 담긴 장소들
  const [bookmarks, setbookmarks] = useState(null);

  // 여행 계획 정보 가져오기. 랜더링 될때 한번만 실행됨 setbookmarks(data)
  useEffect(() => {
    // api 요청해서 북마크 리스트를 가져오와서 bookmarks state에 저장
    apiGetBookmarkList(planId).then(({ data }) => setbookmarks(data));
    renderBookmark();
  });

  const renderBookmark = () => {
    return bookmarks.map((bookmark) => (
      // 북마크된 장소 띄우기.
      <Fragment key={`modalInfo-${bookmark.content}`}>
        {/*
          /> */}
        <CustomOverlayMap position={bookmark.position}>
          <div
            onClick={() => {
              handleMarkerClick(bookmark);
            }}
            style={{ width: '32px', height: '32px' }}
          >
            {' '}
            <FontAwesomeIcon icon={faLocationDot} size="2x" color={bookmark.color} />
          </div>
        </CustomOverlayMap>
      </Fragment>
    ));
  };

  // 마커 클릭시 모달 띄우는 스위치
  const [open, isOpen] = useState(false);
  // 모달에 들어갈 정보 state
  const [modalInfo, setModalInfo] = useState();

  let currentDay = 0;
  // 날짜를 선택 할때 마다 다른 폴리라인을 만들어야함.
  function makeHandleDay(dayIndex) {
    return () => {
      setTargetDayIndex(dayIndex);
      console.log('targetDayIndex', targetDayIndex);
    };
  }

  // 버튼 날짜 만큼 자동 생성
  const makeButton = () => {
    // return <button onClick={handleDay1}>day{i}</button>;
    return days.map((day, index) => (
      <button key={index} onClick={makeHandleDay(index)}>
        day{index + 1}
      </button>
    ));
  };

  // 마커를 클릭 했을 때 실행 되는 함수
  function handleMarkerClick(content) {
    // console.log(content);
    setModalInfo(content);
    isOpen(true);
  }

  function addToPath(modalPlace, index) {
    // setTargetDayIndex(i);
    // 장소 바구니 돌면서 이름이 같은 장소 색 바꾸기
    for (let i = 0; i < bookmarks.length; i++) {
      if (bookmarks[i].content == modalPlace.content) {
        // 만일 이미 특정 날짜에 추가되어 있다면 거기서 삭제해준다
        const prevDayIndex = place2dayIndex.get(modalPlace.content);
        if (prevDayIndex != null) {
          const day = days[prevDayIndex];
          for (let k = 0; k < day.length; k++) {
            if (day[k].content == modalPlace.content) {
              day.splice(k);
              break;
            }
          }
        }

        // 장소를 타겟 날짜에 해당하는 색으로 칠한다
        // bookmarks[i].color = colorPallete[targetDayIndex];
        bookmarks[i].color = colorPallete[index];
        console.log('days@@@@@@@@@', days);

        // 장소를 날짜에 추가한다
        days[index].push(bookmarks[i]);
        setDays([...days]);
        place2dayIndex.set(modalPlace.content, targetDayIndex);

        break;
      }
    }
  }

  // 날짜에 해당하는 장소들 리스트 보여주기
  function pushPlacePerDay() {
    // console.log(points);
    // for (let i = 0; i < bookmarks.length; i++) {
    //   for (let j = 0; j < dummyDays.length; j++) {
    //     // dummymodalInfo[i] 장소이름이, dummydays[j]. content안에있는지 확인하기
    //     console.log(dummyDays[j].course);
    //     if (
    //       !dummyDays[j].course.includes(bookmarks[i].content) &&
    //       bookmarks[i].color === color &&
    //       colorPallete[j] === color
    //     ) {
    //       // console.log('??', bookmarks[i].color);
    //       // dummydays에 push하기
    //       dummyDays[j].course.push(bookmarks[i]);
    //     }
    //   }
    // }
    // console.log(dummyDays);
    // alert('경로가 저장되었습니다.');
  }

  const createNewPlan = () => {
    // data에는
    // apiCreatePlan(data)
  };

  return (
    <div>
      <button onClick={() => console.log(bookmarks)}>panic</button>
      <KakaoMap
        center={{
          // 지도의 중심좌표 장소바구니 목록들중 중심 좌표로 들어오게 하기
          lat: 37.79,
          lng: 127.43003,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100vh',
        }}
        level={10} // 지도의 확대 레벨
      >
        {/* button 모음 메뉴 */}
        <div
          id="dayButton"
          className="daysDiv"
          style={{ position: 'absolute', left: '0vw', top: '8vh', backgroundColor: 'transparent', zIndex: '2' }}
        >
          <button onClick={() => console.log(place2dayIndex)}>panic button</button>
          <button onClick={() => alert(bookmarks.planId)}>으아아</button>
          {makeButton()}
        </div>

        {/* day별 장소 끼리 선긋는 component */}
        <Polyline
          path={days.map((day) => day.map((place) => place.position))}
          strokeWeight={5} // 선의 두께 입니다
          strokeColor={'#FFAE00'} // 선의 색깔입니다
          strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={'solid'} // 선의 스타일입니다
        />

        {/* 장소바구니에 담긴 장소들 마커로 찍기 */}
      </KakaoMap>
      <div style={{ position: 'absolute', right: '0vw', bottom: '2vh', backgroundColor: 'transparent', zIndex: '2' }}>
        <button onClick={pushPlacePerDay}>경로 추가</button>
        {/* 이어진 경로가 있는 상태에서 경로 추가 누르면 선 안 없어지고 냅두기, 경로가 추가되지 않은 상태에서 다른날 누르면 이어진선 사라지게하기 */}
        <Link to={'/'}>
          <button onClick={createNewPlan}>계획 완료하기</button>
        </Link>
      </div>
    </div>
  );
};
export default PlaceCart;
