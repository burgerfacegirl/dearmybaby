const SelectPlace = () => {
  return (
    <div>
      <h2>여행하실 지역을 선택해주세요</h2>
      <form action="#" className="regionButtons">
        {/* onclick 해당 도시를 검색어로 입력 해서 그 도시 지도를 가지고 오는 함수 짜기 */}
        <button>부산</button>
        <button>제주</button>
        <button>인천</button>
        <button>대구</button>
        <button>울산</button>
      </form>
    </div>
  );
};
export default SelectPlace;
