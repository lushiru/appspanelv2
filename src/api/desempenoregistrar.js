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

  async function guardarTareas(idpers, tareas) {

    const url = `${ENV.API_URL}${ENV.ENDPOINTS.DESEMEMPENOREGISTRAR}`;
    const token = await storageCrtl.getToken();

    const bodyFormData = new FormData();
    let i=0;
    tareas.forEach((item) => {
        bodyFormData.append('valor['+i+']', item.valor);
        bodyFormData.append('idtarea['+i+']', item.idtarea);
        i++;
    });

    try {
              
        const res = await axios.post(url, {
          idpers,
          bodyFormData
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

  export const desempeniosregistrarCtrl = {
    verTrabajadores,
    verEvaluacion,
    guardarTareas,
  };