import{useRef,useState,useEffect}from"react";
import{motion}from"framer-motion";

function useIV(){
  const ref=useRef();const[v,setV]=useState(false);
  useEffect(()=>{
    const ob=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true);},{threshold:.12});
    if(ref.current)ob.observe(ref.current);return()=>ob.disconnect();
  },[]);return[ref,v];
}

const GH={fontFamily:"'Syne',sans-serif",fontWeight:800,background:"linear-gradient(135deg,#22d3ee,#818cf8,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"};
const GL=(c="#22d3ee")=>({background:"rgba(7,15,35,0.78)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:`1px solid ${c}22`,borderRadius:"16px",padding:"20px",transition:"border-color .25s,box-shadow .25s"});

const TRAITS=[
  {icon:"⚡",title:"Technical Excellence",text:"4+ years shipping production React Native & React.js at scale. Deep in performance, caching, and CI/CD.",color:"#22d3ee"},
  {icon:"🎯",title:"Impact Driven",text:"Every feature tied to a metric. AI chatbot → 18% CVR. In-house widgets → $390K/year saved.",color:"#818cf8"},
  {icon:"✅",title:"Quality Focused",text:"94% PageSpeed. 4.6 ★ App Store. I write maintainable code that holds at 500K+ users.",color:"#a78bfa"},
];
const METRICS=[
  {val:"$390K+",label:"Annual Cost Savings"},{val:"500K+",label:"Active Users"},
  {val:"150%",label:"Engagement Increase"},{val:"35%",label:"API Call Reduction"},
];

export default function About(){
  const[ref,vis]=useIV();
  const A=(i)=>({initial:{opacity:0,y:26},animate:vis?{opacity:1,y:0}:{},transition:{delay:i*.1,duration:.6,ease:[.22,1,.36,1]}});
  return(
    <section id="about" ref={ref} style={{padding:"clamp(64px,10vw,120px) 24px"}}>
      <div style={{maxWidth:"1100px",margin:"0 auto"}}>
        <motion.div {...A(0)} style={{textAlign:"center",marginBottom:"clamp(40px,6vw,72px)"}}>
          <p style={{fontSize:"11px",textTransform:"uppercase",letterSpacing:".3em",color:"#22d3ee",fontFamily:"'Outfit',sans-serif",fontWeight:600,marginBottom:"12px"}}>Get to Know Me</p>
          <h2 style={{...GH,fontSize:"clamp(36px,6vw,64px)",lineHeight:1.1}}>About Me</h2>
        </motion.div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"48px",alignItems:"start"}}>
          <div>
            <motion.p {...A(1)} style={{fontFamily:"'Outfit',sans-serif",fontSize:"clamp(14px,1.8vw,16px)",color:"#64748b",lineHeight:1.85,marginBottom:"18px"}}>
              I'm a <span style={{color:"#22d3ee",fontWeight:600}}>Software Engineer</span> with <span style={{color:"#818cf8",fontWeight:600}}>4+ years</span> specialising in <span style={{color:"#22d3ee",fontWeight:600}}>React Native</span> and <span style={{color:"#22d3ee",fontWeight:600}}>React.js</span>. My time at <span style={{color:"#f1f5f9",fontWeight:700}}>6thStreet.com</span> taught me what it means to ship at scale — 500K+ users, 6 GCC countries, zero tolerance for downtime.
            </motion.p>
            <motion.p {...A(1.4)} style={{fontFamily:"'Outfit',sans-serif",fontSize:"clamp(14px,1.8vw,16px)",color:"#64748b",lineHeight:1.85,marginBottom:"36px"}}>
              I combine <span style={{color:"#a78bfa",fontWeight:600}}>AI-assisted development</span> (Cursor + Claude) with deep frontend expertise to move faster without cutting corners. Every line traces back to a <span style={{color:"#818cf8",fontWeight:600}}>measurable impact</span>.
            </motion.p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
              {METRICS.map(({val,label},i)=>(
                <motion.div key={label} {...A(2+i*.1)} style={GL()}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(34,211,238,0.38)";e.currentTarget.style.boxShadow="0 8px 28px rgba(34,211,238,0.09)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(34,211,238,0.15)";e.currentTarget.style.boxShadow="none";}}>
                  <div style={{...GH,fontSize:"clamp(20px,3vw,26px)",marginBottom:"4px"}}>{val}</div>
                  <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"12px",color:"#64748b"}}>{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
            {TRAITS.map(({icon,title,text,color},i)=>(
              <motion.div key={title} {...A(1+i*.18)} style={{...GL(color),display:"flex",gap:"16px",alignItems:"flex-start"}}
                whileHover={{scale:1.015}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=color+"48";e.currentTarget.style.boxShadow=`0 8px 32px ${color}16`;}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=color+"22";e.currentTarget.style.boxShadow="none";}}>
                <div style={{width:"44px",height:"44px",flexShrink:0,borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",background:color+"1a",border:`1px solid ${color}28`,fontSize:"22px"}}>{icon}</div>
                <div>
                  <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"15px",color:"#f1f5f9",marginBottom:"6px"}}>{title}</div>
                  <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"#64748b",lineHeight:1.7}}>{text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
