import './App.css'
import Capsule from './components/Capsule/Index'
import Craft from './components/Craft/Index'
import { useEffect, useRef, useState } from 'react';
import Home from './components/Home/Index'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Para from './components/Paragraph/Index'
import Para2 from './components/Paragraph2/Index'
import Real from './components/Real/Index'
import Team from './components/Team/Index'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './components/Footer/Index';
import intro from './assets/video/intro.gif'

function App() {
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Set a timeout to hide the loader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true, 
      });

      return () => {
        scroll.destroy();
      };
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      const list = document.querySelectorAll('.section');
      list.forEach(function(e) {
        ScrollTrigger.create({
          trigger: e,
          start: "top 90%",
          end: "bottom 90%",
          onEnter: function() {
            document.body.setAttribute("theme", e.dataset.color);
          },
          onEnterBack: function() {
            document.body.setAttribute("theme", e.dataset.color);
          }
        });
      });
    }
  }, [loading]);

  return (
    <div>
      {loading ? (
        <div className="loader w-full h-screen flex items-center justify-center">
          <img src={intro} alt="Loading..." />
        </div>
      ) : (
        <div ref={scrollRef} className='section main w-full'>
          <Home />
          <Craft />
          <Real />
          <Team />
          <Para />
          <Para2 />
          <Capsule />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;