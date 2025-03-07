import React from 'react'

import planData from '@/utils/planData'
import PlanItemCard from './_components/PlanItemCard'

function Upgrade() {
    return (
        <div className='px-10 py-5'>
            <h2 className='font-bold text-3xl text-center'>Upgrade</h2>
            <h2 className='text-center  text-gray-500'>Upgrade to monthly plan to get access to more features on G0-interview</h2>

            <div className="mx-auto max-w-3xl p-5 sm:px-6 sm:py-8 lg:px-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">

                {planData.map((plan,index)=>(
                     <PlanItemCard plan={plan} key={index} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Upgrade