const ImageGallery = () => {
  return (
    <div className="bg-gray-800 my-7 rounded-lg "
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2 className="text-3xl font-bold mb-5 pb-5">View Categoriesed Toys</h2>
      <div>
        <div className="carousel w-50%">
          <div id="slide1" className="carousel-item relative w-full ">
            <img
              style={{ height: "70vh", padding: "2rem"}}
              src="https://images.unsplash.com/photo-1555448049-f8657e9fc8f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
              <h2 className="text-5xl font-bold">Kinder Kids KingDom</h2>
              <p className="w-1/2 text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore suscipit laboriosam recusandae quod iusto vero eaque ducimus at in tenetur eum quae, ad accusamus esse velit, odit sint delectus officia?</p>
              <div className="flex gap-7 ms-7">
              <button>View M Toys</button>
              <button>Go to Toys</button>
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
              <h2 className="text-5xl font-bold">Kinder Kids KingDom</h2>
              <p className="w-1/2 text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore suscipit laboriosam recusandae quod iusto vero eaque ducimus at in tenetur eum quae, ad accusamus esse velit, odit sint delectus officia?</p>
              <div className="flex gap-7 ms-7">
              <button>View M Toys</button>
              <button>Go to Toys</button>
            </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              style={{ height: "70vh", padding: "2rem" }}
              src="https://images.unsplash.com/photo-1517686748843-bb360cfc62b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
              <h2 className="text-5xl font-bold">Kinder Kids KingDom</h2>
              <p className="w-1/2 text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore suscipit laboriosam recusandae quod iusto vero eaque ducimus at in tenetur eum quae, ad accusamus esse velit, odit sint delectus officia?</p>
              <div className="flex gap-7 ms-7">
              <button>View M Toys</button>
              <button>Go to Toys</button>
            </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              style={{ height: "70vh", padding: "2rem" }}
              src="https://images.unsplash.com/photo-1489367874814-f5d040621dd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80"
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
              <h2 className="text-5xl font-bold">Kinder Kids KingDom</h2>
              <p className="w-1/2 text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore suscipit laboriosam recusandae quod iusto vero eaque ducimus at in tenetur eum quae, ad accusamus esse velit, odit sint delectus officia?</p>
              <div className="flex gap-7 ms-7">
              <button>View M Toys</button>
              <button>Go to Toys</button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-7 py-7 mt-5">
        <a href="#">Arts & Crafts </a>
        <a href="#">Science & Exploration </a>
        <a href="#">Books & Reading </a>
        <a href="#">Craft Kits</a>
      </div>
    </div>
  );
};

export default ImageGallery;
