

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            alt="Contact"
            className="w-1/2 h-auto rounded-lg "
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h3 className="text-3xl font-bold mb-4">Please Feel Free to Contact Us</h3>

          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
