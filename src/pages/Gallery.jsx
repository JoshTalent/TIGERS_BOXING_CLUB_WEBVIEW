"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image11,
  video1,
  video2,
} from "../assets";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryMedia = [
    // Class Action Shots
    {
      id: 1,
      type: "image",
      category: "class-action",
      src: image1,
      title: "Morning Boxing Fundamentals",
      description: "Members perfecting their technique in our 6 AM fundamentals class",
      date: "2024-01-15",
      featured: true,
    },
    {
      id: 2,
      type: "video",
      category: "class-action",
      src: video1,
      thumbnail: image3,
      title: "High-Energy Fitness Class",
      description: "Boxing for Fitness class in full swing with Coach Alice",
      date: "2024-01-10",
      featured: false,
    },
    {
      id: 3,
      type: "image",
      category: "class-action",
      src: image2,
      title: "Kids Boxing Session",
      description: "Young champions learning discipline and technique",
      date: "2024-01-12",
      featured: true,
    },

    // Facility & Equipment
    {
      id: 4,
      type: "image",
      category: "facility",
      src: image3,
      title: "Professional Boxing Ring",
      description: "Our competition-grade ring for sparring and training",
      date: "2024-01-08",
      featured: false,
    },
    {
      id: 5,
      type: "image",
      category: "facility",
      src: image4,
      title: "Heavy Bag Area",
      description: "20+ premium bags including aqua and traditional leather",
      date: "2024-01-05",
      featured: true,
    },
    {
      id: 6,
      type: "video",
      category: "facility",
      src: video2,
      thumbnail: image7,
      title: "Facility Virtual Tour",
      description: "Walk through our state-of-the-art training facility",
      date: "2024-01-03",
      featured: false,
    },

    // Member Success Stories
    {
      id: 7,
      type: "image",
      category: "success",
      src: image11,
      title: "Marie's 6-Month Transformation",
      description: "Lost 15kg and gained incredible confidence",
      date: "2024-01-18",
      featured: true,
    },
    {
      id: 8,
      type: "image",
      category: "success",
      src: image5,
      title: "David's Championship Journey",
      description: "From beginner to regional champion in 12 months",
      date: "2024-01-16",
      featured: false,
    },
    {
      id: 9,
      type: "video",
      category: "success",
      src: "https://player.vimeo.com/video/824804225?h=6c8d5d5a5f",
      thumbnail: image8,
      title: "John's Journey to National Competition",
      description: "From beginner to national competitor in 18 months",
      date: "2024-01-14",
      featured: true,
    },
  ];

  const openMedia = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  const navigateMedia = (direction) => {
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % galleryMedia.length;
    } else {
      newIndex = (currentIndex - 1 + galleryMedia.length) % galleryMedia.length;
    }
    setCurrentIndex(newIndex);
    setSelectedMedia(galleryMedia[newIndex]);
  };

  return (
    <>
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative py-28 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,40,200,0.1),transparent_50%)] z-0" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                Visual Legacy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Immerse yourself in the power, discipline, and transformation that defines 
              the Tiger Boxing Club experience through our curated visual journey.
            </p>

            {/* Enhanced Gallery Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { number: "2K+", label: "Premium Assets", accent: "from-purple-400 to-pink-400" },
                { number: "120+", label: "Success Stories", accent: "from-blue-400 to-cyan-400" },
                { number: "98%", label: "Member Satisfaction", accent: "from-green-400 to-emerald-400" },
                { number: "24/7", label: "Live Updates", accent: "from-orange-400 to-red-400" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent mb-3`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Gallery Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence>
              {galleryMedia.map((media, index) => (
                <motion.div
                  key={media.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group cursor-pointer relative"
                  onClick={() => openMedia(media, index)}
                >
                  <div className={`
                    relative overflow-hidden rounded-2xl bg-gray-900 aspect-square
                    ${media.featured ? "ring-2 ring-purple-500 ring-offset-2 ring-offset-black" : ""}
                  `}>
                    {/* Thumbnail */}
                    <img
                      src={media.type === "video" ? media.thumbnail : media.src}
                      alt={media.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-lg font-bold mb-2 truncate">
                          {media.title}
                        </h3>
                        <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                          {media.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-purple-400 text-xs font-semibold uppercase tracking-wide bg-purple-500/20 px-3 py-1 rounded-full">
                            {media.category.replace("-", " ")}
                          </span>
                          {media.type === "video" && (
                            <div className="flex items-center gap-2 text-sm text-gray-300 bg-black/50 px-3 py-1 rounded-full">
                              <Play className="w-3 h-3" />
                              <span>Play</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/80 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border border-gray-700/50">
                        {media.category.replace("-", " ")}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {media.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Enhanced Video Play Button */}
                    {media.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Play className="w-8 h-8 text-white ml-1" />
                        </motion.div>
                      </div>
                    )}

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Modal for Media View */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-6xl w-full max-h-[90vh]">
              {/* Enhanced Close Button */}
              <motion.button
                onClick={closeMedia}
                className="absolute -top-16 right-0 text-white hover:text-purple-400 transition-all duration-300 z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 border border-gray-700/50"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Enhanced Navigation Buttons */}
              {galleryMedia.length > 1 && (
                <>
                  <motion.button
                    onClick={() => navigateMedia("prev")}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-4 rounded-2xl hover:bg-purple-600 transition-all duration-300 z-10 backdrop-blur-sm border border-gray-700/50"
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    onClick={() => navigateMedia("next")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-4 rounded-2xl hover:bg-purple-600 transition-all duration-300 z-10 backdrop-blur-sm border border-gray-700/50"
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </>
              )}

              {/* Enhanced Media Content */}
              <motion.div
                key={selectedMedia.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800/50 shadow-2xl"
              >
                {selectedMedia.type === "image" ? (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                ) : (
                  <div className="aspect-video w-full bg-black">
                    <iframe
                      src={selectedMedia.src}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {/* Enhanced Media Info */}
                <div className="p-8 text-white bg-gradient-to-t from-black to-gray-900">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-3">
                        {selectedMedia.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {selectedMedia.description}
                      </p>
                    </div>
                    {selectedMedia.featured && (
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold ml-4 flex-shrink-0">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-800">
                    <div className="flex items-center gap-6">
                      <span className="text-purple-400 font-semibold uppercase tracking-wide text-xs">
                        {selectedMedia.category.replace("-", " ")}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span>
                        {new Date(selectedMedia.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="text-gray-500 text-xs uppercase tracking-wide">
                      {selectedMedia.type === 'video' ? 'Video Content' : 'High Resolution Image'}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Counter */}
              {galleryMedia.length > 1 && (
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50">
                  <span className="text-purple-400 font-semibold">{currentIndex + 1}</span>
                  <span className="text-gray-400 mx-2">of</span>
                  <span className="text-gray-300">{galleryMedia.length}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(120,40,200,0.15),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Ready to Write Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 block mt-2">
                Success Story?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the legacy of champions. Your transformation begins today at Tiger Boxing Club.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl shadow-purple-500/25 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Begin Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Private Tour
              </motion.button>
            </div>

            <p className="text-gray-500 text-sm mt-8">
              Limited spots available for our premium membership program
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;