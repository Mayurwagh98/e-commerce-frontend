// src/middlewares/errorHandler.ts
import { AxiosError } from "axios";
import { toast } from "../hooks/useToast";

interface ErrorResponse {
  message?: string;
  errors?: Record<string, string[]>;
}

export const handleApiError = (error: unknown) => {
  let errorMessage = "Something went wrong";

  if (error instanceof AxiosError) {
    const responseData = error.response?.data as ErrorResponse;

    if (responseData?.message) {
      errorMessage = responseData.message;
    } else if (responseData?.errors) {
      // Handle validation errors (combine all error messages)
      errorMessage = Object.values(responseData.errors).flat().join(", ");
    } else if (error.response?.status === 401) {
      errorMessage = "Unauthorized access";
    } else if (error.response?.status === 403) {
      errorMessage = "Forbidden access";
    } else if (error.response?.status === 404) {
      errorMessage = "Resource not found";
    } else if (error.response?.status >= 500) {
      errorMessage = "Server error occurred";
    }
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  toast({
    variant: "failed",
    title: "Error",
    description: errorMessage,
  });

  // You might want to return the error for further handling if needed
  return error;
};
