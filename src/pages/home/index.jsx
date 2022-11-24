import { Button } from "antd";
import { Link } from "react-router-dom";

export default function BeerRestaurantHome() {
  return (
    <div className="w-full h-100 flex justify-center items-center">
      <div className="m-auto flex justify-center items-center">
        <div className="guess-btn">
          <Link to="/guess">
            <Button type="default" ghost danger size="large">
              Dự đoán ngay
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
