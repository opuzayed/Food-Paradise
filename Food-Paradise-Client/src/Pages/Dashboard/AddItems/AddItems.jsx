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
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Reciepe Name*</span>
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Reciepe Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <select
            {...register("category")}
            className="select select-bordered w-full max-w-xs"
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
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
