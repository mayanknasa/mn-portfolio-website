import{useState,useEffect}from"react";
import{motion,AnimatePresence}from"framer-motion";
export default function Loader(){
  const[show,setShow]=useState(true);
  useEffect(()=>{const t=setTimeout(()=>setShow(false),1500);return()=>clearTimeout(t);},[]);
  return(
    <AnimatePresence>
      {show&&(
        <motion.div initial={{opacity:1}} exit={{opacity:0,scale:1.04}} transition={{duration:.5}}
          style={{position:"fixed",inset:0,zIndex:9999,background:"#030712",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"22px"}}>
          <motion.div initial={{scale:.7,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:.4}}
            style={{width:"64px",height:"64px",borderRadius:"20px",background:"linear-gradient(135deg,#22d3ee,#818cf8)",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"24px",color:"#030712"}}>MN</span>
          </motion.div>
          <div style={{width:"150px",height:"2px",background:"rgba(255,255,255,0.08)",borderRadius:"2px",overflow:"hidden"}}>
            <motion.div initial={{width:"0%"}} animate={{width:"100%"}} transition={{duration:1.2,ease:"easeInOut"}}
              style={{height:"100%",background:"linear-gradient(90deg,#22d3ee,#818cf8,#a78bfa)",borderRadius:"2px"}}/>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
