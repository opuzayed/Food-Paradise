import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => { 
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    console.log("state in the location", location.state);

    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire("User Login Successfull");
            });
            navigate(from, { replace: true });
    };

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target .value;
       
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false); 
        } else {
            setDisabled(true); 
        }
    };

    return (
        <>
            <Helmet>
                <title>Food-Paradise | Login</title>
            </Helmet>
            <div className="flex items-center justify-center h-screen bg-base-200">
                <div className="w-full max-w-md bg-base-100 md:shadow-2xl md:shadow-slate-700 rounded-lg">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold pt-2">Login Here</h1>
                    </div>
                    <div className="card w-full">
                        <form onSubmit={handleLogin} className="card-body text-left p-4">
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
                                    required
                                    onBlur={handleValidateCaptcha} 
                                />
                            </div>

                            <div className="form-control mt-2 w-full">
                                <input
                                    type="submit"
                                    value="Login"
                                    disabled={disabled}
                                    className="btn btn-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-700 hover:to-green-700 text-white md:font-extrabold rounded-md w-full cursor-pointer md:text-2xl"
                                />
                            </div>
                            <SocialLogin btnText={"Continue with Google"}></SocialLogin>
                            <p className='text-center'>
                                <small>New Here?<Link to="/signup" className='font-bold text-green-500'> Create a New Account</Link></small>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
