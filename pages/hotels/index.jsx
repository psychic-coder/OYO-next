import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";

const Hotels = ({ hotels }) => {
  return (
    <>
      <Header1 />
      {<div className="mt-8"></div>}

      <Hotel />
      <Hotel />
      <Hotel />
    </>
  );
};

export async function getServerSideProps(ctx) {
  // ctx is used to get hold of the query
  console.log(ctx.query);
  const res = await fetch(
    `http://localhost:3000/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      hotels: data,
    },
  };
}

export default Hotels;
