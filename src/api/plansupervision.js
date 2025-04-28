import axios from "axios";
import { ENV } from "../utils";
import { storageCrtl } from "./storage";

async function verPlanes() {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.PLANESSUPERVISION}`;
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

  async function crearPlan(actividadasup,supervisar,tarea,frecuencia,inicio,checklist,indicador,tipodereporte,observacion) {

    const url = `${ENV.API_URL}${ENV.ENDPOINTS.PLANESSUPERVISION}`;
    const token = await storageCrtl.getToken();

    try {
              
        const res = await axios.post(url, {
            actividadasup,
            supervisar,
            tarea,
            frecuencia,
            inicio,
            checklist,
            indicador,
            tipodereporte,
            observacion
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

  async function verUnDesempenioEvaluacion(desempenoId) {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.DESEMPENO}&id=${desempenoId}`;
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

  async function updateDesempenioEvaluacion(id, nombre) {

    const url = `${ENV.API_URL}${ENV.ENDPOINTS.DESEMPENO}`;
    const token = await storageCrtl.getToken();

    try {
              
        const res = await axios.put(url, {
          id,
          nombre,
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

  async function deleteDesempenioEvaluacion(id) {

    const url = `${ENV.API_URL}${ENV.ENDPOINTS.DESEMPENO}&id=${id}`;
    const token = await storageCrtl.getToken();

    try {
              
        const res = await axios.delete(url,{
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

  export const plansupervisionCtrl = {
    verPlanes,
    crearPlan

  };