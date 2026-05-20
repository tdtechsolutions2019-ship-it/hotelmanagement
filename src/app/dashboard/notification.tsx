import Button from '@/components/ui/button/Button'
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React from 'react'

const Notification = () => {
  const router = useRouter();
    const t = useTranslations();
  
  return (
    <div className="bg-[#fdf6e9] border border-[#ebdaba] p-6 mb-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#d4a87a]"></div>
          <h2 className="text-[#5c462b] font-medium text-base">{t("newavailability")}</h2>
        </div>
      <div className='flex items-center gap-2'>
           <p>Request Time</p>
      <p>10:00 AM</p>
   </div>
        <p className="text-[#7c6448] text-sm mb-4">
          A guest is requesting room availability. Please respond promptly — guests are notified every 15 seconds until you act.
        </p>
        
        <p className="text-[#c49b6c] text-sm mb-5">
          Next nudge in: 3s
        </p>
        
        <Button
           variant='primary'
  onClick={() => router.push("/acceptRequest")}
>
  Check availability request
</Button>
      </div>
  )
}

export default Notification
