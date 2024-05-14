"use client"
import {motion} from "framer-motion"

const TestPage =()=>{
    const variants ={
        variant1: {
            x: 400, 
            y: 200 , 
            opacity: .5,
            transition: {
                duration: 3

            }
        },
        variant2: {
            x: 100, 
            y: -300 , 
            rotation: 90
        }

    }
    return(
        <div className=" flex  items-center h-full justify-center">
            <motion.div className="h-96 w-96 bg-red-500 rounded"
           
            variants={variants}
            animate="variant1"
            ></motion.div>

        </div>
    )
}

export default TestPage