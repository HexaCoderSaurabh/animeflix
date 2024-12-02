import { useToast } from "@/components/Toast";
import authClient from "./client";
import { ToastType } from "@/components/Toast/types";

const addToast = useToast.getState().addToast;

export const login = async (userData: {
  username: string;
  password: string;
}) => {
  try {
    const response = await authClient.post(`/auth/login`, userData, { withCredentials: true });
    addToast({
      type: ToastType.SUCCESS,
      message: "User logged in succesfuly!",
    });
    return response.data;
  } catch (error: any) {
    addToast({
      type: ToastType.ERROR,
      message: error?.response?.data?.message || "Login failed",
    });
    console.log(error.response?.data?.message || "Login failed");
    throw error
  }
};

export const getUser = async (username: string) => {
  try {
    const response = await authClient.get(`/user/${username}`, { withCredentials: true });
    addToast({
      type: ToastType.SUCCESS,
      message: "Fetched user succesfully",
    });
    return response.data;
  } catch (error: any) {
    addToast({
      type: ToastType.ERROR,
      message: error?.response?.data?.message || "Failed to fetch user",
    });
    console.log(error.response?.data?.message || "Failed to fetch user");
    throw error
  }
};

export const signup = async (userData: {
  email: string;
  password: string;
  name: string;
}) => {
  try {
    const response = await authClient.post(`/user`, userData);
    addToast({
      type: ToastType.SUCCESS,
      message: "User registered succesfully!",
    });
    return response.data;
  } catch (error: any) {
    addToast({
      type: ToastType.ERROR,
      message: error?.response?.data?.errors?.includes("ER_DUP_ENTRY")
        ? "Email already in use. Please try login!"
        : "Not able to register user. Please try again!",
    });
    console.log(error.response?.data?.message || "Signup failed");
  }
};
