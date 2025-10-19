"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Award, Clock, Users, Target, Heart, Star, Trophy, CheckCircle } from "lucide-react";

const coaches = [
  {
    name: "Olivier The Coach",
    role: "Head Boxing Coach & Founder",
    expertise: "Boxing Fundamentals, Advanced Competition",
    specialties: ["Technical Boxing", "Fight Preparation", "Advanced Techniques"],
    image: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=1170&auto=format&fit=crop",
    credentials: [
      "Former National Champion (2012-2015)",
      "Level 4 Certified Boxing Coach",
      "15+ Years Coaching Experience",
      "Sports Science Degree"
    ],
    experience: "15+ years",
    philosophy: "I believe boxing is more than a sport—it's a vehicle for personal transformation. Every punch thrown with proper technique builds not just physical strength, but mental resilience and character.",
    bio: "Olivier started his boxing journey at age 14 and quickly rose through amateur ranks to become national champion. After retiring from competition, he dedicated his life to coaching and founded Tiger Boxing Club to share his passion with the next generation of fighters.",
    funFact: "Can recite every Rocky movie line while demonstrating perfect boxing form",
    stats: {
      championsTrained: 25,
      yearsExperience: 15,
      successRate: "98%"
    }
  },
  {
    name: "Alice Kamali",
    role: "Fitness & Conditioning Specialist",
    expertise: "Boxing for Fitness, Strength & Conditioning",
    specialties: ["Weight Loss Programs", "Cardio Conditioning", "Strength Training"],
    image: "https://images.unsplash.com/photo-1619751296747-10dee6e1d46?q=80&w=1170&auto=format&fit=crop",
    credentials: [
      "Certified Personal Trainer (NASM)",
      "Sports Nutrition Specialist",
      "8+ Years Fitness Coaching",
      "Kinesiology Degree"
    ],
    experience: "8+ years",
    philosophy: "Fitness should be empowering and enjoyable. I combine boxing techniques with smart conditioning to help people discover their strength and achieve their health goals in a fun, sustainable way.",
    bio: "Alice transitioned from competitive athletics to fitness coaching after discovering the transformative power of boxing. She specializes in making boxing accessible for fitness enthusiasts of all levels.",
    funFact: "Once trained a 70-year-old grandmother who went on to complete her first 5K",
    stats: {
      clientsTransformed: 300,
      yearsExperience: 8,
      successRate: "95%"
    }
  },
  {
    name: "Jean Claude",
    role: "Youth Development Coach",
    expertise: "Kids & Teens Boxing, Character Building",
    specialties: ["Youth Technique", "Bullying Prevention", "Confidence Building"],
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1170&auto=format&fit=crop",
    credentials: [
      "Youth Coaching Certified",
      "Child Psychology Background",
      "10+ Years Youth Training",
      "First Aid & Safety Certified"
    ],
    experience: "10+ years",
    philosophy: "Every child deserves to feel strong and confident. I use boxing as a tool to teach discipline, respect, and resilience while ensuring a safe, positive environment for growth.",
    bio: "Jean Claude has dedicated his career to youth development through sports. His patient, encouraging approach has helped hundreds of young people build confidence and learn valuable life skills.",
    funFact: "Can make boxing mitts look like cartoon characters to engage younger students",
    stats: {
      kidsTrained: 500,
      yearsExperience: 10,
      successRate: "99%"
    }
  },
  {
    name: "Sophie Niyonsaba",
    role: "Private Training Specialist",
    expertise: "Private 1-on-1 Training, Technical Refinement",
    specialties: ["Personalized Programs", "Technique Mastery", "Goal-Specific Training"],
    image: "https://images.unsplash.com/photo-1554284126-4e48b7c172c5?q=80&w=1170&auto=format&fit=crop",
    credentials: [
      "Elite Performance Coach",
      "Biomechanics Specialist",
      "12+ Years Private Coaching",
      "Multiple Certification Holder"
    ],
    experience: "12+ years",
    philosophy: "Personalized attention unlocks potential. I believe in tailoring every session to the individual's goals, learning style, and pace to ensure maximum progress and satisfaction.",
    bio: "Sophie's meticulous approach to technique and personalized training has made her the go-to coach for clients seeking specific results, from beginners to professional athletes.",
    funFact: "Can identify and correct technique flaws just by listening to the sound of punches on the bag",
    stats: {
      privateClients: 200,
      yearsExperience: 12,
      successRate: "100%"
    }
  },
];

const Coaches = () => {
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
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Expert Coaches</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Certified professionals dedicated to your success. Each coach brings unique expertise, 
              proven experience, and a passion for helping you achieve your boxing and fitness goals.
            </p>
            
            {/* Stats Overview */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { number: "4", label: "Expert Coaches" },
                { number: "45+", label: "Years Combined Experience" },
                { number: "1000+", label: "Members Trained" },
                { number: "98%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coaches Grid Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Coaching <span className="text-purple-400">Team</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each coach brings specialized skills and a unique approach to help you reach your full potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {coaches.map((coach, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Coach Image */}
                  <div className="lg:w-2/5 relative">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-purple-600 rounded-full p-2">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Coach Details */}
                  <div className="lg:w-3/5 p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{coach.name}</h3>
                      <p className="text-purple-400 font-semibold mb-3">{coach.role}</p>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{coach.experience}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{coach.stats.successRate} Success Rate</span>
                        </div>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-purple-400" />
                        Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-700"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Credentials */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-purple-400" />
                        Credentials & Experience
                      </h4>
                      <div className="space-y-2">
                        {coach.credentials.map((credential, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{credential}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Coaching Philosophy */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Heart className="w-4 h-4 text-purple-400" />
                        Coaching Philosophy
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed italic">
                        "{coach.philosophy}"
                      </p>
                    </div>

                    {/* Fun Fact */}
                    <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                      <h4 className="text-white font-semibold mb-2 text-sm">🎯 Fun Fact</h4>
                      <p className="text-gray-300 text-sm">{coach.funFact}</p>
                    </div>

                    {/* Stats & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-6 text-center">
                        <div>
                          <div className="text-xl font-bold text-white">{coach.stats.championsTrained}+</div>
                          <div className="text-gray-400 text-xs">Trained</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-white">{coach.stats.yearsExperience}</div>
                          <div className="text-gray-400 text-xs">Experience</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-white">{coach.stats.successRate}</div>
                          <div className="text-gray-400 text-xs">Success</div>
                        </div>
                      </div>
                      
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Book with {coach.name.split(' ')[0]}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Coaches Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Train With <span className="text-purple-400">Our Coaches</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Certified Expertise",
                description: "All coaches hold professional certifications and have proven track records of success"
              },
              {
                icon: Users,
                title: "Personalized Approach",
                description: "Tailored training methods that adapt to your unique goals and learning style"
              },
              {
                icon: Trophy,
                title: "Proven Results",
                description: "Consistent success in helping members achieve their boxing and fitness objectives"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl text-center border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Train with the Best?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Book a session with one of our expert coaches and experience the difference 
              that professional, personalized training can make in your boxing journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Your First Session
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
                View Class Schedule
              </button>
            </div>
            
            <p className="text-gray-500 mt-6 text-sm">
              🏆 Certified Coaches • 🎯 Personalized Training • 📊 Proven Results • 💪 All Levels Welcome
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Coaches;