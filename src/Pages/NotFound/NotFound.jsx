import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"><span>404</span></h1>
            <p className="mb-5 text-3xl">
              Opps Something Wrong Page Not Found
            </p>
            <Link to='/' className="btn btn-primary">Go Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
