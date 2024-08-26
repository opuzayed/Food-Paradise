import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => { 

      const captchaRef = useRef(null);
      const [disabled, setDisabled] = useState(true);
      const {signIn} = useContext(AuthContext);

      useEffect(()=>{
        loadCaptchaEnginge(6); 
      }, []);
      
        const handleLogin = event => {
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          signIn(email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
          })
        }

        const handleValidateCaptcha = () => {
          const user_captcha_value = captchaRef.current.value;
          if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
          }
          else{
            setDisabled(true);
          }
        }

  return (
    <div className="hero min-h-screen flex items-center justify-center">
      <div className="hero-content flex flex-col items-center text-center w-full max-w-md md:shadow-2xl md:shadow-slate-700">
        <div>
          <h1 className="text-5xl font-bold">Login Here</h1>
        </div>
        <div className="card w-full">
          <form onSubmit={handleLogin} className="card-body text-left">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="type email"
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
                name="password"
                placeholder="type password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                placeholder="type captcha above"
                className="input input-bordered"
                ref={captchaRef}
                required
              />
              <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-3">Validate</button>
            </div>

            <div className="form-control mt-6 w-full">
              <input
                type="submit"
                value="Login"
                disabled={disabled}
                className="btn btn-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-700 hover:to-green-700 text-white md:font-extrabold rounded-md w-full cursor-pointer md:text-2xl"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
