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

  async function crearDesempenoEvaluarion(nombre) {

    const url = `${ENV.API_URL}${ENV.ENDPOINTS.DESEMPENOCREAREVALUACION}`;
    const token = await storageCrtl.getToken();

    try {
              
        const res = await axios.post(url, {
            nombre
        },{
          headers: {
            Authorization: token, 
           "Content-Type": "application/x-www-form-urlencoded",
          }
        })

        return res.data

      } catch (error) {
        console.error(error);
      }
    
  }


  export const desempeniosCtrl = {
    verDesempeniosEvaluacion,
    crearDesempenoEvaluarion,
  };