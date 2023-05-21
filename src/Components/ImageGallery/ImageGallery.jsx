import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ImageGallery = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://kinder-kids-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div
      className="bg-gray-800 my-24 rounded-lg "
      style={{
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      
  <h2 className="text-4xl font-bold mt-16">Kinder Kids Categorized Toys</h2>
  <p className="py-4 px-16 text-teal-600">
    Explore a wide range of carefully categorized toys at Kinder Kids. We offer a diverse collection of toys designed to entertain and educate children of all ages. Whether you are looking for interactive puzzles, imaginative playsets, or educational games, we have something for everyone. Our toys are crafted with high-quality materials, ensuring durability and safety. Let your childs imagination soar as they dive into the world of play and discovery. Discover the joy of Kinder Kids categorized toys and create memorable moments of fun and learning for your little ones.
  </p>

      <div>
        <div className="carousel w-50%">
          <div id="slide1" className="carousel-item relative w-full ">
            <img
              style={{ height: "70vh", padding: "2rem" }}
              src="https://images.unsplash.com/photo-1517686748843-bb360cfc62b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              className="w-full rounded-xl"
            />
            <div className="absolute flex justify-end gap-7 me-16 transform -translate-y-1/2 right-5 bottom-10">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute flex flex-col gap-7 left-10 top-40 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg ps-4 py-4 ">
            <h2 className="text-5xl font-bold">Arts And Craft Toys</h2>
  <p className="w-full text-left text-slate-200">
    Unleash your childs creativity with our wide selection of Arts and Craft Toys. From painting sets to DIY craft kits, we offer a range of hands-on activities that inspire imagination and artistic expression. Watch as your little one explores different colors, textures, and materials to create unique masterpieces. Our Arts and Craft Toys encourage fine motor skills, problem-solving, and cognitive development, making them both fun and educational. Whether your child is a budding artist or simply loves to explore their creative side, our Arts and Craft Toys are sure to provide hours of entertainment and learning.
  </p>
              <div className="flex gap-7 ms-7">
                <Link to="/alltoys">
                  <button>View All Toys</button>
                </Link>
                <Link to="/">
                  <button>Go Home</button>
                </Link>
              </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              style={{ height: "70vh", padding: "2rem" }}
              src="https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              className="w-full"
            />
            <div className="absolute flex justify-end gap-7 me-16 transform -translate-y-1/2 left-5 right-5 bottom-10">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute flex flex-col gap-7 left-10 top-40 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg ps-4 py-4">
              <h2 className="text-5xl font-bold">Science & Exploration Toys</h2>
              <p className="w-1/2 text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore suscipit laboriosam recusandae quod iusto vero eaque
                ducimus at in tenetur eum quae, ad accusamus esse velit, odit
                sint delectus officia?
              </p>
              <div className="flex gap-7 ms-7">
                <Link to="/alltoys">
                  <button>View All Toys</button>
                </Link>
                <Link to="/">
                  <button>Go Home</button>
                </Link>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              style={{ height: "70vh", padding: "2rem" }}
              src="https://images.unsplash.com/photo-1532789339108-2ebc484efbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="w-full"
            />
            <div className="absolute flex justify-end gap-7 me-16 transform -translate-y-1/2 left-5 right-5 bottom-10">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute flex flex-col gap-7 left-10 top-40 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg ps-4 py-4">
              <h2 className="text-5xl font-bold">Books & Readings</h2>
              <p className="w-1/2 text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore suscipit laboriosam recusandae quod iusto vero eaque
                ducimus at in tenetur eum quae, ad accusamus esse velit, odit
                sint delectus officia?
              </p>
              <div className="flex gap-7 ms-7">
                <Link to="/alltoys">
                  <button>View All Toys</button>
                </Link>
                <Link to="/">
                  <button>Go Home</button>
                </Link>
              </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              style={{ height: "70vh", padding: "2rem" }}
              src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="w-full"
            />
            <div className="absolute flex justify-end gap-7 me-16 transform -translate-y-1/2 left-5 right-5 bottom-10">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute flex flex-col gap-7 left-10 top-40 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg ps-4 py-4">
              <h2 className="text-5xl font-bold">Crafts Kits</h2>
              <p className="w-1/2 text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore suscipit laboriosam recusandae quod iusto vero eaque
                ducimus at in tenetur eum quae, ad accusamus esse velit, odit
                sint delectus officia?
              </p>
              <div className="flex gap-7 ms-7">
                <Link to="/alltoys">
                  <button>View All Toys</button>
                </Link>
                <Link to="/">
                  <button>Go Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-7 py-8 mb-8">
        {categories.map((category) => (
          <Link to={`/categories/${category.id}`} key={category.id}>
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
