"use client";

import { AnimatePresence, easeOut} from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({children}) => {
  const pathName = usePathname()
  return (
    <AnimatePresence>
      <div key={pathName} className="w-screen  h-screen bg-gradient-to-b from-blue-100 to-pink-100 ">
      <motion.div
          className="h-screen w-screen fixed  bg-red-400 rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 1.5, ease: easeOut }}
        />
      <motion.div
          className="h-screen w-screen fixed  bottom-0 bg-blue-500 rounded-t-[100px] z-50"
          animate={{ height: "0vh", transition: {delay: 1} }}
          initial={{ height: "140vh" }}
          
        />
        
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)] ">{children}</div>
        </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
