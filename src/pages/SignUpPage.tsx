import { useNavigate } from "react-router-dom";
//Components
import LoginForm from "../components/forms/LoginForm";
//Framer
import { motion } from "framer-motion";
//Icons
import { ArrowBackIcon } from "../utils/icons/muiIcons";
//Utils
import { LOCAL_URL } from "../utils/urls";

export default function SignUpPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 flex-col m-auto text-black  justify-center space-y-5 max-w-md">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Create account</h2>
        <p className="text-md md:text-xl">
          Create an account access the good stuff!
        </p>
      </div>
      <div className="flex flex-col max-w-md space-y-5">
        <motion.button
          onClick={() => {
            //navigate
            navigate("/login");
          }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.2 },
          }}
        >
          <ArrowBackIcon />
          Back to Login
        </motion.button>
        <LoginForm
          backendRoute={`${LOCAL_URL}/api/users/signup`}
          btnText="Create account"
          displayLabels={false}
        />
        <div className="flex justify-center items-center">
          <span className="w-full border border-black"></span>
        </div>
      </div>
    </div>
  );
}
