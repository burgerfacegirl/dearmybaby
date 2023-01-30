export default function FindCity() {
  return (
    <div>
      <div className="search">
        <form action="#">
          <input type="text" placeholder="장소를 검색하세요" />
        </form>
      </div>
      <p>map component 자리</p>
      <div>
        <p> 여행 장소 이미지</p>
        <p> 여행 장소</p>
        <p>여행 장소 설명</p>
        <button>detail</button>
        <button>장소 바구니 담기</button>
      </div>
    </div>
  );
}
