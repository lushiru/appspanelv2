import axios from "axios";
import { ENV } from "../utils";
import { storageCrtl } from "./storage";

async function verDesempeniosEvaluacion() {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.DESEMPENOVERTODOS}`;
      const token = await storageCrtl.getToken();
  
      const paramsTemp = {      
        headers: {
          Authorization: token,          
          },
      };
  
      const response = await axios.get(url,paramsTemp);
  
      if (response.status !== 200) throw response;
  
      return response.data;
    } catch (error) {
      throw error;
    }
  }


  export const desempeniosCtrl = {
    verDesempeniosEvaluacion,
  };