import axios from "axios";
import { ENV } from "../utils";
import { storageCrtl } from "./storage";

async function verTrabajadores() {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.DESEMEMPENOREGISTRAR}`;
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


  async function verEvaluacion(desempenoId) {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.DESEMEMPENOREGISTRAR}&iddes=${desempenoId}`;
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

  export const desempeniosregistrarCtrl = {
    verTrabajadores,
    verEvaluacion,
  };