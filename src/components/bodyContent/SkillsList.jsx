import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import '../../pages/about/About.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import SplitTextJS from "split-text-js";
import { GiBranchArrow } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);


function SkillsList() {
  const animationRef = useRef(null);
  const skillsNames = ['Creative Development', 'Front Engineering', 'Backend Development', 'Mobile Development', 'UI/UX Design', 'Database Management', 'API Integration', 'API Development', 'Creative Development', 'Front Engineering', 'Backend Development', 'Mobile Development', 'UI/UX Design', 'Database Management', 'API Integration', 'API Development', 'Creative Development', 'Front Engineering', 'Backend Development', 'Mobile Development', 'UI/UX Design', 'Database Management', 'API Integration', 'API Development', 'Creative Development', 'Front Engineering', 'Backend Development', 'Mobile Development', 'UI/UX Design', 'Database Management', 'API Integration', 'API Development', 'Creative Development', 'Front Engineering', 'Backend Development', 'Mobile Development', 'UI/UX Design', 'Database Management', 'API Integration', 'API Development', 'Creative Development', 'Front Engineering', 'Backend Development', 'Mobile Development', 'UI/UX Design', 'Database Management', 'API Integration', 'API Development', 'Creative Development', 'Front Engineering', 'Backend Development', 'Mobile Development', 'UI/UX Design', 'Database Management', 'API Integration', 'API Development'];

  useEffect(() => {
      const startAnimation = () => {
          const titles = gsap.utils.toArray(".single-skill");

          // Create a new timeline for each cycle of the animation
          const tl = gsap.timeline({
              onComplete: () => {
                  // When one cycle completes, immediately start another
                  animationRef.current = startAnimation();
              }
          });

          titles.forEach((title) => {
              const splitTitle = new SplitTextJS(title);

              tl.from(splitTitle.chars, {
                  opacity: 0,
                  y: 30,
                  rotateX: -20,
                  duration: 1,
              }, "<")
              .to(splitTitle.chars, {
                  opacity: 1, // Fade in to full visibility
                  duration: 1, // Duration of staying fully visible
              }, "<.5")
              .to(splitTitle.chars, {
                  opacity: 0,
                  y: -30,
                  rotateX: 20,
                  duration: 1,
              }, "<1");
          });

          return tl; // Return the timeline so it can be stored in ref
      };

      // Store the initial animation timeline in the ref
      animationRef.current = startAnimation();

      // Cleanup function to kill the animation when the component unmounts or dependencies change
      return () => {
          if (animationRef.current) {
              animationRef.current.kill();
          }
      };
  }, []); // Add dependencies if needed

  return (
      <div className="skills-list-container">
          <div className="skills-list-animation">
              {skillsNames.map((name, index) => (
                  <p key={index} className='single-skill'>{name}</p>
              ))}
          </div>
      </div>
  );
}

export default SkillsList;