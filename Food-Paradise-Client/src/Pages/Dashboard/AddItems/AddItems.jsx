import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

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
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Reciepe Name*</span>
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Reciepe Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6"> 
            {/* category */}
            <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
            {...register("category")}
            className="select select-bordered w-full"
          >
            <option disabled selected>
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
            <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              {...register("price")}
              placeholder="price"
              className="input input-bordered w-full"
            />
          </div>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
