import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import './Home.css'
const RecommendFoodDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const foodId = params.get('food-id');

  const [foodList, placeList] = useOutletContext();

  let food = null;
  for (let i = 0; i < foodList.length; i++) {
    if (foodList[i].id == foodId) {
      food = foodList[i];
      console.log(food);
    }
  }
  const restaurant = food

  const goToPlan = (e) => {
    alert('이 장소를 장소바구니에 추가해주면서 계획을짜는 페이지로 넘어가게 하고 싶은데 어케 데이터를 주고 받을지 모르겠음');
    navigate(`../../plan`)
  }


  return (
    <div className='detail-frame'>

      <div className='detail-head'>
        <h2>{restaurant.name}</h2>
        <div className='detail-headsub'>
          <p>{restaurant.catagory}</p>
          <a className='detail-head-add' onClick={() => goToPlan(restaurant)}>장소바구니에 담기</a>
        </div>
      </div>
      <div className='detail-img-frame'>
        <img className='detail-img' src={restaurant.imgUrl} style={{ width: '90%', display: 'flex', flexDirection: 'column' }} />
      </div>
      <hr />
      <div className='detail-outline'>
        <p>{restaurant.outline}</p>
      </div>

      <div >
        <div className='detail-subinfo1'>
          <p>{restaurant.workingTime}</p>
          <p>{restaurant.phoneNumber}</p>
        </div>
        <div className='detail-subinfo2'>
          <p>  {restaurant.parkingLot}</p>
          <p>{restaurant.closedDay}</p>
        </div>
      </div>

      {/* <p>{foodId}</p> */}
      {/* <p>{[food]}</p> */}
      {/* <p>{food != null && JSON.stringify(food)}</p> */}
    </div>
  );
};
export default RecommendFoodDetail;
