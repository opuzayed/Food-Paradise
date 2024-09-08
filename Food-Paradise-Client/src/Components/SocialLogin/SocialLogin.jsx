import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import googleIcon from "../../assets/icon/googleicon.png";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = ({btnText}) => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email : result.user?.email,
        name : result.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
        console.log(res.data)
      })
    });
    navigate(from, { replace: true });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full btn-outline btn-success font-bold"
        >
          <img src={googleIcon} alt="Google Icon" className="w-6 h-6"/>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
