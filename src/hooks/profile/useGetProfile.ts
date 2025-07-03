import { useEffect } from "react";
import makeApiRequest from "../../helpers/axiosFunction";
import { handleApiError } from "../../helpers/handleApiError";
import { BACKEND_URL } from "../../utils/urls";

const useGetMyProfile = () => {
  useEffect(() => {
    getUserProfile();
  }, []);
  const getUserProfile = async () => {
    console.log("called");
    try {
      const { data } = await makeApiRequest(
        "get",
        `/user/myprofile`,
        null,
        { withCredentials: true },
        BACKEND_URL
      );
      console.log("data:", data);
    } catch (error: unknown) {
      handleApiError(error);
    }
  };

  return { getUserProfile };
};

export default useGetMyProfile;
