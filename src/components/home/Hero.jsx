"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mouse, ArrowRight, Trophy, Users, Target, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { image1 , image12 ,image2} from "../../assets";

// Enhanced slides with imported background images
const slides = [
  {
    id: 1,
    bg: image12, // Your imported image
    title: "Elite Training Facility",
    subtitle: "World-Class Boxing Environment",
    stats: { value: "15+", label: "National Champions" }
  },
  {
    id: 2,
    bg: image1, // Your imported image
    title: "Professional Coaching",
    subtitle: "Expert Guidance & Mentorship",
    stats: { value: "12", label: "Years Experience" }
  },
  {
    id: 3,
    bg: image2, // Your imported image
    title: "Championship Results",
    subtitle: "Proven Track Record of Success",
    stats: { value: "50+", label: "Competition Wins" }
  },
];

// Enhanced typing text with multiple effects
const AdvancedTypingText = ({ texts, speed = 100, pause = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink(prev => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (index >= texts.length) return;

    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts, speed, pause]);

  return (
    <div className="inline-flex items-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold text-xl md:text-2xl">
        {texts[index].substring(0, subIndex)}
      </span>
      <span className={`w-0.5 h-8 bg-purple-400 ml-1 ${blink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} />
    </div>
  );
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 6000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  // Stats counter animation
  const Counter = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count}+</span>;
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white pt-20">
      {/* Enhanced Background Slides with Imported Images */}
      <AnimatePresence mode="wait">
        {slides.map((slide, idx) =>
          idx === current ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.bg})` }}
              />
              
              {/* Lighter Gradient Overlays for Better Visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-black/40" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-between h-full mt-20">
        {/* Left Content */}
        <div className="flex-1 max-w-4xl ml-8 lg:ml-20 xl:ml-32">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50 rounded-full px-6 py-3 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-purple-200 tracking-wide">
                RWANDA'S PREMIER BOXING CLUB
              </span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-tight"
              >
                TIGER<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                  BOXING
                </span><br />
                <span className="text-white drop-shadow-2xl">CLUB</span>
              </motion.h1>

              {/* Animated Tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-xl md:text-2xl text-gray-200 font-light drop-shadow-lg"
              >
                <AdvancedTypingText
                  texts={[
                    "Home of Rwanda's Strongest Fighters",
                    "Elite Coaching • Relentless Spirit • True Discipline",
                    "Where Power Meets Precision",
                  ]}
                  speed={80}
                  pause={2500}
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="max-w-2xl text-lg md:text-xl text-gray-200 leading-relaxed font-medium drop-shadow-lg"
            >
              At <span className="text-purple-300 font-semibold">Tiger Boxing Club</span>,
              we transform ambition into achievement. Through world-class training, 
              elite coaching, and unwavering discipline, we forge champions who dominate 
              in the ring and inspire beyond it.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="flex gap-8"
            >
              {[
                { icon: Trophy, value: 15, label: "Champions" },
                { icon: Users, value: 1000, label: "Members" },
                { icon: Target, value: 50, label: "Wins" },
                { icon: Clock, value: 12, label: "Years" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center backdrop-blur-sm bg-black/30 rounded-lg p-4 min-w-[100px]">
                  <stat.icon className="w-6 h-6 text-purple-300 mx-auto mb-2 drop-shadow-lg" />
                  <div className="text-2xl font-bold text-white drop-shadow-lg">
                    <Counter end={stat.value} />
                  </div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <Link
                to="/join"
                className="group relative px-12 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex items-center gap-3 drop-shadow-lg">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="group px-12 py-4 text-lg font-bold rounded-full border-2 border-purple-400 text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-500 transform hover:scale-105 backdrop-blur-sm bg-black/30"
              >
                <span className="flex items-center gap-3 drop-shadow-lg">
                  Free Trial Session
                  <Target className="w-5 h-5" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Slide Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="hidden lg:block flex-1 max-w-md mr-20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-right space-y-6"
            >
              <div className="bg-gradient-to-l from-purple-600/30 to-transparent p-8 rounded-2xl backdrop-blur-sm border border-purple-400/30 shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                  {slides[current].title}
                </h3>
                <p className="text-purple-200 text-lg mb-4 drop-shadow-lg">
                  {slides[current].subtitle}
                </p>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 drop-shadow-lg">
                  {slides[current].stats.value}
                </div>
                <div className="text-gray-300 uppercase tracking-wider text-sm font-semibold">
                  {slides[current].stats.label}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Enhanced Navigation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 z-20">
        {/* Slide Indicators */}
        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`group relative w-4 h-4 rounded-full transition-all duration-500 ${
                current === idx
                  ? "bg-gradient-to-r from-purple-400 to-pink-400 scale-125 shadow-lg shadow-purple-400/60"
                  : "bg-gray-500 hover:bg-purple-300"
              }`}
            >
              <div className={`absolute inset-0 rounded-full bg-white/30 animate-ping ${
                current === idx ? 'opacity-100' : 'opacity-0'
              }`} />
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-purple-400/60 flex items-center justify-center text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm bg-black/30 shadow-lg"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-purple-400/60 flex items-center justify-center text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm bg-black/30 shadow-lg"
          >
            →
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-purple-300">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Mouse className="w-6 h-6 drop-shadow-lg" />
          </motion.div>
          <div className="text-xs uppercase tracking-widest font-semibold rotate-90 origin-center translate-y-8 text-gray-300">
            Scroll
          </div>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 origin-left z-30 shadow-lg"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 6, ease: "linear" }}
        key={current}
      />
    </section>
  );
};

export default Hero;