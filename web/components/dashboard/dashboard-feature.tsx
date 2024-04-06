"use client"


export default function DashboardFeature() {
  return (
    <div>
      <div className="flex flex-col justify-center h-[90%] mt-20">
        <div className="flex justify-center w-full">
        
        <img
                className="h-80 md:h-120 animate-wiggle border rounded-full"
                alt="Solana Logo"
                src="/xyz.png"
              />
          
        </div>
      </div>
     <div className="flex items-center justify-center mt-28 mb-24 border border-white bg-gray-900 p-8 rounded-lg">
       <h1 className="z-50 absolute top-20 left-50 mt-8 text-5xl text-white font-semibold font-serif"></h1>
       <div className="grid grid-cols-3 gap-8">
         <div className="col-span-1 flex items-center justify-center border border-white rounded-lg p-6">
           <div className="text-white text-center">
             <h2 className="text-3xl font-bold mb-4">WIF</h2>
             <button onClick={() => { window.location.href = 'https://dogwifcoin.org/'; }} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                More Details
             </span>
             </button>

           </div>
         </div>
         <div className="col-span-1 flex items-center justify-center border border-white rounded-lg p-6">
           <div className="text-white text-center">
             <h2 className="text-3xl font-bold mb-4">Sol</h2>
             <button onClick={() => { window.location.href = 'https://solana.com/'; }} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                         More Details
                         </span>
             </button>

           </div>
         </div>
         <div className="col-span-1 flex items-center justify-center border border-white rounded-lg p-6">
           <div className="text-white text-center">
             <h2 className="text-3xl font-bold mb-4">VODKA</h2>
             <button onClick={() => { window.location.href = 'https://vodkasol.com/'; }} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                         More Details
                         </span>
             </button>
           </div>
         </div>
         <div className="col-span-1 flex items-center justify-center border border-white rounded-lg p-6">
           <div className="text-white text-center">
             <h2 className="text-3xl font-bold mb-4">BONK</h2>
             <button onClick={() => { window.location.href = 'https://solana.com/'; }} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                         More Details
                         </span>
             </button>
           </div>
         </div>
         <div className="col-span-1 flex items-center justify-center border border-white rounded-lg p-6">
           <div className="text-white text-center">
             <h2 className="text-3xl font-bold mb-4">WEN</h2>
             <button onClick={() => { window.location.href = 'https://wenwencoin.org/'; }} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                         More Details
                         </span>
             </button>
           </div>
         </div>
         <div className="col-span-1 flex items-center justify-center border border-white rounded-lg p-6">
           <div className="text-white text-center">
             <h2 className="text-3xl font-bold mb-4">Slerf</h2>
             <button onClick={() => { window.location.href = 'https://www.slerf.wtf/'; }} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                         More Details
               </span>
             </button>
           </div>
         </div>
       </div>
     </div> 
    </div>

  );
}
