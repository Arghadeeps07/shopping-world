"use client"
import { useToast } from '@/hooks/use-toast';
import { useCart } from '../utils/useCart';

const AddToCart = ({product}: any) => {

    const {toast} = useToast()
    const {addItem} = useCart()
    const handleCartAdd = ()=>{
      addItem(product)
      toast({
        title:`${product.name} Item added to cart`
      })
    }
  return (
    <div>
        <button onClick={handleCartAdd} className='w-full mt-4 py-2 px-6 bg-blue-700 text-white hover:bg-blue-900 rounded-md'>
            Add To Cart
        </button>
    </div>
  )
}

export default AddToCart