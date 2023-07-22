import axiosConfig from "../axiosConfig";

// Payment History
export const apigetPaymentHistory = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/payment-history/get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apigetAllPayHis = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/payment-history/getAll",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apigetAllPayHisLimit = (page) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/payment-history/getAllLimit",
        params: page,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
