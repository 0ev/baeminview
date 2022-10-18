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

  const shopNo = url.split("/").pop();

  const tmp = await fetch(`http://143.244.129.185/shop/${shopNo}`);

  const res = await tmp.json();

  const pageComponentProps = res;
  return {
    props: {
      pageComponentProps,
    },
  };
}
