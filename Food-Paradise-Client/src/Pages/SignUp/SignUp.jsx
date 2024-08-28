import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {createUser} = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
    });
    
  };

  return (
    <>
    <Helmet>
      <title>Food-Pradise | SignUp</title>
    </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-base-200">
        <div className="w-full max-w-md px-6 py-8 bg-base-100 md:shadow-2xl md:shadow-slate-700 rounded-lg">
          <div className="mb-4 text-center">
            <h1 className="text-4xl font-bold">SignUp Here</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type your name"
                {...register("name")}
                name="name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                {...register("email", { required: true })}
                className="input input-bordered w-full"
                required
              />
              {errors.email && (
                <span className="text-red-500 mt-1">
                  Email Address is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 10,
                  pattern:
                    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                })}
                className="input input-bordered w-full mb-2"
                required
                
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 mt-1">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 mt-1">
                  Password must be six characters or more
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500 mt-1">
                  Password should not exceed ten characters{" "}
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 mt-1">
                  Password contain at least one uppercase letter, one lowercase
                  letter one number and one special character{" "}
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="SignUp"
                className="btn btn-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-700 hover:to-green-700 text-white font-bold rounded-md w-full cursor-pointer"
              />
            </div>
            <p className="text-center">
              <small>
                Already have an Account?
                <Link to="/login" className="font-bold text-green-500">
                  {" "}
                  Go to Login{" "}
                </Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
