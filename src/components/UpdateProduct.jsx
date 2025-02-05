import e from "express";
import { useUpdateProductMutation } from "../app/service/dummyData";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();

  if (error) {
    <h1>{error}</h1>;
  }
  if (isLoading) {
    <h1>Loading...</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = { title: "updated product" };

      await updateProduct({
        id: productID,
        updatedProduct: updatedProductData,
      });
    } catch (err) {
      console.error("Error updating product", err);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update product
      </button>
    </div>
  );
};

export default UpdateProduct;
