import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"what's new"}
      ></SectionTitle>
      <div className="mx-20">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-orange-100">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-sky-800 font-medium">Reciepe Name*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true})}
              placeholder="Recipe Name"
              className="input input-bordered w-full bg-gray-700 text-white"
            />
          </div>
          <div className="flex gap-6 mb-4">
            {/* category */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-sky-800 font-medium">Category*</span>
              </label>
              <select defaultValue="default"
                {...register("category", { required: true})}
                className="select select-bordered w-full bg-gray-700 text-white"
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-sky-800 font-medium">Price*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true})}
                placeholder="price"
                className="input input-bordered w-full bg-gray-700 text-white"
              />
            </div>
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sky-800 font-medium">Recipe Details*</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 bg-gray-700 text-white"
              placeholder="Recipe Details"
              {...register("recipe", { required: true})}
            ></textarea>
          </div>
          <div className="form-control mb-4">
          <input type="file" {...register("image", { required: true})} className="file-input w-full max-w-xs bg-gray-700 text-white" />
          </div>
          <button className="btn btn-outline btn-accent w-full font-bold">ADD ITEMS <FaUtensils></FaUtensils></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
