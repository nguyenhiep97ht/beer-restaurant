import { Button } from "antd";
import { Link } from "react-router-dom";

export default function BeerRestaurantHome() {
  return (
    <div className="w-full h-100 flex justify-center items-center">
      <div className="m-auto flex justify-center items-center">
        <div className="guess-btn">
          <Link to="/guess">
            <div
              // type="default"
              // ghost
              // danger
              // size="large"
              style={{
                backgroundImage: 'url("/src/assets/hero.jpg")',
                height: "calc(50vh)",
                width: "calc(100vw - 20px)",
                backgroundPosition: "center" /* Center the image */,
                backgroundRepeat: "no-repeat" /* Do not repeat the image */,
                backgroundSize: "cover",
              }}
              className="flex items-center justify-end"
            >
              <p style={{ fontSize: "80px", color: "yellow" }}>Dự đoán ngay</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
