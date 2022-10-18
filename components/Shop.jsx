import React from "react";
import Menus from "./Menus";
const Shop = ({ data }) => {
  if (data.status != "SUCCESS") {
    return <div>unable to find shop</div>;
  }
  return (
    <div>
      <h1>{data.data.shop_info.Shop_Nm}</h1>
      <h2>주소: {data.data.shop_info.Addr}</h2>
      <h2>전화번호: {data.data.shop_info.Tel_No}</h2>
      <h2>리뷰 개수: {data.data.shop_info.Review_Cnt}</h2>
      <h2>별점: {data.data.shop_info.Star_Pnt_Avg}/5</h2>
      <Menus data={data.data.shop_menu} />
    </div>
  );
};

export default Shop;
