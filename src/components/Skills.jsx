import{useRef,useState,useEffect}from"react";
import{motion}from"framer-motion";
import{SKILLS}from"../data";

function useIV(){
  const ref=useRef();const[v,setV]=useState(false);
  useEffect(()=>{
    const ob=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true);},{threshold:.08});
    if(ref.current)ob.observe(ref.current);return()=>ob.disconnect();
  },[]);return[ref,v];
}

const GH={fontFamily:"'Syne',sans-serif",fontWeight:800,background:"linear-gradient(135deg,#22d3ee,#818cf8,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"};

export default function Skills(){
  const[ref,vis]=useIV();
  return(
    <section id="skills" ref={ref} style={{padding:"clamp(64px,10vw,120px) 24px"}}>
      <div style={{maxWidth:"1100px",margin:"0 auto"}}>
        <motion.div initial={{opacity:0,y:20}} animate={vis?{opacity:1,y:0}:{}} transition={{duration:.5}} style={{textAlign:"center",marginBottom:"clamp(40px,6vw,72px)"}}>
          <p style={{fontSize:"11px",textTransform:"uppercase",letterSpacing:".3em",color:"#22d3ee",fontFamily:"'Outfit',sans-serif",fontWeight:600,marginBottom:"12px"}}>What I Work With</p>
          <h2 style={{...GH,fontSize:"clamp(36px,6vw,64px)",lineHeight:1.1}}>Tech Arsenal</h2>
        </motion.div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"14px"}}>
          {SKILLS.map(({cat,color,items},ci)=>(
            <motion.div key={cat}
              initial={{opacity:0,y:28}} animate={vis?{opacity:1,y:0}:{}}
              transition={{delay:ci*.09,duration:.5,ease:[.22,1,.36,1]}}
              style={{background:"rgba(7,15,35,0.78)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:`1px solid ${color}1e`,borderRadius:"16px",padding:"22px",transition:"border-color .25s,box-shadow .25s"}}
              whileHover={{scale:1.02}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=color+"52";e.currentTarget.style.boxShadow=`0 8px 36px ${color}16`;}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=color+"1e";e.currentTarget.style.boxShadow="none";}}>
              <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"14px",color:"#f1f5f9",marginBottom:"16px",display:"flex",alignItems:"center",gap:"10px"}}>
                <span style={{width:"8px",height:"8px",borderRadius:"50%",background:color,flexShrink:0,boxShadow:`0 0 10px ${color}`}}/>
                {cat}
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
                {items.map((s,si)=>(
                  <motion.span key={s}
                    initial={{opacity:0,scale:.75}} animate={vis?{opacity:1,scale:1}:{}}
                    transition={{delay:ci*.09+si*.04+.2,duration:.28,ease:"backOut"}}
                    style={{padding:"5px 12px",borderRadius:"8px",fontSize:"12px",fontFamily:"'Outfit',sans-serif",fontWeight:500,background:color+"16",color,border:`1px solid ${color}24`,transition:"all .18s"}}
                    whileHover={{scale:1.07}}>
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
