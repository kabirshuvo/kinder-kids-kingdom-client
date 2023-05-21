import Swal from "sweetalert2";
import useTitle from "../../hooks/usTitle";


const AddAToy = () => {
    useTitle('K3 || Add A Toy')

    const handleAddAToy = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const availableQuantity = form.quantity.value;
        const sellerName = form.seller.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const ageGroup = form.agegroup.value;
        const rating = form.rating.value;
        const picture = form.picture.value;

        const newToy = {name, availableQuantity, sellerName, description, category, price, ageGroup, rating, picture: picture }

        console.log(newToy)

        // now have to send data to the server
            fetch(`https://kinder-kids-server.vercel.app/alltoys`, {
            method: "POST",
            headers: {
                    "content-type": 'application/json' 
            },
            body: JSON.stringify(newToy)
                       
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success...!',
                    text: 'Your Toy Added Sucessfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    
    }



    return (
        <>
         <div className="bg-[#3366]  pt-8 pb-80 px-24">
      <h3 className="text-3xl text-center mb-8 font-bold">ADD A TOY</h3>

      <form onSubmit={handleAddAToy}>
        <div className="md:flex gap-7 mb-4">
          <div className="form-control md:w-1/2">

            {/* ********* Toy-Name ****** */}
            
            <label className="input-group input-group-vertical">
              <span className="py-2 text-success">Toy Name</span>
              <input
                type="text"
                name="name"
                placeholder="Add Toy Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

            {/* ********* Toy-Quantity ****** */}


          <div className="form-control md:w-1/2">
           
            <label className="input-group input-group-vertical">
              <span className="py-2 text-success">Add Quantity</span>
              <input
                type="number"
                name="quantity"
                placeholder="Please Add toy Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>

            {/* ********* Toy-Seller-Name ****** */}


        </div>
        <div className="md:flex gap-7 mb-4">
          <div className="form-control md:w-1/2">
          
            <label className="input-group input-group-vertical">
              <span className="py-2 text-success">Seller Name</span>
              <input
                type="text"
                name="seller"
                placeholder="Add Seller Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

            {/* ********* Toy-Category ****** */}


          <div className="form-control md:w-1/2">
           
            <label className="input-group input-group-vertical">
              <span className="py-2 text-success">Add Toy Category</span>
              <input
                type="text"
                name="category"
                placeholder="Please Add Toy Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>

            {/* ********* Toy-Description ****** */}


        <div className="md:flex gap-7 mb-4">
          <div className="form-control md:w-1/2">
           
            <label className="input-group input-group-vertical">
              <span className="py-2 text-success">Add Toy Description</span>
              <input
                type="text"
                name="description"
                placeholder="Add Description "
                className="input input-bordered w-full"
              />
            </label>
          </div>

            {/* ********* Toy-Price ****** */}
          

          <div className="form-control md:w-1/2">
            
            <label className="input-group input-group-vertical">
              <span className="py-2 text-success">Add Toy Price</span>
              <input
                type="number"
                name="price"
                placeholder="Please Add Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          
          

        </div>
        <div className="md:flex gap-7 mb-4">
          <div className="form-control md:w-1/2">

            {/* ********* Toy-age-group ****** */}
            
            <label className="input-group input-group-vertical">
              <span className="py-2 text-success">Toy Age Group</span>
              <input
                type="text"
                name="agegroup"
                placeholder="Add Toy AgeGroup"
                className="input input-bordered w-full"
              />
            </label>
          </div>

            {/* ********* Toy-Ratting ****** */}


          <div className="form-control md:w-1/2">
           
            <label className="input-group input-group-vertical">
              <span className="py-2 text-success">Add Rating</span>
              <input
                type="text"
                name="rating"
                placeholder="Please Add toy Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>

            {/* ********* Toy-Photo-Url ****** */}


        </div>
        <div className="md:flex gap-7 mb-8">
          <div className="form-control w-full">
            <label className="label">
            </label>
            <label className="input-group input-group-vertical">
              <span className="py-2 text-success">Photo URL</span>
              <input
                type="text"
                name="picture"
                placeholder="Add Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>

        <input className="btn btn-block" type="submit" value="Add A TOY" />

      </form>
    </div>   
        </>
    );
};

export default AddAToy;