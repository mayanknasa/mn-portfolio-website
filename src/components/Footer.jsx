import{FaGithub,FaLinkedin}from"react-icons/fa";
import{HiOutlineMail}from"react-icons/hi";
export default function Footer(){
  return(
    <footer style={{
      borderTop: "1px solid rgba(34,211,238,0.12)",
      padding: "28px 24px",
      position: "relative",
    }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "200px", height: "1px", background: "linear-gradient(90deg,transparent,#22d3ee,transparent)" }} />
      <div style={{maxWidth:"1100px",margin:"0 auto",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"16px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"30px",height:"30px",borderRadius:"99px",background:"linear-gradient(135deg,#22d3ee,#818cf8)",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"11px",color:"#030712"}}>MN</span>
          </div>
          <span style={{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"#475569"}}>© {new Date().getFullYear()} Mayank Nasa · Built with React + Framer Motion</span>
        </div>
        <div style={{display:"flex",gap:"16px"}}>
          {[{h:"https://github.com/mayanknasa",I:FaGithub},{h:"https://linkedin.com/in/mayanknasa",I:FaLinkedin},{h:"mailto:mayanknasa4@gmail.com",I:HiOutlineMail}].map(({h,I},k)=>(
            <a key={k} href={h} target="_blank" rel="noreferrer" style={{color:"#475569",transition:"color .2s"}}
              onMouseEnter={e=>e.currentTarget.style.color="#22d3ee"} onMouseLeave={e=>e.currentTarget.style.color="#475569"}>
              <I size={17}/>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
