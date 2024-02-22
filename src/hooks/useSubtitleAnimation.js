import { useEffect } from 'react';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';

function useSubtitleAnimation(display_body, inView, className) {
   useEffect(() => {
      if (display_body && inView) {
         const titles = gsap.utils.toArray(className);
         titles.forEach(title => {
            const splitTitle = new SplitTextJS(title, { type: "chars" });
            const chars = splitTitle.chars;
            const tlx = gsap.timeline({ repeat: 0, repeatDelay: 0 });

            tlx.from(chars, {
               opacity: 0,
               yPercent: 60,
               stagger: 0.05,
               ease: 'back.out',
               duration: .3,
            });
         });
      }
   }, [display_body, inView, className]);
}

export default useSubtitleAnimation;
