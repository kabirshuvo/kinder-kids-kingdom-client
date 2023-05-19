import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SocialLogIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handlesignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handlesignInWithGoogle}
          className="btn btn-circle btn-outline"
        >
          G
        </button>
      </div>
      <div className="divider">LogIn With Google</div>
    </div>
  );
};

export default SocialLogIn;
