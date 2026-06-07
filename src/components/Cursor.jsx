import{useState,useEffect}from"react";
import{motion}from"framer-motion";
export default function Cursor(){
  const[p,setP]=useState({x:-100,y:-100});
  const[hov,setHov]=useState(false);
  const[vis,setVis]=useState(false);
  useEffect(()=>{
    if(window.matchMedia("(pointer:coarse)").matches)return;
    const mv=e=>{setP({x:e.clientX,y:e.clientY});setVis(true);};
    const ov=e=>setHov(!!e.target.closest("a,button,[role=button]"));
    window.addEventListener("mousemove",mv);
    document.addEventListener("mouseover",ov);
    return()=>{window.removeEventListener("mousemove",mv);document.removeEventListener("mouseover",ov);};
  },[]);
  if(typeof window!=="undefined"&&window.matchMedia("(pointer:coarse)").matches)return null;
  return(<>
    <div style={{position:"fixed",left:p.x-4,top:p.y-4,width:8,height:8,borderRadius:"50%",background:"#22d3ee",pointerEvents:"none",zIndex:9998,opacity:vis?1:0,transition:"opacity .2s"}}/>
    <motion.div animate={{left:p.x-(hov?22:15),top:p.y-(hov?22:15),width:hov?44:30,height:hov?44:30,opacity:vis?.7:0}} transition={{type:"spring",stiffness:200,damping:24}}
      style={{position:"fixed",borderRadius:"50%",border:"1.5px solid rgba(34,211,238,0.65)",pointerEvents:"none",zIndex:9997}}/>
  </>);
}
