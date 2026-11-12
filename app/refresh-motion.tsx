'use client';
import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function RefreshMotion(){useEffect(()=>{const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{gsap.from('.fr-hero-photo img',{scale:1.045,duration:1.4,ease:'power2.out'});document.querySelectorAll('.fr-card-image img').forEach(el=>gsap.from(el,{scale:1.03,duration:.7,scrollTrigger:{trigger:el,start:'top 94%',once:true}}));if(window.innerWidth>1100)document.querySelectorAll('.fr-pin').forEach(el=>ScrollTrigger.create({trigger:el,start:'top 140px',endTrigger:'.fr-process-items',end:'bottom 470px',pin:true,pinSpacing:false}));});return()=>mm.revert();},[]);return null;}
