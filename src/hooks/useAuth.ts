import { useNavigate } from "react-router-dom";
import makeApiRequest from "../helpers/axiosFunction";
import { handleApiError } from "../helpers/handleApiError";
import { BACKEND_URL } from "../utils/urls";
import { toast } from "./useToast";

interface signupFormProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const useAuth = () => {
  const navigate = useNavigate();
  const userAuth = async (payload: signupFormProps) => {
    try {
      const { data } = await makeApiRequest(
        "post",
        `/auth/signup`,
        payload,
        { withCredentials: true },
        BACKEND_URL
      );
      if (data.success) {
        toast({
          variant: "success",
          title: "User created",
          description: data.message,
        });
        navigate("/dashboard");
      }
    } catch (error: unknown) {
      handleApiError(error);
    }
  };

  return { userAuth };
};

export default useAuth;
