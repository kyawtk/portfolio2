import { forwardRef, useRef } from "react";
import "../styles/OnlineCourse.scss";
import { data as moduleData, bonusdata } from "./OnlineCourseData";
import { motion } from "framer-motion";
const OnlineCourse = () => {
  const pricingRef = useRef(null);
  function purchase() {
    pricingRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="container">
      <Hero purchase={purchase}></Hero>
      <section className="info-container">
        <Info></Info>
        <Modules></Modules>
        <Bonus></Bonus>
        <Pricing ref={pricingRef}></Pricing>
        <CopyRight></CopyRight>
      </section>
    </div>
  );
};

export default OnlineCourse;

function Hero({ purchase }) {
  return (
    <div className="hero">
      <p className="badge">Masterclass</p>
      <motion.h1
        initial={{
          y: 200,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
      >
        အီး‌ရောင်၀ါးသင်တန်း
      </motion.h1>
      <motion.p
        initial={{
          y: 200,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
      >
        Learn how to create high quality videos from start to finish.
      </motion.p>
      <motion.button
        whileHover={{
          scale: 1.2,
          rotate: 360,
        }}
        whileTap={{ scale: 0.9 }}
        className="btn btn-primary"
        onClick={purchase}
      >
        Purchase
      </motion.button>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
      <p className="badge">Next Generation</p>
      <article>
        <h2>Video content is taking over.</h2>
        <p>
          Video has become the most engaging format, and it's become more
          important than ever to take advantage of it. The Video Creator Course
          has been designed for beginners and professionals to take their video
          creation process to the next level.
        </p>
      </article>
      <article>
        <h2>Who is this course for?</h2>
        <p>
          This course has been designed for those interested in creating video
          content for platforms like YouTube, TikTok, Instagram and any other
          similar platforms.{" "}
        </p>
        <p>
          However anyone interested in the video creation process can benefit,
          whether you're a beginner, or a business looking to up the quality of
          your videos.
        </p>
      </article>
      <article>
        <h2>Save your time.</h2>
        <p>
          Years of learnings have been distilled into this course. Why spend
          years trying to figure this stuff out when you can have it all in one
          place.
        </p>
      </article>
    </div>
  );
}

function Modules() {
  const moduleRef = useRef(null);
  return (
    <div className="modules" ref={moduleRef}>
      <p className="badge">modular</p>
      <h2>What to Expect</h2>
      <p>We have split the course into different modules.</p>
      <div className="cards-container">
        {moduleData.map((data) => {
          return <InfoCard key={data.text} {...data} ref={moduleRef} />;
        })}
      </div>
    </div>
  );
}
function Bonus() {
  return (
    <div className="modules">
      <p className="badge">Bonus</p>
      <h2>Included with the full bundle</h2>
      <p>When you purchase the course. You also get these worthless shits.</p>
      <div className="cards-container">
        {bonusdata.map((data) => {
          return <InfoCard key={data.text} {...data} />;
        })}
      </div>
    </div>
  );
}

function InfoCard({ title, imgSrc, text }){
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 200,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ stiffness: 400, damping: 10 }}
      drag
      dragSnapToOrigin
      dragElastic={0.2}
      className="card"
    >
      <div className="card-img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="card-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </motion.div>
  );
}

const Pricing = forwardRef(function Pricing(props, ref) {
  
  return (
    <div className="pricing" ref={ref} id="pricing">
      <PriceCard2></PriceCard2> <PriceCard></PriceCard>
      <PriceCard3></PriceCard3>
    </div>
  );
});

const PriceCard = () => {
  return (
    <motion.div 
    initial={{
      scale:0.1,
      opacity: 0.5,

    }}
    whileInView={{
      opacity:1,
      scale:1
    }}
    transition={{
      duration:0.5
    }}
    className="priceCard">
      <h3>The full Bundle</h3>
      <h2>
        $199 <small>USD</small>
      </h2>
      <ul>
        <li>ACcess to all modules</li>
        <li>Dunning Kruger effect</li>
        <li>Updates for additional modules</li>
        <li>Fb posts for begging</li>
        <li>All poverty preset packs</li>
        <li>Homeless community</li>
      </ul>
      <motion.button
       whileHover={{ scale: 1.2 }}
      className="btn btn-primary">Purchase</motion.button>
      <small>
        Learn the skills you need for video, and have them for life.
      </small>
    </motion.div>
  );
};
const PriceCard3 = () => {
  return (
    <motion.div
    initial={{
      scale:0.1,
      opacity: 0.5,

    }}
    whileInView={{
      opacity:1,
      scale:1
    }}
    transition={{
      duration:0.5
    }}
    className="priceCard">
      <h3>The Basics</h3>
      <h2>
        $149 <small>USD</small>
      </h2>
      <ul>
        <li>ACcess to all modules</li>
        <li>Dunning Kruger effect</li>

        <li>Homeless community</li>
      </ul>
      <motion.button  whileHover={{ scale: 1.2 }} className="btn btn-primary">Purchase</motion.button>
    </motion.div>
  );
};
const PriceCard2 = () => {
  return (
    <motion.div 
    initial={{
      scale:0.1,
      opacity: 0.5,

    }}
    whileInView={{
      opacity:1,
      scale:1
    }}
    transition={{
      duration:0.5
    }}
    className="priceCard">
      <h3>The Ultra</h3>
      <h2>
        $30,000 <small>USD</small>
      </h2>
      <p>
        We come to you. Our team will fly out to your location, and we will make
        your setup the best it can be. We handle it all for you, all the way
        from what gear to buy to setting it all up correctly.
      </p>
      <motion.button 
       whileHover={{ scale: 1.2 }}
      className="btn btn-primary">Pay Depostit ➡️</motion.button>
    </motion.div>
  );
};

function CopyRight() {
  return (
    <div className="copyRight">
      <small>Copy Rights Reserved @ 1980</small>
    </div>
  );
}
