import"./index.css";
import{lazy,Suspense}from"react";
import Loader from"./components/Loader";
import ScrollBar from"./components/ScrollBar";
import Cursor from"./components/Cursor";
import BackTop from"./components/BackTop";
import Navbar from"./components/Navbar";
const Hero=lazy(()=>import("./components/Hero"));
const About=lazy(()=>import("./components/About"));
const Skills=lazy(()=>import("./components/Skills"));
const Experience=lazy(()=>import("./components/Experience"));
const Projects=lazy(()=>import("./components/Projects"));
const Contact=lazy(()=>import("./components/Contact"));
const Footer=lazy(()=>import("./components/Footer"));

export default function App(){
  return(
    <div style={{background:"#030712",minHeight:"100vh",color:"#f1f5f9",fontFamily:"'Outfit',sans-serif",overflowX:"hidden",position:"relative"}}>
      <Loader/><ScrollBar/><Cursor/><BackTop/>
      <div style={{position:"fixed",top:"-10%",left:"50%",transform:"translateX(-50%)",width:"1000px",height:"800px",borderRadius:"50%",background:"radial-gradient(ellipse,rgba(34,211,238,0.1) 0%,rgba(34,211,238,0.03) 40%,transparent 70%)",pointerEvents:"none",zIndex:0,animation:"heroPulse 8s ease-in-out infinite"}}/>
      <div style={{position:"fixed",bottom:"10%",right:"-5%",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(ellipse,rgba(167,139,250,0.07) 0%,transparent 70%)",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"fixed",top:"45%",left:"-5%",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(ellipse,rgba(129,140,248,0.06) 0%,transparent 70%)",pointerEvents:"none",zIndex:0}}/>
      <main style={{position:"relative",zIndex:1}}>
        <Navbar/>
        <Suspense fallback={<div style={{height:"100vh"}}/>}>
          <Hero/><About/><Skills/><Experience/><Projects/><Contact/><Footer/>
        </Suspense>
      </main>
    </div>
  );
}
