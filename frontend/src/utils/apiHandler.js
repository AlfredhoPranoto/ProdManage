import { showToast } from "./toast";

export const handleApiResponse = async (apiCall, onSuccess) => {
  const { success, message } = await apiCall;
  if (!success) {
    showToast("error", "Error", message);
  } else {
    showToast("success", "Success", message);
    onSuccess?.();
  }
};
