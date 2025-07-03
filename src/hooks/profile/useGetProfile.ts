import makeApiRequest from "../../helpers/axiosFunction";
import { handleApiError } from "../../helpers/handleApiError";
import { BACKEND_URL } from "../../utils/urls";
import { toast } from "../useToast";

const useAuth = () => {
  const userAuth = async () => {
    try {
      const { data } = await makeApiRequest(
        "post",
        `/myprofile`,
        null,
        { withCredentials: true },
        BACKEND_URL
      );
      if (data.success) {
        toast({
          variant: "success",
          title: "User created",
          description: data.message,
        });
      }
    } catch (error: unknown) {
      handleApiError(error);
    }
  };

  return { userAuth };
};

export default useAuth;
