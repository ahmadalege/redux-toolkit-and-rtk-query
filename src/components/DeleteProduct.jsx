import { useDeleteProductMutation } from "../app/service/dummyData";

const DeleteProduct = ({ productId }) => {
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();

  if (error) {
    <h1>{error}</h1>;
  }
  if (isLoading) {
    <h1>Loading...</h1>;
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    } catch (err) {
      console.error("Error deleting product", err);
    }
  };
  return (
    <div>
      <h1>{data?.title ? `${data.title} successfully deleted` : ""}</h1>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete product
      </button>
    </div>
  );
};

export default DeleteProduct;
