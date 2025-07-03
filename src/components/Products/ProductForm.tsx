import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/Input";
import useStoreProfile from "../../store/slices/userProfile";
import useCreateProduct from "../../hooks/product/useCreateProduct";
import type { ProductFormData } from "../../store/types";

const ProductForm: React.FC = ({ setOpenDrawer }) => {
  const { user } = useStoreProfile((state) => state.myProfile);
  const { createProduct, loading } = useCreateProduct();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>();

  const onSubmit = (data: ProductFormData) => {
    console.log(JSON.stringify(data, null, 2));
    createProduct({ ...data, user_id: user?._id }, setOpenDrawer);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mx-auto p-3 bg-white rounded-xl grid grid-cols-2 gap-6"
    >
      <div>
        <label className="block mb-1 font-medium">Title</label>
        <Input
          type="text"
          {...register("title", { required: true, minLength: 3 })}
          className="w-full border border-gray-300 p-3 rounded"
          placeholder="Title of the product"
        />
        {errors.title && (
          <span className="text-red-500 text-sm">
            Title is required (min 3 chars).
          </span>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Category</label>
        <Input
          type="text"
          {...register("category")}
          className="w-full border border-gray-300 p-3 rounded"
          placeholder="Category of the product"
        />
      </div>

      <div className="col-span-2">
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          {...register("description")}
          className="w-full border border-gray-300 p-3 rounded h-24"
          placeholder="Description of the product"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Image URL</label>
        <Input
          type="text"
          {...register("imageUrl", { required: true })}
          className="w-full border border-gray-300 p-3 rounded"
          placeholder="Image URL of the product"
        />
        {errors.imageUrl && (
          <span className="text-red-500 text-sm">Image URL is required.</span>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Price</label>
        <Input
          type="number"
          {...register("price", { required: true })}
          className="w-full border border-gray-300 p-3 rounded"
          placeholder="Price of the product"
        />
        {errors.price && (
          <span className="text-red-500 text-sm">Price is required.</span>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Rating</label>
        <Input
          type="number"
          step={0.1}
          min={0}
          max={5}
          {...register("rating")}
          className="w-full border border-gray-300 p-3 rounded"
          placeholder="Rating of the product"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Discount (%)</label>
        <Input
          type="number"
          {...register("discount")}
          className="w-full border border-gray-300 p-3 rounded"
          placeholder="Discount of the product"
          min={1}
          max={100}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Stock</label>
        <Input
          type="number"
          {...register("stock")}
          className="w-full border border-gray-300 p-3 rounded"
          placeholder="Stock of the product"
        />
      </div>

      <div className="col-span-2 text-right">
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-900"
          disabled={loading}
        >
          {loading ? "Please wait.." : "Add Product"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
