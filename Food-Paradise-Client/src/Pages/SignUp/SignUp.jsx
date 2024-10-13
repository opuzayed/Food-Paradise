import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            });
            navigate("/");
          })
          .catch((error) => console.log("error", error));
      })
      .catch((error) =>
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "User Already Exists. Try Another",
          showConfirmButton: false,
          timer: 1500,
        })
      );
  };

  return (
    <>
      <Helmet>
        <title>Food-Paradise | SignUp</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen py-20 px-4 md:px-0">
        <div className="w-full max-w-md shadow-2xl rounded-lg py-6 px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold pt-2">SignUp Here</h1>
          </div>
          <div className="card w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body text-left p-0">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type your name"
                  {...register("name")}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="photoURL"
                  {...register("photoURL")}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input input-bordered w-full"
                  required
                />
                {errors.email && (
                  <span className="text-red-500 mt-1">Email Address is required</span>
                )}
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 10,
                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                  })}
                  className="input input-bordered w-full"
                  required
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 mt-1">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 mt-1">
                    Password must be at least 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500 mt-1">
                    Password should not exceed 10 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 mt-1">
                    Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="SignUp"
                  className="btn bg-green-500 text-white font-bold w-full hover:bg-green-500"
                />
              </div>
            </form>

            <SocialLogin btnText="Sign up with Google" />
            <p className="text-center mt-4">
              <small>
                Already have an Account?{" "}
                <Link to="/login" className="font-bold text-green-500">
                  Go to Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
