import{useRef,useState,useEffect}from"react";
import{motion,AnimatePresence}from"framer-motion";
import{PROJECTS,LIVE_PROJECTS}from"../data";

import IMG1  from"../assets/6thstreet.png";
import IMG2  from"../assets/6thstreetmobileapp.png";
import IMG3  from"../assets/Crocs.png";
import IMG4  from"../assets/Dunelondon.png";
import IMG5  from"../assets/Rituals.png";
import IMG6  from"../assets/Brainbooster.png";
import IMG7  from"../assets/Dollardoge.png";
import IMG8  from"../assets/Basesheba.png";
import IMG9  from"../assets/Weddinghouse.png";
import IMG10 from"../assets/Copyme.png";
import IMG11 from"../assets/Levelup.png";
const IMG12 ="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=400&auto=format&fit=crop";

const IMGS={1:IMG1,2:IMG2,3:IMG3,4:IMG4,5:IMG5,6:IMG6,7:IMG7,8:IMG8,9:IMG9,10:IMG10,11:IMG11,12:IMG12};

function useIV(){
  const ref=useRef();const[v,setV]=useState(false);
  useEffect(()=>{
    const ob=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true);},{threshold:.06});
    if(ref.current)ob.observe(ref.current);return()=>ob.disconnect();
  },[]);return[ref,v];
}

const GH={fontFamily:"'Syne',sans-serif",fontWeight:800,background:"linear-gradient(135deg,#22d3ee,#818cf8,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"};
const FILTERS=["All","AI","Mobile","Web"];

/* ── Featured card ───────────────────────────────────────────────────── */
function FeaturedCard({p,i,vis}){
  return(
    <motion.div key={p.title} layout
      initial={{opacity:0,y:28,scale:.95}} animate={vis?{opacity:1,y:0,scale:1}:{}} exit={{opacity:0,scale:.88}}
      transition={{delay:i*.07,duration:.42,ease:[.22,1,.36,1]}}
      style={{background:"rgba(7,15,35,0.78)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:`1px solid ${p.color}1e`,borderRadius:"18px",overflow:"hidden",transition:"border-color .25s,box-shadow .25s"}}
      whileHover={{scale:1.02}}
      onMouseEnter={e=>{e.currentTarget.style.borderColor=p.color+"52";e.currentTarget.style.boxShadow=`0 12px 48px ${p.color}18`;}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor=p.color+"1e";e.currentTarget.style.boxShadow="none";}}
    >
      <div style={{height:"3px",background:`linear-gradient(90deg,${p.color},${p.color}55)`}}/>
      <div style={{padding:"18px 20px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"10px"}}>
          <span style={{padding:"3px 10px",borderRadius:"7px",fontSize:"11px",fontFamily:"'Syne',sans-serif",fontWeight:700,background:p.color+"1a",color:p.color,border:`1px solid ${p.color}2a`}}>{p.metric}</span>
          {p.featured&&<span style={{padding:"2px 8px",borderRadius:"5px",fontSize:"10px",fontFamily:"'Outfit',sans-serif",color:"#64748b",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.09)"}}>Featured</span>}
        </div>
        <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"clamp(15px,2vw,17px)",color:"#f1f5f9",marginBottom:"8px",lineHeight:1.3}}>{p.title}</div>
        <p style={{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"#64748b",lineHeight:1.7,marginBottom:"14px"}}>{p.desc}</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
          {p.tags.map(t=><span key={t} style={{padding:"3px 8px",borderRadius:"5px",fontSize:"11px",fontFamily:"'Outfit',sans-serif",color:"#475569",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)"}}>{t}</span>)}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Live project image card ─────────────────────────────────────────── */
function LiveCard({p,i,vis}){
  const[hov,setHov]=useState(false);
  const img=IMGS[p.id];
  return(
    <motion.div
      initial={{opacity:0,y:24}} animate={vis?{opacity:1,y:0}:{}}
      transition={{delay:i*.05,duration:.4,ease:[.22,1,.36,1]}}
      style={{position:"relative",borderRadius:"14px",overflow:"hidden",border:"1px solid rgba(34,211,238,0.12)",cursor:"pointer",aspectRatio:"16/10",background:"#0a1628"}}
      whileHover={{scale:1.03}}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
    >
      {/* screenshot */}
      <img
        src={img}
        alt={p.title}
        style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",display:"block",transition:"transform .4s ease",transform:hov?"scale(1.06)":"scale(1)"}}
      />

      {/* overlay on hover */}
      <div style={{position:"absolute",inset:0,background:"rgba(3,7,18,0.88)",backdropFilter:"blur(4px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",opacity:hov?1:0,transition:"opacity .3s ease",padding:"16px"}}>
        <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"clamp(13px,2vw,15px)",color:"#f1f5f9",textAlign:"center",lineHeight:1.3}}>{p.title}</div>
        <p style={{fontFamily:"'Outfit',sans-serif",fontSize:"12px",color:"#94a3b8",textAlign:"center",lineHeight:1.6,maxWidth:"200px"}}>{p.desc}</p>
        <motion.a
          href={p.demo}
          target={p.demo!=="#"?"_blank":undefined}
          rel="noreferrer"
          onClick={e=>p.demo==="#"&&e.preventDefault()}
          style={{display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 18px",borderRadius:"999px",background:"linear-gradient(135deg,#22d3ee,#818cf8)",color:"#030712",fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:"12px",textDecoration:"none"}}
          whileHover={{scale:1.05}} whileTap={{scale:.96}}
        >
          {p.demo==="#"?"View GitHub →":"Live Demo →"}
        </motion.a>
      </div>

      {/* always-visible bottom label */}
      <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"10px 14px",background:"linear-gradient(transparent,rgba(3,7,18,0.95))",opacity:hov?0:1,transition:"opacity .3s ease"}}>
        <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"12px",color:"#f1f5f9"}}>{p.title}</div>
        <span style={{fontSize:"10px",fontFamily:"'Outfit',sans-serif",color:"#64748b",textTransform:"uppercase",letterSpacing:".08em"}}>{p.cat}</span>
      </div>
    </motion.div>
  );
}

/* ── Main component ──────────────────────────────────────────────────── */
export default function Projects(){
  const[ref,vis]=useIV();
  const[filter,setFilter]=useState("All");
  const featured=PROJECTS.filter(p=>filter==="All"||p.cat===filter);
  const live=LIVE_PROJECTS.filter(p=>filter==="All"||p.cat===filter);

  return(
    <section id="projects" ref={ref} style={{ padding: "clamp(72px,8vw,100px) clamp(24px,6vw,80px)" }}>
      <div style={{maxWidth:"1100px",margin:"0 auto"}}>

        {/* Header */}
        <motion.div initial={{opacity:0,y:20}} animate={vis?{opacity:1,y:0}:{}} transition={{duration:.5}}
          style={{ marginBottom:"48px" }}>
          <div className="sec-num">04 — Projects</div>
          <h2 style={{ fontSize:"clamp(48px,7vw,88px)", lineHeight:.95 }}>Selected<br/>Work.</h2>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{opacity:0,y:12}} animate={vis?{opacity:1,y:0}:{}} transition={{delay:.2}} style={{display:"flex",justifyContent:"center",gap:"8px",marginBottom:"40px",flexWrap:"wrap"}}>
          {FILTERS.map(f=>(
            <button key={f} onClick={()=>setFilter(f)} style={{position:"relative",padding:"8px 24px",borderRadius:"999px",border:"none",background:"transparent",fontFamily:"'Outfit',sans-serif",fontSize:"13px",fontWeight:filter===f?700:400,color:filter===f?"#030712":"#64748b",overflow:"hidden",transition:"color .2s"}}>
              {filter===f&&<motion.div layoutId="fp" style={{position:"absolute",inset:0,borderRadius:"999px",background:"linear-gradient(135deg,#22d3ee,#818cf8)"}} transition={{type:"spring",stiffness:300,damping:30}}/>}
              {filter!==f&&<div style={{position:"absolute",inset:0,border:"1px solid rgba(34,211,238,0.2)",borderRadius:"999px"}}/>}
              <span style={{position:"relative",zIndex:1}}>{f}</span>
            </button>
          ))}
        </motion.div>

        {/* ── Featured cards ── */}
        {featured.length>0&&(
          <>
            <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px"}}>
              <div style={{flex:1,height:"1px",background:"rgba(34,211,238,0.1)"}}/>
              <span style={{fontSize:"11px",fontFamily:"'Outfit',sans-serif",fontWeight:600,color:"#64748b",textTransform:"uppercase",letterSpacing:".15em",whiteSpace:"nowrap"}}>Professional Highlights</span>
              <div style={{flex:1,height:"1px",background:"rgba(34,211,238,0.1)"}}/>
            </div>
            <motion.div layout style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"16px",marginBottom:"56px"}}>
              <AnimatePresence mode="popLayout">
                {featured.map((p,i)=><FeaturedCard key={p.title} p={p} i={i} vis={vis}/>)}
              </AnimatePresence>
            </motion.div>
          </>
        )}

        {/* ── Live projects image grid ── */}
        {live.length>0&&(
          <>
            <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px"}}>
              <div style={{flex:1,height:"1px",background:"rgba(34,211,238,0.1)"}}/>
              <span style={{fontSize:"11px",fontFamily:"'Outfit',sans-serif",fontWeight:600,color:"#64748b",textTransform:"uppercase",letterSpacing:".15em",whiteSpace:"nowrap"}}>Live Projects</span>
              <div style={{flex:1,height:"1px",background:"rgba(34,211,238,0.1)"}}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"14px"}}>
              <AnimatePresence mode="popLayout">
                {live.map((p,i)=><LiveCard key={p.id} p={p} i={i} vis={vis}/>)}
              </AnimatePresence>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
