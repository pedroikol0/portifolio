
import { motion } from "framer-motion";
import './App.css'


function App() {
  
  return (
   <div className='grid grid-cols-3 grid-rows-2 h-screen'>

    <motion.div className='border flex items-center justify-center hover:bg-cyan-600'
        whileHover={{ flexGrow: 1.5 }}
      >
    <p className='text-xl'>WORK</p>
    </motion.div>


    <motion.div  className="border flex items-center justify-center hover:bg-cyan-600"
        whileHover={{ flexGrow: 1.5}}>
    <p className="text-xl">CONNECT</p>
    </motion.div>

    <motion.div className="border col-span-3 flex items-center justify-center hover:bg-cyan-600"
        whileHover={{ flexGrow: 1.5}}>
    <p className="text-xl">CONNECT</p>
    </motion.div>

    
    <motion.div className="border col-span-2 row-span-2 flex items-center justify-center hover:bg-cyan-600"
        whileHover={{ flexGrow: 1.5}}>
    <p className="text-xl">CONNECT</p>
    </motion.div>

    <motion.div className="border bg-yellow-300 flex items-center justify-center hover:bg-yellow-400"
        whileHover={{ flexGrow: 1.5}}>
    <p className="font-bold text-black">milli</p>
    </motion.div>

   </div>
  )
}

export default App
