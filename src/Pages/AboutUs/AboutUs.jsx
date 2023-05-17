
import useTitle from "../../hooks/usTitle";

const AboutUs = () => {
    useTitle('K3 || About Us');
  return (
   
    <>
     <div className="bg-base-200 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <div className="max-w-lg mx-auto">
            <p className="text-lg mb-4">
              Welcome to Kinder Kids Kingdom, where we believe that learning can be fun and exciting! We are dedicated to providing children with an enchanting and unforgettable educational experience.
            </p>
            <p className="text-lg mb-4">
              Our mission is to foster creativity, curiosity, and growth in young minds. We offer a wide range of arts and crafts toys, carefully selected to engage children in imaginative play and exploration. From colorful characters to captivating landscapes, every toy in our collection is designed to spark joy and inspire young learners.
            </p>
            <p className="text-lg mb-4">
              At Kinder Kids Kingdom, we understand the importance of early childhood development. That's why we focus on providing educational toys that promote cognitive, motor, and social skills. Our toys are suitable for children of all ages, from toddlers to young teens, ensuring that every child can find something they love.
            </p>
            <p className="text-lg mb-4">
              Join us on a journey where learning is disguised as play. Let your child unlock the gates to endless fun and discovery in our kingdom of joy and learning. We are committed to making education an enchanting and unforgettable experience for your little ones.
            </p>
            <p className="text-lg mb-6">
              Shop our collection of arts and crafts toys today and give your child the gift of imagination, creativity, and endless possibilities!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default AboutUs;
