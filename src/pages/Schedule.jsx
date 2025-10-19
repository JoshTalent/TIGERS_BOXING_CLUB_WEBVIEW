"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Filter, Clock, User, Calendar, CheckCircle, Star, Zap, Users, Award } from "lucide-react";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("All");
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedCoach, setSelectedCoach] = useState("All");

  const coaches = [
    { id: "coach1", name: "Marcus Johnson", specialty: "Technical Boxing" },
    { id: "coach2", name: "Sarah Chen", specialty: "Fitness & Conditioning" },
    { id: "coach3", name: "David Rodriguez", specialty: "Beginner Development" },
  ];

  const classTypes = [
    "Boxing Fundamentals",
    "Boxing for Fitness", 
    "Kids & Teens Boxing",
    "Advanced Competition",
    "Private 1-on-1 Training",
    "Open Gym"
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const scheduleData = [
    { 
      id: 1, 
      day: "Monday", 
      time: "6:00 AM - 7:00 AM", 
      duration: "60 mins",
      class: "Boxing Fundamentals", 
      coach: "Marcus Johnson",
      intensity: "Beginner",
      spots: 8
    },
    { 
      id: 2, 
      day: "Monday", 
      time: "7:00 AM - 8:00 AM", 
      duration: "60 mins",
      class: "Boxing for Fitness", 
      coach: "Sarah Chen",
      intensity: "All Levels",
      spots: 12
    },
    { 
      id: 3, 
      day: "Monday", 
      time: "4:00 PM - 5:00 PM", 
      duration: "60 mins",
      class: "Kids & Teens Boxing", 
      coach: "David Rodriguez",
      intensity: "Kids",
      spots: 10
    },
    { 
      id: 4, 
      day: "Tuesday", 
      time: "6:00 AM - 7:00 AM", 
      duration: "60 mins",
      class: "Advanced Competition", 
      coach: "Marcus Johnson",
      intensity: "Advanced",
      spots: 6
    },
    { 
      id: 5, 
      day: "Tuesday", 
      time: "5:00 PM - 6:00 PM", 
      duration: "60 mins",
      class: "Boxing for Fitness", 
      coach: "Sarah Chen",
      intensity: "All Levels",
      spots: 15
    },
    { 
      id: 6, 
      day: "Wednesday", 
      time: "6:00 AM - 7:00 AM", 
      duration: "60 mins",
      class: "Boxing Fundamentals", 
      coach: "David Rodriguez",
      intensity: "Beginner",
      spots: 8
    },
    { 
      id: 7, 
      day: "Wednesday", 
      time: "4:00 PM - 5:00 PM", 
      duration: "60 mins",
      class: "Kids & Teens Boxing", 
      coach: "David Rodriguez",
      intensity: "Teens",
      spots: 12
    },
    { 
      id: 8, 
      day: "Thursday", 
      time: "6:00 AM - 7:00 AM", 
      duration: "60 mins",
      class: "Advanced Competition", 
      coach: "Marcus Johnson",
      intensity: "Advanced",
      spots: 6
    },
    { 
      id: 9, 
      day: "Friday", 
      time: "6:00 AM - 7:00 AM", 
      duration: "60 mins",
      class: "Boxing for Fitness", 
      coach: "Sarah Chen",
      intensity: "All Levels",
      spots: 15
    },
    { 
      id: 10, 
      day: "Saturday", 
      time: "9:00 AM - 10:00 AM", 
      duration: "60 mins",
      class: "Open Gym", 
      coach: "All Coaches",
      intensity: "All Levels",
      spots: 20
    },
    { 
      id: 11, 
      day: "Saturday", 
      time: "10:00 AM - 11:00 AM", 
      duration: "60 mins",
      class: "Kids & Teens Boxing", 
      coach: "David Rodriguez",
      intensity: "Kids",
      spots: 12
    },
    { 
      id: 12, 
      day: "Sunday", 
      time: "9:00 AM - 10:00 AM", 
      duration: "60 mins",
      class: "Open Gym", 
      coach: "All Coaches",
      intensity: "All Levels",
      spots: 20
    },
  ];

  const pricingPlans = [
    { 
      plan: "Drop-in Rate", 
      price: "$25", 
      period: "per session",
      features: ["Single class access", "No commitment", "All class types"],
      popular: false,
      cta: "Book Single Class"
    },
    { 
      plan: "10-Class Pass", 
      price: "$200", 
      period: "valid for 3 months",
      features: ["10 classes", "Save $50", "All class types", "3-month validity"],
      popular: false,
      cta: "Buy 10-Class Pass"
    },
    { 
      plan: "Monthly Membership", 
      price: "$150", 
      period: "per month",
      features: ["Unlimited classes", "Best value", "All class types", "Free gym access", "Priority booking"],
      popular: true,
      cta: "Start Membership"
    },
    { 
      plan: "Kids & Teens Plan", 
      price: "$120", 
      period: "per month",
      features: ["Unlimited kids classes", "Age-appropriate training", "Progress tracking", "Parent updates"],
      popular: false,
      cta: "Enroll Child"
    },
  ];

  const filteredSchedule = scheduleData.filter(item => {
    return (selectedDay === "All" || item.day === selectedDay) &&
           (selectedClass === "All" || item.class === selectedClass) &&
           (selectedCoach === "All" || item.coach === selectedCoach);
  });

  const resetFilters = () => {
    setSelectedDay("All");
    setSelectedClass("All");
    setSelectedCoach("All");
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
              Schedule & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find your perfect training time and choose the plan that matches your boxing ambitions. 
              Book instantly online and start your journey today.
            </p>
            
            {/* Free Trial Promo */}
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 max-w-2xl mx-auto mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-white" />
                <span className="text-white font-bold text-lg">FREE TRIAL CLASS</span>
              </div>
              <p className="text-purple-100">
                Experience our training first-hand. No commitment, no credit card required.
              </p>
              <button className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Claim Free Trial
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Schedule Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Live Class <span className="text-purple-400">Schedule</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Filter by day, class type, or coach to find your perfect training session
            </p>
          </motion.div>

          {/* Filter Controls */}
          <motion.div
            className="bg-gray-900 rounded-2xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">Filter by:</span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <select 
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
                >
                  <option value="All">All Days</option>
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>

                <select 
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
                >
                  <option value="All">All Classes</option>
                  {classTypes.map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>

                <select 
                  value={selectedCoach}
                  onChange={(e) => setSelectedCoach(e.target.value)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
                >
                  <option value="All">All Coaches</option>
                  {coaches.map(coach => (
                    <option key={coach.id} value={coach.name}>{coach.name}</option>
                  ))}
                </select>

                <button 
                  onClick={resetFilters}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </motion.div>

          {/* Schedule Grid */}
          <div className="grid gap-4">
            {filteredSchedule.map((session, index) => (
              <motion.div
                key={session.id}
                className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-purple-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {session.day}
                      </span>
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {session.intensity}
                      </span>
                      <span className="text-green-400 text-sm font-semibold">
                        {session.spots} spots left
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {session.class}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-6 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{session.coach}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{session.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredSchedule.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <p className="text-gray-400 text-lg">No classes match your current filters.</p>
              <button 
                onClick={resetFilters}
                className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your <span className="text-purple-400">Plan</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Cancel anytime with our 30-day notice policy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/20 border-purple-500 scale-105' 
                    : 'bg-gray-900 border-gray-800 hover:border-purple-500/50'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.plan}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-gray-400">/{plan.period}</span>}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Policy Information */}
          <motion.div
            className="mt-16 bg-gray-900 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">📝 Membership Policies</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-400">
              <div>
                <strong className="text-white">No Initiation Fees</strong>
                <p className="text-sm mt-1">Start training immediately with no upfront costs</p>
              </div>
              <div>
                <strong className="text-white">30-Day Cancellation</strong>
                <p className="text-sm mt-1">Cancel anytime with 30 days written notice</p>
              </div>
              <div>
                <strong className="text-white">Free Trial Included</strong>
                <p className="text-sm mt-1">All memberships include one free trial class</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of members who transformed their fitness through boxing. 
              Book your first class today and experience the difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Your First Class
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
                Get Free Trial
              </button>
            </div>
            
            <p className="text-gray-500 mt-6 text-sm">
              💳 Secure Online Booking • 🔄 Flexible Scheduling • 🎯 All Levels Welcome • 💰 No Hidden Fees
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Schedule;