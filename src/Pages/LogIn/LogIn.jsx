import { Link } from "react-router-dom";

const LogIn = () => {
  const handleLogIn = (event) => {
    event.preventDefault();
  };

  return (
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
          <>Welcome to</> <br /> <br /><span className="text-success"> Ki</span>nder{" "}
              <span className="text-success"> Ki</span>ds{" "}
              <span className="text-success"> Ki</span>ngdom 
              <br />
              LogIn
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogIn}>
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
                  {/* <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label> */}
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p>
                <span className="text-success"><small>New User</small></span>{" "}
                <Link className="text-warning" to="/register">
                  Registration
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
