import useTitle from "../../hooks/usTitle";


const Bolg = () => {
    useTitle('K3 || Blog');
    return (
        <div className="py-7">
            <div className="py-7">
            <h3 className="text-success text-center text-3xl">Exploring Mindset is the Key To Learn</h3>
            </div>

           <div className="my-16">
           <h2 className="text-warning"> <span className="me-4">Q:1</span> What is an access token and Refresh token ? How do they work and where should we store them on the clientside?</h2>
           
           <div>
           <span className="text-success">Answer:</span>
           <br />
           <br />
           <div>
            
            <p>In a simplified way, an access token and a refresh token are two important components of an authentication system. They work together to verify the identity of a user and provide secure access to protected resources.</p>
            <br />
            <p>Access tokens are usually stored in memory or a short-lived storage mechanism.
            Refresh tokens are securely stored on the client-side using techniques like </p>
            <br />
            <p>**HTTP-only cookies, </p>
            <p>** secure storage like local storage,</p> 
            <p>or other secure storage mechanisms provided by the platform.</p>
            <br />
            <p>It is  important to follow secure practices for token storage, such as using secure storage mechanisms, protecting against cross-site scripting XSS attacks, and keeping the tokens confidential to prevent unauthorized access to sensitive user data.</p>
            
            </div>
            </div>
           </div>

           <div className="my-16">
            <h2 className="text-warning"><span className="me-4">Q:2 </span> Compare SQL and NOSQL database </h2>
            <h4><span className="text-success">Answer:</span></h4>
            <br />
            <div>
                <p>SQL and NoSQL are two different types of database management systems that differ in their data models, query languages, and design principles. Here are some key points of comparison:</p>
                <br />
                <ul>
                    <li><span className="text-cyan-700">1.</span> Data Model</li>
                    <li><span className="text-cyan-700">2.</span> Query Language</li>
                    <li><span className="text-cyan-700">3.</span> Scalability</li>
                    <li><span className="text-cyan-700">4.</span> Flexibility and Schema</li>
                    <li><span className="text-cyan-700">5.</span> Use Cases</li>
                    <br />
                    <li>This is verymuch important to note that the choice between 
                        <span className="text-cyan-700"> SQL </span>  and 
                        <span className="text-cyan-700"> NoSQL </span>  
                        databases depends on the specific requirements of any project, including the nature of data, scalability needs, query patterns, and development preferences.</li>
                </ul>
            </div>
           </div>

           <div className="my-16">
            <h2 className="text-warning"><span className="me-4">Q:3 </span> What is Express Js and what is Nest Js ?</h2>
            <h4><span className="text-success">Answer:</span></h4>
            <br />
            <div>
                <p>
                Express.js is a minimalist and flexible web framework that offers simplicity and control. <br />
                <br />
                On the other hand Nest.js is an opinionated and feature-rich framework that promotes a structured and scalable approach to building Node.js applications. 
                <br /> <br />
                The choice depends on the specific needs and preferences of any project.
                </p>
            </div>
           </div>

           <div className="my-16">
            <h2 className="text-warning"><span className="me-4">Q:4 </span> What is MongoDb aggregate and how dose it work? </h2>
            <h4><span className="text-success">Answer:</span></h4>
            <br />
            <div>
                <p>
                Aggregation framework of MongoDB  is a powerful tool that allows Developer to process and analyze data within the database. It provides a way to perform advanced data manipulation operations, similar to GROUP BY and JOIN statements of SQL.
                </p>
                <br />
                <br />
                <p>
                MongoDB offers a wide range of operators and functions to perform complex data manipulations, including data filtering, grouping, sorting, joining, calculating aggregates, and performing mathematical operations.
                
                <br />
                <br />
                MongoDB allows developer to perform computations and analysis directly in the database, reducing the need to transfer large amounts of data to the application layer.
                </p>
            </div>
           </div>

        </div>
    );
};

export default Bolg;