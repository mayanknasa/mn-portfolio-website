import{useRef,useState,useEffect}from"react";
import{motion}from"framer-motion";
import{EXP}from"../data";

function useIV(){
  const ref=useRef();const[v,setV]=useState(false);
  useEffect(()=>{
    const ob=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true);},{threshold:.08});
    if(ref.current)ob.observe(ref.current);return()=>ob.disconnect();
  },[]);return[ref,v];
}

const GH={fontFamily:"'Syne',sans-serif",fontWeight:800,background:"linear-gradient(135deg,#22d3ee,#818cf8,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"};

export default function Experience(){
  const[ref,vis]=useIV();
  return(
    <section id="experience" ref={ref} style={{padding:"clamp(64px,10vw,120px) 24px"}}>
      <div style={{maxWidth:"860px",margin:"0 auto"}}>
        <motion.div initial={{opacity:0,y:20}} animate={vis?{opacity:1,y:0}:{}} transition={{duration:.5}} style={{textAlign:"center",marginBottom:"clamp(40px,6vw,72px)"}}>
          <p style={{fontSize:"11px",textTransform:"uppercase",letterSpacing:".3em",color:"#22d3ee",fontFamily:"'Outfit',sans-serif",fontWeight:600,marginBottom:"12px"}}>Where I've Worked</p>
          <h2 style={{...GH,fontSize:"clamp(36px,6vw,64px)",lineHeight:1.1}}>Experience</h2>
        </motion.div>
        <div style={{position:"relative"}}>
          <div style={{position:"absolute",left:"19px",top:"24px",bottom:"24px",width:"1px",background:"linear-gradient(180deg,rgba(34,211,238,.4) 0%,rgba(129,140,248,.2) 60%,transparent 100%)"}}/>
          {EXP.map(({role,badge,company,sub,period,loc,color,metrics,highlights,tags},i)=>(
            <motion.div key={role+period}
              initial={{opacity:0,x:36}} animate={vis?{opacity:1,x:0}:{}}
              transition={{delay:i*.2,duration:.65,ease:[.22,1,.36,1]}}
              style={{display:"flex",gap:"28px",marginBottom:"28px"}}>
              <div style={{flexShrink:0,position:"relative",zIndex:1,paddingTop:"2px"}}>
                <motion.div initial={{scale:0}} animate={vis?{scale:1}:{}} transition={{delay:i*.2+.12,type:"spring",stiffness:300}}
                  style={{width:"40px",height:"40px",borderRadius:"50%",background:color+"1c",border:`2px solid ${color}50`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px"}}>
                  {i===2?"🎓":"💼"}
                </motion.div>
              </div>
              <div style={{flex:1,background:"rgba(7,15,35,0.78)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:`1px solid ${color}1e`,borderRadius:"18px",padding:"22px",transition:"border-color .25s,box-shadow .25s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=color+"48";e.currentTarget.style.boxShadow=`0 10px 40px ${color}14`;}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=color+"1e";e.currentTarget.style.boxShadow="none";}}>
                <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:"10px",marginBottom:"14px"}}>
                  <div>
                    <span style={{display:"inline-block",padding:"2px 10px",borderRadius:"6px",fontSize:"11px",fontFamily:"'Outfit',sans-serif",fontWeight:600,background:color+"1a",color,border:`1px solid ${color}28`,marginBottom:"8px"}}>{badge}</span>
                    <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(16px,2.5vw,20px)",color:"#f1f5f9",lineHeight:1.2}}>{role}</div>
                    <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"14px",color,fontWeight:600,marginTop:"3px"}}>{company}</div>
                    <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"12px",color:"#64748b",marginTop:"2px"}}>{sub}</div>
                  </div>
                  <div style={{textAlign:"right",flexShrink:0}}>
                    <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"12px",color:"#64748b"}}>📅 {period}</div>
                    <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"12px",color:"#64748b",marginTop:"3px"}}>📍 {loc}</div>
                  </div>
                </div>
                <ul style={{marginBottom:"14px"}}>
                  {highlights.map((h,j)=>(
                    <li key={j} style={{display:"flex",gap:"10px",marginBottom:"8px",alignItems:"flex-start",listStyle:"none"}}>
                      <span style={{flexShrink:0,marginTop:"8px",width:"5px",height:"5px",borderRadius:"50%",background:color,display:"inline-block"}}/>
                      <span style={{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"#94a3b8",lineHeight:1.7}}>{h}</span>
                    </li>
                  ))}
                </ul>
                <div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"14px"}}>
                  {metrics.map(m=><span key={m} style={{padding:"4px 12px",borderRadius:"8px",fontSize:"12px",fontFamily:"'Syne',sans-serif",fontWeight:700,background:color+"18",color,border:`1px solid ${color}2c`}}>{m}</span>)}
                </div>
                <div style={{display:"flex",flexWrap:"wrap",gap:"7px",paddingTop:"12px",borderTop:"1px solid rgba(255,255,255,0.06)"}}>
                  {tags.map(t=><span key={t} style={{padding:"3px 9px",borderRadius:"6px",fontSize:"11px",fontFamily:"'Outfit',sans-serif",color:"#475569",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)"}}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
