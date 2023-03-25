import Background from '../assets/images/truck.jpg'

function about() {
    return (

      <div 
    style={{backgroundImage:`url(${Background})`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
       <div className="flex place-items-center h-screen">
       <h3 className='p-4 flex flex-col bg-slate-300 bg-opacity-50 text text-orange-400 rounded mb-80'>
        Welcome to the car spot where you can keep an inventory of cars
         that you have like or would like to own!</h3>
       
        </div>
      
    </div>
      
    )
  }
  
  export default about