import { IUserUpdateInputFieldDetails, updateErrState } from "../../types/updateUser/updateUser";
import { IAllUsers } from "../../types/adminPanel/AdminPanel";
import { NavigateFunction } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

const handleUserUpdate = async (setIsLoading: (value: (((prevState: boolean) => boolean) | boolean)) => void, userUpdateInputFieldDetails: IUserUpdateInputFieldDetails, token: string, userPrevDetails: IAllUsers, setErrState: (value: (((prevState: updateErrState) => updateErrState) | updateErrState)) => void, errState: updateErrState, navigate: NavigateFunction) => {
    try {
        setIsLoading(true);
        const response = await axios.put(
            "/api/users/user-update",
            userUpdateInputFieldDetails,
            {
                headers: { Authorization: "Bearer " + token },
                params: { id: userPrevDetails.id }
            }
        );
        setIsLoading(false);
        if (response.data.status === 422) {
            if (response.data.errors.first_name) {
                setErrState({
                    ...errState,
                    first_name: response.data.errors.first_name[0]
                });
                return;
            }
            if (response.data.errors.last_name) {
                setErrState({
                    ...errState,
                    last_name: response.data.errors.last_name[0]
                });
                return;
            }
            if (response.data.errors.email) {
                setErrState({
                    ...errState,
                    email: response.data.errors.email[0]
                });
                return;
            }
        }
        if (response.data.status === 401) {
            toast.error(response.data.message);
            return;
        }
        toast.success(response.data.message);
        navigate("/admin/panel/users");
    } catch (error) {
        console.log(error);
    }
};
export default handleUserUpdate;
