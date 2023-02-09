import { useLocation } from 'react-router-dom';

const RecommendFoodDetail = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h2>RecommendFoodDetail</h2>
    </div>
  );
};
export default RecommendFoodDetail;
