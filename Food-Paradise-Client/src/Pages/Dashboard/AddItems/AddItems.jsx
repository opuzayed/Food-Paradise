import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // Upload image to imgbb and then get a URL
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "content-type": "multipart/form-data" }
    });
    if (res.data.success) {
      // Send menu item data to the server with the image URL
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      };
      const menuRes = await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        // Show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added successfully to the menu`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log(res.data);
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-16">
      <SectionTitle heading={"Add an Item"} subHeading={"What's New"} />
      <div className="mx-4 md:mx-10 lg:mx-20">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-orange-100 p-8 rounded-lg shadow-md">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-sky-800 font-medium">Recipe Name*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Recipe Name is required" })}
              placeholder="Recipe Name"
              className={`input input-bordered w-full ${errors.name ? 'border-red-500' : 'bg-gray-700 text-white'}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="flex gap-6 mb-4">
            {/* Category */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-sky-800 font-medium">Category*</span>
              </label>
              <select
                defaultValue=""
                {...register("category", { required: "Category is required" })}
                className={`select select-bordered w-full ${errors.category ? 'border-red-500' : 'bg-gray-700 text-white'}`}
              >
                <option value="" disabled>Select a Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
              )}
            </div>

            {/* Price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-sky-800 font-medium">Price*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: "Price is required" })}
                placeholder="Price"
                className={`input input-bordered w-full ${errors.price ? 'border-red-500' : 'bg-gray-700 text-white'}`}
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
              )}
            </div>
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sky-800 font-medium">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: "Recipe Details are required" })}
              placeholder="Recipe Details"
              className={`textarea textarea-bordered h-24 ${errors.recipe ? 'border-red-500' : 'bg-gray-700 text-white'}`}
            ></textarea>
            {errors.recipe && (
              <p className="text-red-500 text-sm mt-1">{errors.recipe.message}</p>
            )}
          </div>

          <div className="form-control mb-4">
            <input
              type="file"
              {...register("image", { required: "Image is required" })}
              className={`file-input w-full max-w-xs ${errors.image ? 'border-red-500' : 'bg-gray-700 text-white'}`}
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
            )}
          </div>

          <button className="btn btn-outline btn-accent w-full font-bold">
            ADD ITEMS <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
