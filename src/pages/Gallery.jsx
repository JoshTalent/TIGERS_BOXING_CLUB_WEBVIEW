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
  Users,
  Trophy,
  Calendar,
  Star,
  Heart,
} from "lucide-react";
import { image1, image2, image3, image4 ,image5,image6 ,image7 ,image8, image11,  video1 , video2 } from "../assets";
import { video } from "framer-motion/client";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: "all", name: "All", icon: Star },
    { id: "class-action", name: "Class Action Shots", icon: Users },
    { id: "facility", name: "Facility & Equipment", icon: Trophy },
    { id: "success", name: "Member Success Stories", icon: Heart },
    { id: "competition", name: "Competition Wins", icon: Trophy },
    { id: "social", name: "Social Events", icon: Calendar },
  ];

  const galleryMedia = [
    // Class Action Shots
    {
      id: 1,
      type: "image",
      category: "class-action",
      src: image1,
      title: "Morning Boxing Fundamentals",
      description:
        "Members perfecting their technique in our 6 AM fundamentals class",
      date: "2024-01-15",
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
    },
    {
      id: 3,
      type: "image",
      category: "class-action",
      src: image2,
      title: "Kids Boxing Session",
      description: "Young champions learning discipline and technique",
      date: "2024-01-12",
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
    },
    {
      id: 5,
      type: "image",
      category: "facility",
      src: image4,
      title: "Heavy Bag Area",
      description: "20+ premium bags including aqua and traditional leather",
      date: "2024-01-05",
    },
    {
      id: 6,
      type: "video",
      category: "facility",
      src: video2,
      thumbnail:
        image7,
      title: "Facility Virtual Tour",
      description: "Walk through our state-of-the-art training facility",
      date: "2024-01-03",
    },

    // Member Success Stories
    {
      id: 7,
      type: "image",
      category: "success",
      src:image11,
      title: "Marie's 6-Month Transformation",
      description: "Lost 15kg and gained incredible confidence",
      date: "2024-01-18",
    },
    {
      id: 7,
      type: "image",
      category: "success",
      src:image5,
      title: "Marie's 6-Month Transformation",
      description: "Lost 15kg and gained incredible confidence",
      date: "2024-01-18",
    },
    {
      id: 8,
      type: "video",
      category: "success",
      src: "https://player.vimeo.com/video/824804225?h=6c8d5d5a5f",
      thumbnail:
      image8,
      title: "John's Journey to National Competition",
      description: "From beginner to national competitor in 18 months",
      date: "2024-01-14",
    },

 
  ];

  const filteredMedia =
    selectedCategory === "All"
      ? galleryMedia
      : galleryMedia.filter((media) => media.category === selectedCategory);

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
      newIndex = (currentIndex + 1) % filteredMedia.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    }
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  return (
    <>
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative py-28 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the energy, community, and success stories that make
              Tiger Boxing Club special. Browse through our collection of
              memorable moments and achievements.
            </p>

            {/* Gallery Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { number: "200+", label: "Photos & Videos" },
                { number: "6", label: "Categories" },
                { number: "50+", label: "Success Stories" },
                { number: "24/7", label: "Updated Gallery" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-900 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() =>
                    setSelectedCategory(
                      category.id === "all" ? "All" : category.id
                    )
                  }
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory ===
                    (category.id === "all" ? "All" : category.id)
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredMedia.map((media, index) => (
                <motion.div
                  key={media.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                  onClick={() => openMedia(media, index)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-900 aspect-square">
                    {/* Thumbnail */}
                    <img
                      src={media.type === "video" ? media.thumbnail : media.src}
                      alt={media.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-bold mb-2">
                          {media.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3">
                          {media.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-purple-400 text-sm font-semibold capitalize">
                            {media.category.replace("-", " ")}
                          </span>
                          {media.type === "video" && (
                            <div className="flex items-center gap-1 text-sm text-gray-300">
                              <Play className="w-4 h-4" />
                              <span>Watch</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                        {media.category.replace("-", " ")}
                      </span>
                    </div>

                    {/* Video Play Button */}
                    {media.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredMedia.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-400 text-xl">
                No media found for this category.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                View All Media
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal for Media View */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-6xl max-h-[90vh] w-full">
              {/* Close Button */}
              <button
                onClick={closeMedia}
                className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors duration-200 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              {filteredMedia.length > 1 && (
                <>
                  <button
                    onClick={() => navigateMedia("prev")}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-purple-600 transition-all duration-200 z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => navigateMedia("next")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-purple-600 transition-all duration-200 z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Media Content */}
              <motion.div
                key={selectedMedia.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-gray-900 rounded-2xl overflow-hidden"
              >
                {selectedMedia.type === "image" ? (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                ) : (
                  <div className="aspect-video w-full">
                    <iframe
                      src={selectedMedia.src}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {/* Media Info */}
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedMedia.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {selectedMedia.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="capitalize">
                      {selectedMedia.category.replace("-", " ")}
                    </span>
                    <span>
                      {new Date(selectedMedia.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Counter */}
              {filteredMedia.length > 1 && (
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white text-sm">
                  {currentIndex + 1} / {filteredMedia.length}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our community and become part of the Tiger Boxing Club
              legacy. Your transformation could be our next featured success
              story!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
                Book Facility Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
