import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import emblem from "./assets/emblem.png";
import starSky from "./assets/starSky.jpg";
import elephant from "./assets/elephant.png";
import lion from "./assets/lionRock.png";
import sandDun1 from "./assets/sandDune1.png";
import sandDun2 from "./assets/sandDune2.png";
import sandDun3 from "./assets/sandDune3.png";
import stoneHouseSky from "./assets/stoneHouseSky.png";
import stoneHouse from "./assets/stoneHouse.png";
import "./App.css";
import {  useRef } from "react";
import { useScroll, useTransform, motion,  } from "framer-motion";

function App() {
  const ref = useRef();

  const { scrollYProgress } = useScroll();
  const textX =useTransform(scrollYProgress,[0,1], ["0%","30%"])
  
  
  return (

      <Parallax pages={5} ref={ref}>
        
        <ParallaxLayer //Star Sky 1
          factor={2}
          style={{
            backgroundImage: `url(${starSky})`,
            backgroundSize: "cover",
          }}
        >
        
        </ParallaxLayer>

        <ParallaxLayer // Hero Text
          onClick={() => ref.current.scrollTo(0.4)}
          offset={0}
          speed={2}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize:'8vh', color: "white" }}> رحلة شيقة تنتظرك في الاسفل</h1>
          <div className="arrow"></div>
        </ParallaxLayer>

        <ParallaxLayer //Star Sky 2
          offset={3.5}
          factor={1.5}
          style={{
            backgroundImage: `url(${starSky})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer //emblem
          offset={0.9}
          speed={1.3}
          style={{
            display: "flex",
            justifyContent: "center",
            placeItems: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              onClick={() => ref.current.scrollTo(1)}
              src={emblem}
              alt="emblem"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer //welcom to AlUla Text
          offset={1.1}
          factor={1}
          speed={3}
          style={{
            backgroundColor: "transparent",
            zIndex: "100",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "50%",
              //  background: 'linear-gradient(45deg, #33355f, #3a060c)', /* Adjust gradient colors */
              //  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
              //  backgroundColor:'grey',
              direction: "rtl",
              color: "#e9c69b",
            }}
          >
            <h1>مرحباً بكم في العلا.....</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer //lion
          offset={1.15}
          speed={0.1}
          style={{
            backgroundImage: `url(${elephant})`,
            backgroundSize: "100% 100%",
            zIndex: "100",
          }}
        ></ParallaxLayer>

        <ParallaxLayer //sandDun1
          offset={2}
          style={{
            backgroundImage: `url(${sandDun1})`,
            backgroundSize: "100% 100%",
            zIndex: "100",
          }}
        ></ParallaxLayer>

        <ParallaxLayer // sand dune Text
          offset={2}
          speed={1}
          style={{ display: "flex", justifyContent: "center", zIndex: "101" }}
        >
          <h3 style={{direction:'rtl'}}>حيث يكشف التاريخ ...</h3>
        </ParallaxLayer>

        <ParallaxLayer //sandDun2
          offset={2.09}
          speed={0.2}
          style={{
            backgroundImage: `url(${sandDun2})`,
            backgroundSize: "100% 100%",
            zIndex: "102",
          }}
        ></ParallaxLayer>

        <ParallaxLayer //sandDun3
          offset={2}
          speed={0.4}
          style={{
            backgroundImage: `url(${sandDun3})`,
            backgroundSize: "100% 100%",
            zIndex: "103",
          }}
        ></ParallaxLayer>

        <ParallaxLayer  //stoneHouse Sky
        onClick={()=> console.log(scrollYProgress)}
          offset={2.6}
          speed={0}
          style={{
            backgroundImage: `url(${stoneHouseSky})`,
            backgroundSize: "100% 103%",
            zIndex: "90",
          }}
        >
          <motion.h1 
          whileInView={{x: 750,opacity:1 }}
          initial={{ x:500 , opacity:0}}
          
          transition={{ease: "linear",
          duration: 4,x:{duration:2}}}
            style={{
             
              color: "black",
              fontSize: "5em",
              zIndex: "99",
              marginTop: "30%",
              transition: "all 2s ease-in-out",
            }}
          >
            أسرار الماضي 
          </motion.h1>
        </ParallaxLayer>
        <ParallaxLayer //stoneHouse
          offset={3}
          speed={0.2}
          style={{
            backgroundImage: `url(${stoneHouse})`,
            backgroundSize: "100% 101%",
            zIndex: "100",
          }}
        ></ParallaxLayer>

        <ParallaxLayer //lion
          offset={4}
          speed={0.5}
          style={{
            backgroundImage: `url(${lion})`,
            backgroundSize: "100% 100%",
            zIndex: "100",
          }}
        >
         <a href={"https://en.wikipedia.org/wiki/Al-Ula"}><motion.h1 
          whileInView={{x: 100,opacity:1 }}
          initial={{ x:750 , opacity:0}}
          
          transition={{ease: "linear",
          duration: 4,x:{duration:2}}}
            style={{
             
              color: "white",
              fontSize: "5em",
              zIndex: "99",
              marginTop: "30%",
              transition: "all 2s ease-in-out",
            }}
          >
            اضغط لتكتشف المزيد
          </motion.h1>
          </a> 
        </ParallaxLayer>
      </Parallax>
  );
}

export default App;
