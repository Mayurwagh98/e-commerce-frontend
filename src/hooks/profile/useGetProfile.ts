import { useEffect, useCallback } from "react";
import makeApiRequest from "../../helpers/axiosFunction";
import { handleApiError } from "../../helpers/handleApiError";
import { BACKEND_URL } from "../../utils/urls";
import useStoreProfile from "../../store/slices/userProfile";

const useGetMyProfile = () => {
  const setProfile = useStoreProfile((state) => state.setProfile);

  const getUserProfile = useCallback(async () => {
    try {
      const { data } = await makeApiRequest(
        "get",
        "/user/myprofile",
        null,
        { withCredentials: true },
        BACKEND_URL
      );
      setProfile(data);
    } catch (error: unknown) {
      handleApiError(error);
    }
  }, [setProfile]);

  useEffect(() => {
    getUserProfile();
  }, [getUserProfile]);

  return { getUserProfile };
};

export default useGetMyProfile;
