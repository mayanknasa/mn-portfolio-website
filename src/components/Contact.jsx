import{useRef,useState,useEffect}from"react";
import{motion}from"framer-motion";
import emailjs from"@emailjs/browser";
import{FaGithub,FaLinkedin}from"react-icons/fa";
import{HiOutlineMail}from"react-icons/hi";

function useIV(){
  const ref=useRef();const[v,setV]=useState(false);
  useEffect(()=>{
    const ob=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true);},{threshold:.08});
    if(ref.current)ob.observe(ref.current);return()=>ob.disconnect();
  },[]);return[ref,v];
}

const GH={fontFamily:"'Syne',sans-serif",fontWeight:800,background:"linear-gradient(135deg,#22d3ee,#818cf8,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"};
const IB={width:"100%",padding:"13px 16px",borderRadius:"12px",border:"1px solid rgba(34,211,238,0.18)",background:"rgba(7,15,35,0.65)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",color:"#f1f5f9",fontFamily:"'Outfit',sans-serif",fontSize:"14px",outline:"none",transition:"border-color .2s,box-shadow .2s"};
const LK=[
  {Icon:HiOutlineMail,label:"Email",val:"mayanknasa4@gmail.com",href:"mailto:mayanknasa4@gmail.com",color:"#22d3ee"},
  {Icon:FaLinkedin,label:"LinkedIn",val:"linkedin.com/in/mayanknasa",href:"https://linkedin.com/in/mayanknasa",color:"#818cf8"},
  {Icon:FaGithub,label:"GitHub",val:"github.com/mayanknasa",href:"https://github.com/mayanknasa",color:"#a78bfa"},
];

export default function Contact(){
  const[ref,vis]=useIV();
  const fRef=useRef();
  const[form,setForm]=useState({name:"",email:"",message:""});
  const[status,setStatus]=useState("idle");
  const A=(d)=>({initial:{opacity:0,y:24},animate:vis?{opacity:1,y:0}:{},transition:{delay:d,duration:.6,ease:[.22,1,.36,1]}});

  const submit=e=>{
    e.preventDefault();setStatus("sending");
    emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",fRef.current,"YOUR_PUBLIC_KEY")
      .then(()=>{setStatus("success");setForm({name:"",email:"",message:""});setTimeout(()=>setStatus("idle"),5000);})
      .catch(()=>{setStatus("error");setTimeout(()=>setStatus("idle"),4000);});
  };

  return(
    <section id="contact" ref={ref} style={{padding:"clamp(64px,10vw,120px) 24px"}}>
      <div style={{maxWidth:"1000px",margin:"0 auto"}}>
        <motion.div {...A(0)} style={{textAlign:"center",marginBottom:"clamp(40px,6vw,72px)"}}>
          <p style={{fontSize:"11px",textTransform:"uppercase",letterSpacing:".3em",color:"#22d3ee",fontFamily:"'Outfit',sans-serif",fontWeight:600,marginBottom:"12px"}}>Get In Touch</p>
          <h2 style={{...GH,fontSize:"clamp(36px,6vw,64px)",lineHeight:1.1}}>Let's Build Together</h2>
          <p style={{fontFamily:"'Outfit',sans-serif",color:"#64748b",fontSize:"15px",marginTop:"14px",maxWidth:"420px",margin:"14px auto 0"}}>Open to freelance projects, full-time roles, and interesting collaborations.</p>
        </motion.div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"40px"}}>
          <motion.div {...A(.15)}>
            <span style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"7px 18px",borderRadius:"999px",border:"1px solid rgba(74,222,128,0.28)",background:"rgba(74,222,128,0.07)",color:"#86efac",fontSize:"12px",fontFamily:"'Outfit',sans-serif",fontWeight:500,marginBottom:"26px"}}>
              <span style={{width:"8px",height:"8px",borderRadius:"50%",background:"#4ade80",animation:"dotBlink 2s ease-in-out infinite",display:"inline-block"}}/>
              Available for freelance & full-time
            </span>
            <p style={{fontFamily:"'Outfit',sans-serif",color:"#64748b",fontSize:"14px",lineHeight:1.82,marginBottom:"28px"}}>Exploring new opportunities after 3.5 years at 6thStreet. Building with React or React Native? Let's talk.</p>
            <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
              {LK.map(({Icon,label,val,href,color})=>(
                <motion.a key={label} href={href} target={label!=="Email"?"_blank":undefined} rel="noreferrer"
                  style={{display:"flex",alignItems:"center",gap:"14px",padding:"14px 18px",borderRadius:"14px",background:"rgba(7,15,35,0.78)",backdropFilter:"blur(18px)",WebkitBackdropFilter:"blur(18px)",border:`1px solid ${color}20`,textDecoration:"none",transition:"all .22s"}}
                  whileHover={{x:5}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=color+"48";e.currentTarget.style.boxShadow=`0 6px 24px ${color}16`;}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=color+"20";e.currentTarget.style.boxShadow="none";}}>
                  <div style={{width:"40px",height:"40px",borderRadius:"11px",background:color+"1c",border:`1px solid ${color}2c`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <Icon size={17} style={{color}}/>
                  </div>
                  <div>
                    <div style={{fontSize:"10px",color:"#64748b",fontFamily:"'Outfit',sans-serif",textTransform:"uppercase",letterSpacing:".1em",fontWeight:600}}>{label}</div>
                    <div style={{fontSize:"13px",color:"#e2e8f0",fontFamily:"'Outfit',sans-serif",fontWeight:500,marginTop:"2px"}}>{val}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div {...A(.28)}>
            <form ref={fRef} onSubmit={submit} style={{background:"rgba(7,15,35,0.78)",backdropFilter:"blur(22px)",WebkitBackdropFilter:"blur(22px)",border:"1px solid rgba(34,211,238,0.14)",borderRadius:"20px",padding:"28px",display:"flex",flexDirection:"column",gap:"16px"}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px"}}>
                {[{n:"name",ph:"John Doe",lb:"Name"},{n:"email",ph:"you@example.com",lb:"Email",t:"email"}].map(({n,ph,lb,t})=>(
                  <div key={n}>
                    <label style={{display:"block",fontSize:"11px",color:"#64748b",fontFamily:"'Outfit',sans-serif",marginBottom:"7px",textTransform:"uppercase",letterSpacing:".08em",fontWeight:600}}>{lb}</label>
                    <input name={n} type={t||"text"} value={form[n]} placeholder={ph} required
                      onChange={e=>setForm({...form,[n]:e.target.value})} style={IB}
                      onFocus={e=>{e.target.style.borderColor="rgba(34,211,238,.52)";e.target.style.boxShadow="0 0 0 3px rgba(34,211,238,.07)";}}
                      onBlur={e=>{e.target.style.borderColor="rgba(34,211,238,.18)";e.target.style.boxShadow="none";}}/>
                  </div>
                ))}
              </div>
              <div>
                <label style={{display:"block",fontSize:"11px",color:"#64748b",fontFamily:"'Outfit',sans-serif",marginBottom:"7px",textTransform:"uppercase",letterSpacing:".08em",fontWeight:600}}>Message</label>
                <textarea name="message" rows={5} value={form.message} placeholder="Tell me about your project..." required
                  onChange={e=>setForm({...form,message:e.target.value})} style={{...IB,resize:"none"}}
                  onFocus={e=>{e.target.style.borderColor="rgba(34,211,238,.52)";e.target.style.boxShadow="0 0 0 3px rgba(34,211,238,.07)";}}
                  onBlur={e=>{e.target.style.borderColor="rgba(34,211,238,.18)";e.target.style.boxShadow="none";}}/>
              </div>
              {status==="success"&&<p style={{color:"#4ade80",fontSize:"13px",fontFamily:"'Outfit',sans-serif"}}>✓ Sent! I'll reply soon.</p>}
              {status==="error"&&<p style={{color:"#f87171",fontSize:"13px",fontFamily:"'Outfit',sans-serif"}}>✕ Failed — email me directly.</p>}
              <motion.button type="submit" disabled={status==="sending"}
                style={{padding:"14px",borderRadius:"12px",border:"none",background:"linear-gradient(135deg,#22d3ee,#818cf8)",color:"#030712",fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:"15px",cursor:status==="sending"?"not-allowed":"pointer",opacity:status==="sending"?.65:1}}
                whileHover={{scale:1.02}} whileTap={{scale:.97}}>
                {status==="sending"?"Sending...":"Send Message →"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
