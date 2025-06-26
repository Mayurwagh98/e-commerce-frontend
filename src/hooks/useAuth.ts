import makeApiRequest from "../helpers/axiosFunction";
import { BACKEND_URL } from "../utils/urls";

const useAuth = () => {
  const userAuth = async () => {
    try {
      const { data } = await makeApiRequest(
        "post",
        `/auth/signup`,
        null,
        BACKEND_URL
      );
      console.log("data:", data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return { userAuth };
};

export default useAuth;
