import Navbar from "./Navbar";


const Heading = () => {
    return (
        <>
            <Navbar />
            <h1 className="display-5 text-center">Select Book to Read</h1>
            <p className="text-center">Select At most four books</p>   
        </>
    );
};

export default Heading;