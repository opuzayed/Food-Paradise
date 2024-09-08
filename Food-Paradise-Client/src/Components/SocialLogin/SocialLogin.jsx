import { FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
        <div className="divider">OR</div>
      <div>
        <button className="btn w-full btn-outline btn-success">
          <FaGoogle></FaGoogle>
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
