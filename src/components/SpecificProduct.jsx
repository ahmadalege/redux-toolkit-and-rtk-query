import { useGetproductsByIdQuery } from "../app/service/dummyData";

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetproductsByIdQuery(12);
  return (
    <div>
      {isError && <h1> Error</h1>}
      {isLoading && <h1> Loading...</h1>}
      {data && (
        <>
          <h1>{data.brand}</h1>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </>
      )}
    </div>
  );
};

export default SpecificProduct;
