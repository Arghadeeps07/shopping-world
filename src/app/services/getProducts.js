import { stripe } from "@/utils/stripe"


export const getProducts = async (limit) => {
    let products = {
        data:[]
    }
    try{
        products = await stripe.products.list({
        limit: limit || 10,
        expand: ['data.default_price']
    })
    // console.log("------------all--products----------")
    // console.log(JSON.stringify(products,null,2))  
    }catch(err){
        console.log("ERROR FROM STRIPE:",err)
    }
 
    return products
}

export const getProductbyId = async (productId) => {
    let product = null
    try {
        product = await stripe.products.retrieve(productId, {
            expand: ['default_price']
        })
        //console.log("------------product----------")
        //console.log(JSON.stringify(product,null,2))  
    }catch(err){
        console.log("ERROR FROM STRIPE:",err)
    }
   

    return product
}