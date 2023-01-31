import PlanMap from './PlanMap';

export default function FindCity() {
  const dummyPlace = [
    {
      dayCount: 1,
      placeType: 0,
      lat: 37.4977288,
      lng: 127.0448612,
    },
  ];
  return (
    <div>
      <div className="search">
        <form action="#">
          <input type="text" placeholder="장소를 검색하세요" />
        </form>
      </div>
      <p>map component 자리</p>
      <PlanMap dummyPlace={dummyPlace} />

      <button>장소바구니 보러가기</button>
    </div>
  );
}
