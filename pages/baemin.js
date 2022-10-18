import axios from "axios";
import Shop from "../components/Shop";

export default function baeminPage({ pageComponentProps }) {
  return (
    <div>
      <Shop data={pageComponentProps} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  console.log(ctx);
  const url = ctx.query?.url;
  if (!url) {
    return {
      props: {
        pageComponentProps: {
          status: "FAIL",
        },
      },
    };
  }

  console.log(url);

  // const temp = await fetch(url, {
  //   redirect: "manual",
  // });
  // const shopNo = temp.headers
  //   .get("location")
  //   .split("shopDetail_shopNo=")[1]
  //   .split("&")[0];

  const shopNo = 13711170;

  console.log(shopNo);

  const res = await axios.get(
    `https://shopdp-api.baemin.com/v8/shop/${shopNo}/detail`,
    {
      params: {
        lat: "37.46907588",
        lng: "126.93691645",
      },
      headers: {
        "User-Agent": "and1_10.27.1",
        Carrier: "45005",
        "Device-Height": "1600",
        "Device-Width": "900",
      },
    }
  );

  console.log(res);
  const pageComponentProps = res.data;
  return {
    props: {
      pageComponentProps,
    },
  };
}
