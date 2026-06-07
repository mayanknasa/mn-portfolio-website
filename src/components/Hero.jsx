import{useState,useEffect,useRef}from"react";
import{motion}from"framer-motion";
import{FaGithub,FaLinkedin}from"react-icons/fa";
import{HiOutlineMail}from"react-icons/hi";
import{STATS,ROLES}from"../data";

function useCount(target,go){
  const[n,setN]=useState(0);
  useEffect(()=>{
    if(!go)return;
    const dur=1800,t0=Date.now();
    const id=setInterval(()=>{
      const p=Math.min((Date.now()-t0)/dur,1);
      setN(Math.floor((1-Math.pow(1-p,3))*target));
      if(p>=1){setN(target);clearInterval(id);}
    },16);
    return()=>clearInterval(id);
  },[go,target]);
  return n;
}

function Stat({value,suffix,label}){
  const ref=useRef();
  const[go,setGo]=useState(false);
  const n=useCount(value,go);
  useEffect(()=>{
    const ob=new IntersectionObserver(([e])=>{if(e.isIntersecting)setGo(true);},{threshold:.5});
    if(ref.current)ob.observe(ref.current);
    return()=>ob.disconnect();
  },[]);
  return(
    <div ref={ref}
      style={{background:"rgba(7,15,35,0.8)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(34,211,238,0.15)",borderRadius:"14px",padding:"18px 14px",textAlign:"center",transition:"border-color .25s,box-shadow .25s"}}
      onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(34,211,238,0.45)";e.currentTarget.style.boxShadow="0 0 28px rgba(34,211,238,0.12)";}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(34,211,238,0.15)";e.currentTarget.style.boxShadow="none";}}
    >
      <div style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(22px,4vw,30px)",fontWeight:800,background:"linear-gradient(135deg,#22d3ee,#818cf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",lineHeight:1.15}}>
        {n}{suffix}
      </div>
      <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"11px",color:"#64748b",marginTop:"5px",textTransform:"uppercase",letterSpacing:".09em",fontWeight:500}}>{label}</div>
    </div>
  );
}

function Roles(){
  const[i,setI]=useState(0);
  const[vis,setVis]=useState(true);
  useEffect(()=>{
    const id=setInterval(()=>{
      setVis(false);
      setTimeout(()=>{setI(x=>(x+1)%ROLES.length);setVis(true);},380);
    },2800);
    return()=>clearInterval(id);
  },[]);
  return(
    <span style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(16px,2.8vw,24px)",fontWeight:700,color:"#22d3ee",opacity:vis?1:0,transition:"opacity .35s ease",display:"inline-block"}}>
      {ROLES[i]}
    </span>
  );
}

const FV=(d=0)=>({initial:{opacity:0,y:28},animate:{opacity:1,y:0},transition:{delay:d,duration:.7,ease:[.22,1,.36,1]}});

const SOCIAL=[
  {label:"GitHub",href:"https://github.com/mayanknasa",Icon:FaGithub},
  {label:"LinkedIn",href:"https://linkedin.com/in/mayanknasa",Icon:FaLinkedin},
  {label:"Email",href:"mailto:mayanknasa4@gmail.com",Icon:HiOutlineMail},
];

export default function Hero(){
  return(
    <section id="hero" style={{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"clamp(100px,12vh,140px) 24px clamp(80px,10vh,100px)",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle,rgba(34,211,238,0.12) 1px,transparent 1px)",backgroundSize:"40px 40px",pointerEvents:"none",opacity:.6}}/>
      <div style={{position:"relative",zIndex:1,maxWidth:"880px",width:"100%",textAlign:"center"}}>
        <motion.div {...FV(0)} style={{marginBottom:"34px"}}>
          <span style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"7px 18px",borderRadius:"999px",border:"1px solid rgba(34,211,238,0.28)",background:"rgba(34,211,238,0.07)",color:"#67e8f9",fontSize:"12px",fontFamily:"'Outfit',sans-serif",fontWeight:500}}>
            <span style={{width:"8px",height:"8px",borderRadius:"50%",background:"#4ade80",animation:"dotBlink 2s ease-in-out infinite",display:"inline-block"}}/>
            Available for new opportunities
          </span>
        </motion.div>
        <motion.p {...FV(.1)} style={{fontFamily:"'Outfit',sans-serif",fontSize:"clamp(15px,2.2vw,19px)",color:"#64748b",marginBottom:"10px"}}>
          Hi, I'm
        </motion.p>
        <motion.h1 {...FV(.18)} style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(68px,11.5vw,124px)",fontWeight:800,color:"#ffffff",lineHeight:.92,letterSpacing:"-.04em",marginBottom:"22px"}}>
          Mayank<br/>Nasa
        </motion.h1>
        <motion.div {...FV(.28)} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"12px",height:"44px",marginBottom:"28px"}}>
          <span style={{color:"#334155",fontSize:"20px"}}>—</span>
          <Roles/>
        </motion.div>
        <motion.p {...FV(.36)} style={{fontFamily:"'Outfit',sans-serif",fontSize:"clamp(14px,2vw,17px)",color:"#64748b",maxWidth:"580px",margin:"0 auto 44px",lineHeight:1.8}}>
          Software Engineer with 4+ years building scalable web & mobile apps. Shipped 60+ features for a UAE fashion platform serving <span style={{color:"#94a3b8",fontWeight:500}}>500K+ active users</span>.
        </motion.p>
        <motion.div {...FV(.44)} style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px",maxWidth:"640px",margin:"0 auto 44px",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))"}}>
          {STATS.map(s=><Stat key={s.label} {...s}/>)}
        </motion.div>
        <motion.div {...FV(.52)} style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap",marginBottom:"40px"}}>
          <motion.a href="#projects" onClick={e=>{e.preventDefault();document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"});}}
            style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"14px 34px",borderRadius:"13px",background:"linear-gradient(135deg,#22d3ee,#818cf8)",color:"#030712",fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:"15px",textDecoration:"none"}}
            whileHover={{scale:1.04,y:-3}} whileTap={{scale:.97}}>
            View My Work →
          </motion.a>
          <motion.a href="/resume.pdf" target="_blank"
            style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"14px 34px",borderRadius:"13px",border:"1px solid rgba(34,211,238,0.32)",color:"#f1f5f9",fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:"15px",textDecoration:"none",background:"transparent"}}
            whileHover={{scale:1.04,y:-3}} whileTap={{scale:.97}}>
            Download Resume ↓
          </motion.a>
        </motion.div>
        <motion.div {...FV(.6)} style={{display:"flex",justifyContent:"center",gap:"12px"}}>
          {SOCIAL.map(({label,href,Icon})=>(
            <motion.a key={label} href={href} target={label!=="Email"?"_blank":undefined} rel="noreferrer" aria-label={label}
              style={{width:"44px",height:"44px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"12px",border:"1px solid rgba(34,211,238,0.15)",color:"#64748b",background:"rgba(7,15,35,0.6)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",transition:"all .2s",textDecoration:"none"}}
              whileHover={{scale:1.12,y:-3}}
              onMouseEnter={e=>{e.currentTarget.style.color="#22d3ee";e.currentTarget.style.borderColor="rgba(34,211,238,0.5)";e.currentTarget.style.background="rgba(34,211,238,0.1)";}}
              onMouseLeave={e=>{e.currentTarget.style.color="#64748b";e.currentTarget.style.borderColor="rgba(34,211,238,0.15)";e.currentTarget.style.background="rgba(7,15,35,0.6)";}}
            >
              <Icon size={19}/>
            </motion.a>
          ))}
        </motion.div>
      </div>
      <div style={{position:"absolute",bottom:"28px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",color:"rgba(100,116,139,0.55)"}}>
        <span style={{fontSize:"10px",letterSpacing:".22em",textTransform:"uppercase",fontFamily:"'Outfit',sans-serif"}}>Scroll</span>
        <div style={{animation:"scrollBounce 1.5s ease-in-out infinite",fontSize:"14px"}}>↓</div>
      </div>
    </section>
  );
}
