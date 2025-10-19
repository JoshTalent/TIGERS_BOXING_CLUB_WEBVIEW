"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, User, Clock, ArrowRight, Search, TrendingUp, Heart, Dumbbell, Utensils, Users } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "fitness", name: "Fitness & Weight Loss" },
    { id: "technique", name: "Boxing Technique" },
    { id: "nutrition", name: "Nutrition" },
    { id: "success", name: "Success Stories" },
    { id: "beginners", name: "Beginner Guides" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 Benefits of Boxing for Weight Loss",
      excerpt: "Discover how boxing can help you burn up to 800 calories per session while building lean muscle and boosting metabolism.",
      category: "fitness",
      readTime: "5 min read",
      author: "Alice Kamali",
      date: "2024-01-20",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1170&auto=format&fit=crop",
      featured: true,
      slug: "boxing-weight-loss-benefits"
    },
    {
      id: 2,
      title: "How to Properly Wrap Your Hands: A Step-by-Step Guide",
      excerpt: "Learn the correct way to wrap your hands to prevent injuries and maximize punching power during training.",
      category: "technique",
      readTime: "4 min read",
      author: "Olivier The Coach",
      date: "2024-01-18",
      image: "https://images.unsplash.com/photo-1589984662646-e7b2e5e3b4e6?q=80&w=1170&auto=format&fit=crop",
      featured: true,
      slug: "how-to-wrap-hands"
    },
    {
      id: 3,
      title: "Nutrition Tips for Boxers: Fueling Your Training",
      excerpt: "Essential nutrition strategies to optimize performance, recovery, and weight management for boxers.",
      category: "nutrition",
      readTime: "6 min read",
      author: "Sophie Niyonsaba",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1490645935967-10de6b170d1b?q=80&w=1170&auto=format&fit=crop",
      featured: false,
      slug: "nutrition-tips-for-boxers"
    },
    {
      id: 4,
      title: "Meet Marie: From Beginner to National Competitor in 18 Months",
      excerpt: "Inspiring journey of how Marie transformed her life through boxing and became a national-level competitor.",
      category: "success",
      readTime: "8 min read",
      author: "Jean Claude",
      date: "2024-01-12",
      image: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?q=80&w=1170&auto=format&fit=crop",
      featured: true,
      slug: "marie-success-story"
    },
    {
      id: 5,
      title: "What to Expect in Your First Boxing Class",
      excerpt: "A complete guide for beginners on what to bring, what to wear, and what happens during your first boxing session.",
      category: "beginners",
      readTime: "4 min read",
      author: "David Rodriguez",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1170&auto=format&fit=crop",
      featured: false,
      slug: "first-boxing-class-guide"
    },
    {
      id: 6,
      title: "The Mental Benefits of Boxing: More Than Just Physical",
      excerpt: "Explore how boxing training can reduce stress, build confidence, and improve mental resilience.",
      category: "fitness",
      readTime: "5 min read",
      author: "Alice Kamali",
      date: "2024-01-08",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1170&auto=format&fit=crop",
      featured: false,
      slug: "mental-benefits-of-boxing"
    },
    {
      id: 7,
      title: "Essential Boxing Equipment for Beginners",
      excerpt: "Your complete checklist of must-have boxing gear and what to look for when making purchases.",
      category: "beginners",
      readTime: "6 min read",
      author: "Olivier The Coach",
      date: "2024-01-05",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1170&auto=format&fit=crop",
      featured: false,
      slug: "beginner-boxing-equipment"
    },
    {
      id: 8,
      title: "Recovery Strategies for Boxers: Maximize Your Gains",
      excerpt: "Learn proper recovery techniques including stretching, nutrition, and rest to improve performance.",
      category: "fitness",
      readTime: "7 min read",
      author: "Sophie Niyonsaba",
      date: "2024-01-03",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1220&auto=format&fit=crop",
      featured: false,
      slug: "boxing-recovery-strategies"
    },
  ];

  const popularPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case "fitness": return TrendingUp;
      case "technique": return Dumbbell;
      case "nutrition": return Utensils;
      case "success": return Heart;
      case "beginners": return Users;
      default: return TrendingUp;
    }
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
              Tiger Boxing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Expert insights, training tips, and inspiring stories from Rwanda's premier boxing community. 
              Your ultimate resource for boxing knowledge and fitness advice.
            </p>
            
            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, tips, and guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800 text-white pl-12 pr-4 py-4 rounded-2xl border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content - 2/3 width */}
            <div className="lg:w-2/3">
              {/* Category Filter */}
              <motion.div
                className="flex flex-wrap gap-3 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </motion.div>

              {/* Featured Posts */}
              {selectedCategory === "All" && (
                <motion.div
                  className="mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                    Featured Articles
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {popularPosts.map((post, index) => (
                      <motion.article
                        key={post.id}
                        className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group border border-gray-800"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Featured
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                            {post.title}
                          </h3>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <User className="w-4 h-4" />
                              By {post.author}
                            </div>
                            <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold">
                              Read More
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* All Posts Grid */}
              <motion.div
                className="grid gap-8"
                layout
              >
                <h2 className="text-3xl font-bold text-white mb-8">
                  {selectedCategory === "All" ? "All Articles" : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                
                {filteredPosts.map((post, index) => {
                  const CategoryIcon = getCategoryIcon(post.category);
                  return (
                    <motion.article
                      key={post.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-800 hover:border-purple-500/30"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
                              <CategoryIcon className="w-4 h-4 text-purple-400" />
                              <span className="text-sm text-gray-300 capitalize">
                                {post.category}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </div>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                            {post.title}
                          </h3>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <User className="w-4 h-4" />
                              By {post.author}
                            </div>
                            <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold">
                              Read More
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}

                {filteredPosts.length === 0 && (
                  <motion.div
                    className="text-center py-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p className="text-gray-400 text-xl mb-4">No articles found matching your criteria.</p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("All");
                      }}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300"
                    >
                      View All Articles
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Sidebar - 1/3 width */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* About Blog */}
                <motion.div
                  className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">About Our Blog</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your trusted source for boxing expertise, fitness tips, and inspiring stories. 
                    Written by certified coaches and fitness professionals.
                  </p>
                </motion.div>

                {/* Categories */}
                <motion.div
                  className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                  <div className="space-y-3">
                    {categories.filter(cat => cat.id !== "all").map((category) => {
                      const Icon = getCategoryIcon(category.id);
                      const postCount = blogPosts.filter(post => post.category === category.id).length;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center justify-between w-full p-3 rounded-lg transition-all duration-300 ${
                            selectedCategory === category.id
                              ? "bg-purple-600 text-white"
                              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-4 h-4" />
                            <span>{category.name}</span>
                          </div>
                          <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-sm">
                            {postCount}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                  className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                  <p className="text-purple-100 mb-4">
                    Get the latest boxing tips and success stories delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-white/20 text-white placeholder-purple-200 px-4 py-3 rounded-lg border border-white/30 focus:outline-none focus:border-white"
                    />
                    <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                      Subscribe Now
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Put Knowledge into Action?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your reading into results. Join our community and experience 
              professional boxing training with expert coaches.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Free Trial
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
                Meet Our Coaches
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;