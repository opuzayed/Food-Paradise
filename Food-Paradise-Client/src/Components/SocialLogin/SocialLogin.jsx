import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

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
          <FaGoogle></FaGoogle>
          {btnText}
          {/* Sign up with Google */}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
