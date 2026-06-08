import{useState,useEffect,useRef}from"react";
import{motion,AnimatePresence}from"framer-motion";
import{NAV}from"../data";

export default function Navbar(){
  const[scrolled,setScrolled]=useState(false);
  const[hidden,setHidden]=useState(false);
  const[active,setActive]=useState("hero");
  const[open,setOpen]=useState(false);
  const last=useRef(0);

  useEffect(()=>{
    const fn=()=>{
      const y=window.scrollY;
      setScrolled(y>60);
      if(y>last.current+10&&y>250)setHidden(true);
      else if(y<last.current-10)setHidden(false);
      last.current=y;
    };
    window.addEventListener("scroll",fn,{passive:true});
    return()=>window.removeEventListener("scroll",fn);
  },[]);

  useEffect(()=>{
    const ob=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id);});
    },{threshold:.25,rootMargin:"-80px 0px -50% 0px"});
    NAV.forEach(({href})=>{const el=document.querySelector(href);if(el)ob.observe(el);});
    return()=>ob.disconnect();
  },[]);

  const go=href=>{
    setOpen(false);
    setTimeout(()=>document.querySelector(href)?.scrollIntoView({behavior:"smooth"}),80);
  };

  return(
    <>
      <motion.nav
        animate={{y:hidden?-120:0,opacity:hidden?0:1}}
        transition={{duration:.28,ease:"easeInOut"}}
        style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"14px 20px 0"}}
      >
        <div style={{maxWidth:"1100px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 22px",borderRadius:"16px",background:scrolled?"rgba(3,7,18,0.85)":"transparent",backdropFilter:scrolled?"blur(24px)":"none",WebkitBackdropFilter:scrolled?"blur(24px)":"none",border:scrolled?"1px solid rgba(34,211,238,0.13)":"1px solid transparent",boxShadow:scrolled?"0 8px 40px rgba(0,0,0,0.5)":"none",transition:"all .35s ease"}}>
          <button onClick={()=>go("#hero")} style={{display:"flex",alignItems:"center",gap:"10px",background:"none",border:"none",padding:0}}>
            <div style={{width:"34px",height:"34px",borderRadius:"10px",background:"linear-gradient(135deg,#22d3ee,#818cf8)",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"13px",color:"#030712"}}>MN</span>
            </div>
            <span style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"14px",color:"#f1f5f9"}}>Mayank Nasa</span>
          </button>
          <div id="nav-links-desktop" style={{display:"flex",gap:"4px",alignItems:"center"}}>
            {NAV.map(({label,href})=>{
              const id=href.slice(1);
              const isActive=active===id;
              return(
                <button key={href} onClick={()=>go(href)}
                  style={{position:"relative",padding:"7px 15px",borderRadius:"10px",background:"none",border:"none",fontFamily:"'Outfit',sans-serif",fontSize:"13px",fontWeight:isActive?600:400,color:isActive?"#22d3ee":"#64748b",transition:"color .2s"}}>
                  {label}
                  {isActive&&<motion.div layoutId="nav-pill" style={{position:"absolute",inset:0,borderRadius:"10px",background:"rgba(34,211,238,0.1)",border:"1px solid rgba(34,211,238,0.22)"}} transition={{type:"spring",stiffness:320,damping:32}}/>}
                </button>
              );
            })}
          </div>
          <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <div id="nav-hire-desktop">
              <motion.a href="mailto:mayanknasa4@gmail.com"
                style={{padding:"8px 20px",borderRadius:"10px",background:"linear-gradient(135deg,#22d3ee,#818cf8)",color:"#030712",fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:"13px",textDecoration:"none"}}
                whileHover={{scale:1.04}} whileTap={{scale:.96}}>
                Hire Me
              </motion.a>
            </div>
            <div id="nav-burger">
              <button onClick={()=>setOpen(x=>!x)}
                style={{width:"40px",height:"40px",borderRadius:"10px",border:"1px solid rgba(34,211,238,0.22)",background:"rgba(7,15,35,0.7)",backdropFilter:"blur(10px)",color:"#94a3b8",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                {open?"✕":"☰"}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {open&&(
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            style={{position:"fixed",inset:0,zIndex:99,background:"rgba(3,7,18,0.97)",backdropFilter:"blur(28px)",WebkitBackdropFilter:"blur(28px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"32px"}}>
            {NAV.map(({label,href},i)=>(
              <motion.button key={href} onClick={()=>go(href)}
                initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0}}
                transition={{delay:i*.06}}
                style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(30px,8vw,44px)",fontWeight:800,color:"#f1f5f9",background:"none",border:"none",transition:"color .2s"}}
                onMouseEnter={e=>e.currentTarget.style.color="#22d3ee"}
                onMouseLeave={e=>e.currentTarget.style.color="#f1f5f9"}>
                {label}
              </motion.button>
            ))}
            <motion.a href="mailto:mayanknasa4@gmail.com" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.4}}
              style={{marginTop:"12px",padding:"12px 32px",borderRadius:"12px",background:"linear-gradient(135deg,#22d3ee,#818cf8)",color:"#030712",fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:"15px",textDecoration:"none"}}>
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
