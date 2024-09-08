import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import googleIcon from "../../assets/icon/googleicon.png";
const SocialLogin = ({btnText}) => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
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
          {/* Sign up with Google */}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
