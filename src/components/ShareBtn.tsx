'use client'
import { useToast } from '@/hooks/use-toast'
import { Copy } from 'lucide-react'
const ShareBtn = () => {
    const {toast} = useToast()
    const handleShare = ()=>{
        navigator.clipboard.writeText(window.location.href)
        toast({
            title: 'Copied to clipboard'
        })
    }
    return (
        <>
        <button
            className="text-blue-700 inline-block font-bold hover:cursor-pointer hover:text-blue-900 dark:hover:text-white"
         onClick={handleShare}
        >
            <Copy className='inline-block mr-2 w-5 h-5' />
            Share Link
        </button>
        </>
    )
}

export default ShareBtn