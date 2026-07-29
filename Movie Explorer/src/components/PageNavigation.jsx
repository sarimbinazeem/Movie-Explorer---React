import React from 'react'

const PageNavigation = ({page, total, onPrevious, onNext}) => {
  return (
    <div className='flex justify-center py-8 '>
        <div className='bg-[#1c1c1c] flex  mb-5 rounded-xl w-full max-w-xl items-center justify-between  shadow-lg shadow-black/30 overflow-hidden '>
            <button onClick={onPrevious} disabled={page<=1} className='bg-[#B20710]  px-6 py-5 font-medium hover:bg-[#8e060d] transition-colors duration-300 disabled:bg-gray-700 disabled:cursor-not-allowed'>
                Previous

            </button>

            <p className='font-semibold text-gray-300'>
                Page {page} of {total}
            </p>

            <button onClick={onNext} disabled={page >= total} className='bg-[#B20710]   px-6 py-5 font-medium hover:bg-[#8e060d] transition-colors duration-300 disabled:bg-gray-700 disabled:cursor-not-allowed'>
                Next
            </button>

        </div>
    </div>
  )
}

export default PageNavigation