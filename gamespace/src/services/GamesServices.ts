import Api from "helpers/Api/axios-config";

export interface IGames {
    id:string;
    Title: string;
    CoverImageUrl: string;
    Description: string;
    Year: number;
    ImdbScore: number;
}


export const GamesServices = {

        getAll: async () => {   
          try{
            const res = await Api.get("/games", { method: "GET" });
            return res;   
          }  catch (error: any) {
              console.log(error)
            }     
                   
          },

        getById: async (id: string) => {
          try {
            const res = await Api.get(`/games/${id}`);
            return res; 
          } catch (error: any) {
            console.log(error)
          }   
                  
          },
      
        create: async (game: IGames) => {
          try {
            const res = await Api.post("/games", game);
            return res;
          } catch (error: any) {
            console.log(error)
          } 
            
        },
      
        updateById: async (id: string, game: IGames) => {
          try {
            const res = await Api.patch(`/games/${id}`, game);
            return res;
          } catch (error: any) {
            console.log(error)
          } 
                  
        },
      
        delete: async (id: string) => {
          try {
            const res = await Api.delete(`/games/${id}`);
            return res;
          } catch (error: any) {
            console.log(error)
          }             
        },     
      };
