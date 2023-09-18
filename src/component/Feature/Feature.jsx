import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
   
    return (
        <div className="" >
            <p className="flex items-center gap-2 text-left"> <AiFillCheckCircle className=""></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

export default Feature;