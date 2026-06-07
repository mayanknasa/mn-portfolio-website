import{useState,useEffect}from"react";
import{motion,AnimatePresence}from"framer-motion";
export default function BackTop(){
  const[vis,setVis]=useState(false);
  useEffect(()=>{const fn=()=>setVis(window.scrollY>600);window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn);},[]);
  return(
    <AnimatePresence>
      {vis&&(
        <motion.button initial={{opacity:0,scale:.6}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.6}}
          onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
          style={{position:"fixed",bottom:"28px",right:"28px",zIndex:50,width:"46px",height:"46px",borderRadius:"13px",border:"1px solid rgba(34,211,238,0.32)",background:"rgba(7,15,35,0.92)",backdropFilter:"blur(18px)",color:"#22d3ee",fontSize:"20px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s"}}
          whileHover={{scale:1.12,y:-3}} whileTap={{scale:.9}}
          onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(34,211,238,0.6)";e.currentTarget.style.background="rgba(34,211,238,0.12)";}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(34,211,238,0.32)";e.currentTarget.style.background="rgba(7,15,35,0.92)";}}>
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
