const Login = () => {
  return (
    <div className="hero min-h-screen flex items-center justify-center">
      <div className="hero-content flex flex-col items-center text-center w-full max-w-md md:shadow-2xl md:shadow-slate-700">
        <div>
          <h1 className="text-5xl font-bold">Login Here</h1>
        </div>
        <div className="card w-full">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6 w-full">
              <input
                type="submit"
                value="Login"
                className="btn btn-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-700 hover:to-green-700 text-white font-extrabold rounded-md w-full cursor-pointer text-2xl"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
