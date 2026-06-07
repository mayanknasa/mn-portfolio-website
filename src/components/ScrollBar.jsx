import{motion,useScroll,useSpring}from"framer-motion";
export default function ScrollBar(){
  const{scrollYProgress}=useScroll();
  const sx=useSpring(scrollYProgress,{stiffness:100,damping:30});
  return<motion.div style={{position:"fixed",top:0,left:0,right:0,height:"2px",scaleX:sx,transformOrigin:"0%",background:"linear-gradient(90deg,#22d3ee,#818cf8,#a78bfa)",zIndex:999}}/>;
}
