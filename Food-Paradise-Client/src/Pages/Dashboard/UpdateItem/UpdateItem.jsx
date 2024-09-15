import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaUtensils } from "react-icons/fa";
import { useRef, useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, image: existingImageUrl, _id } = useLoaderData();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const [currentImage, setCurrentImage] = useState(existingImageUrl);
  const imageInputRef = useRef(null);

  const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);

    let imageUrl = currentImage;
    console.log("Current Image:", currentImage);

    if (data.image && data.image.length > 0) {
      console.log("New image selected, uploading...");
      const imageFile = new FormData();
      imageFile.append("image", data.image[0]);

      try {
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });

        if (res.data.success) {
          console.log("Image uploaded successfully", res.data);
          imageUrl = res.data.data.display_url;
        } else {
          console.error("Image upload failed", res.data);
          Swal.fire("Image upload failed", "Please try again", "error");
          return;
        }
      } catch (error) {
        console.error("Error during image upload", error);
        Swal.fire("Image upload failed", "Please try again", "error");
        return;
      }
    } else {
      console.log("No new image selected, using existing image");
    }

    const menuItem = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
      image: imageUrl,
    };

    console.log("Sending updated menu item data:", menuItem);

    try {
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log("Menu update response:", menuRes.data);

      if (menuRes.data.modifiedCount > 0) {
        reset({
          name: '',
          category: '',
          price: '',
          recipe: '',
          image: null,
        });

        if (imageInputRef.current) {
          imageInputRef.current.value = "";
        }
        setCurrentImage(null);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is Updated Successfully to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire("No changes made", "Please modify the fields before submitting", "info");
      }
    } catch (error) {
      console.error("Error during menu update", error);
      Swal.fire("Update failed", "Please try again", "error");
    }
  };

  return (
    <div>
      <SectionTitle heading={"Update an Item"} subHeading={"Refresh-info"}></SectionTitle>
      <div className="mx-20">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-orange-100 p-6 rounded-lg shadow-lg">
          {/* Recipe Name */}
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-sky-800 font-medium">Recipe Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              {...register("name", { required: "Recipe Name is required" })}
              placeholder="Recipe Name"
              className={`input input-bordered w-full ${errors.name ? 'border-red-500' : 'bg-gray-700'} text-white`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Category and Price */}
          <div className="flex gap-6 mb-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-sky-800 font-medium">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: "Category is required" })}
                className={`select select-bordered w-full ${errors.category ? 'border-red-500' : 'bg-gray-700'} text-white`}
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
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-sky-800 font-medium">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                {...register("price", { required: "Price is required" })}
                placeholder="Price"
                className={`input input-bordered w-full ${errors.price ? 'border-red-500' : 'bg-gray-700'} text-white`}
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
              )}
            </div>
          </div>

          {/* Recipe Details */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sky-800 font-medium">Recipe Details*</span>
            </label>
            <textarea
              className={`textarea textarea-bordered h-24 ${errors.recipe ? 'border-red-500' : 'bg-gray-700'} text-white`}
              placeholder="Recipe Details"
              defaultValue={recipe}
              {...register("recipe", { required: "Recipe Details are required" })}
            ></textarea>
            {errors.recipe && (
              <p className="text-red-500 text-sm mt-1">{errors.recipe.message}</p>
            )}
          </div>

          {/* Current Image */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sky-800 font-medium">Current Image</span>
            </label>
            {currentImage ? (
              <img src={currentImage} alt="Current menu item" className="w-24 h-24 mb-4" />
            ) : (
              <p className="text-gray-500">No image selected</p>
            )}
            <input
              type="file"
              {...register("image")}
              className="file-input w-full max-w-xs bg-gray-700 text-white"
              ref={imageInputRef}
            />
          </div>

          {/* Submit Button */}
          <button className="btn btn-outline btn-accent w-full font-bold">
            UPDATE MENU ITEM <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
