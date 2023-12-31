import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogIn from "../../socialLogin/SocialLogIn";

const Register = () => {

const [registerError, setRegisterError] = useState('')
const [success, setSuccess] = useState('');
const {createUser} = useContext(AuthContext);

const location = useLocation();
const navigate = useNavigate();


const from = location.state?.from?.pathname || "/";



  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess('');

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photoURL = form.photoURL.value;

    console.log(name, email, password, confirm, photoURL)

    createUser(email, password)
    .then(result => {
        const user = result.user;
       
        setRegisterError('')
        form.reset();
        setSuccess('Registration Successfull, Welcome to explore K3');
        navigate(from, {replace: true})
        updateUserData(result.user, name, photoURL)
        console.log(user)

    })
    .catch(error => {
      console.error(error.message)
      setRegisterError(error.message);
      setSuccess('');
    })
  };

  const updateUserData = (user, name, photoURL) => {
    updateProfile(user,  {
      displayName: name, photoURL: photoURL,
    })
    .then(()=>{
      console.log('user name updated')
    })
    .catch(error => {
      setRegisterError(error.message);
    })
  }
  return (
    <div>
      <>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            borderRadius: "1.6%",
            margin: "2rem",
            width: "95%",
          }}
        >
          <div className="hero-content flex-col w-full">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-slate-800">
                Welcome to <br /> <br />{" "}
                <span className="text-success"> Ki</span>nder{" "}
                <span className="text-success"> Ki</span>ds{" "}
                <span className="text-success"> Ki</span>ngdom
                <br />
                Registration!!!
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleRegister}>
                {/* Nane Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name Please"
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/* Email Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/* Password */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      className="input input-bordered"
                      required
                    />
                    
                  </div>
                  {/* Confirm Password */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Your Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="retype password"
                      name="confirm"
                      className="input input-bordered"
                      required
                    />
                    
                  </div>
                  {/* Photo Url */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Put Your Photo URL</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Put Your Photo URL Here"
                      name="photoURL"
                      className="input input-bordered"
                      
                    />
                    
                  </div>

{/* // RegisterError Message */}

<p className="text-warning pt-2"><small>{registerError}</small></p>
<p className="text-success pt-2"><small>{success}</small></p>



                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                  </div>
                </form>
                <p>
                  <span className="text-success">
                    <small>Already Have an Account?</small>
                  </span>{" "}
                  <Link className="text-warning" to="/login">
                    Please LogIn
                  </Link>{" "}
                </p>

                <SocialLogIn></SocialLogIn>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Register;
