"use client";

import { AnimatePresence} from "framer-motion";
import Navbar from "./navbar";
import { motion, easeOut } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({children}) => {
  const pathName = usePathname()

  return (
    <AnimatePresence mode="wait">
      {console.log(pathName)}
      <div key={pathName} className="w-screen  h-screen bg-gradient-to-b from-blue-100 to-pink-100 ">
      <motion.div
          className="h-screen w-screen fixed  bg-pink-600 rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: .5, ease: easeOut }}

        />
        {/* <motion.div
        
        initial={{opacity: 1}}
        animate={{ opacity:0}}
        exit={{ opacity: 1}}
        transition={{ duration: .8, ease: easeOut }}
        className=" m-auto top-0  bottom-0 right-0 left-0 text-white text-8xl  cursor-default z-50  w-fit h-fit fixed ">
          
        </motion.div> */}

      <motion.div
          className="h-screen w-screen fixed  bottom-0 bg-blue-600 rounded-t-[100px] z-50"
          animate={{ height: "0vh", transition: {delay: .5} }}
          initial={{ height: "140vh" }}
          
        />
        
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)] ">{
          children}</div>
        </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
