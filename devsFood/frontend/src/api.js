let BASE = 'https://api.b7web.com.br/devsfood/api';


export default {
    getcategoris: async () =>{
        //GET //categories
        const res = await fetch(BASE+'/categories');
        const json = await res.json();
        return json
    },

    getProducts: async () =>{
        // Get para produtos (search, page,category)
        const res = await fetch(BASE+'/products');
        const json = await res.json();
        return json
    }
}