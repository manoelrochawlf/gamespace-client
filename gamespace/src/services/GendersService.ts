import Api from "helpers/Api/axios-config";

export interface IGenders {
    id:string;
    name: string;
}

type GendersResponse = IGenders;

export const GendersServices = {

        getAll: async () => {   
          try{
            const res = await Api.get("/generos", { method: "GET" });
            return res;   
          }  catch (error: any) {
              console.log(error)
            }     
                   
          },

        getById: async (id: string) => {
          try {
            const res = await Api.get(`/generos/${id}`);
            return res; 
          } catch (error: any) {
            console.log(error)
          }   
                  
          },
      
        create: async (generos: GendersResponse) => {
          try {
            const res = await Api.post("/generos", generos);
            return res;
          } catch (error: any) {
            console.log(error)
          } 
            
        },
      
        updateById: async (id: string, generos: GendersResponse) => {
          try {
            const res = await Api.patch(`/generos/${id}`, generos);
            return res;
          } catch (error: any) {
            console.log(error)
          } 
                  
        },
      
        delete: async (id: string) => {
          try {
            const res = await Api.delete(`/generos/${id}`);
            return res;
          } catch (error: any) {
            console.log(error)
          }             
        },     
      };
