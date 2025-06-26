import makeApiRequest from "../helpers/axiosFunction";
import { BACKEND_URL } from "../utils/urls";

interface signupFormProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const useAuth = () => {
  const userAuth = async (payload: signupFormProps) => {
    try {
      const { data } = await makeApiRequest(
        "post",
        `/auth/signup`,
        payload,
        {},
        BACKEND_URL
      );
      console.log("data:", data);
      if (data.success) {
        alert(data.message);
      }
    } catch (error: unknown) {
      console.log("error:", error);
      alert(error.response.data.message);
    }
  };

  return { userAuth };
};

export default useAuth;
