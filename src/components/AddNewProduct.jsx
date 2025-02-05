import { useAddNewProductMutation } from "../app/service/dummyData";

const AddNewProduct = () => {
  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();

  if (error) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 11,
        title: "Dior shirt",
        description: "Best shirt in the market right now",
        brand: "Dior Shirt",
      };

      await addNewProduct(newProductData);
    } catch (err) {
      console.error("Error adding new product:", err);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>

      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};

export default AddNewProduct;
