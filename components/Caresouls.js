import { Carousel } from "antd";

const Caresouls = () => {
  return (
    <div>
      <Carousel autopla className="py-4">
        <div className="">
          {/* <h3 style={contentStyle}>1</h3> */}
          <img
            src="https://plus.unsplash.com/premium_photo-1674343963928-d67007d2ae74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="h-80 w-full"
          />
        </div>
        <div>
          {/* <h3 style={contentStyle}>
           
          </h3> */}
          <img
            src="https://images.unsplash.com/photo-1680011200206-1dd6726e8f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="h-80 w-full"
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1669828435636-bef2574fb48d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="h-80 w-full"
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1678962944079-5d3655ffc34a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="h-80 w-full"
          />
        </div>
      </Carousel>
      );
    </div>
  );
};

export default Caresouls;
