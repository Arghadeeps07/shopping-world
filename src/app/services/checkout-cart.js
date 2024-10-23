import axios from "axios"


export const handleCheckout = async (body)=>{
    const res = await axios.post('/api/checkout', body)
    return res.data.session_url
} 