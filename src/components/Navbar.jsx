import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  X, 
  Menu, 
  Star, 
  Phone, 
  Clock,
  Dumbbell,
  Trophy,
  Users
} from "lucide-react";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const programsMenu = [
    { 
      name: "Boxing Fundamentals", 
      to: "/programs/fundamentals",
      icon: Dumbbell,
      description: "Master the basics"
    },
    { 
      name: "Advanced Competition", 
      to: "/programs/advanced",
      icon: Trophy,
      description: "Elite training"
    },
    { 
      name: "Boxing for Fitness", 
      to: "/programs/fitness",
      icon: Users,
      description: "Get fit, stay strong"
    },
    { 
      name: "Kids & Teens Boxing", 
      to: "/programs/kids-teens",
      icon: Users,
      description: "Youth development"
    },
    { 
      name: "Private 1-on-1 Training", 
      to: "/programs/private",
      icon: Star,
      description: "Personalized coaching"
    },
  ];

  const moreMenu = [
    { name: "Schedule & Pricing", to: "/schedule", icon: Clock },
    { name: "Our Coaches", to: "/coaches", icon: Users },
    { name: "Gallery", to: "/gallery", icon: Trophy },
    { name: "Blog", to: "/blog", icon: Dumbbell },
    { name: "Contact", to: "/contact", icon: Phone },
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-black/95 backdrop-blur-xl shadow-2xl border-b border-purple-500/20" 
        : "bg-transparent"
    }`}>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                TIGER BOXING
              </span>
              <span className="text-xs text-purple-400 font-semibold tracking-wider">
                CHAMPIONSHIP CLUB
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" isActive={isActiveLink("/")}>
              HOME
            </NavLink>
            <NavLink to="/about" isActive={isActiveLink("/about")}>
              ABOUT
            </NavLink>
            <EnhancedDropdown 
              title="PROGRAMS" 
              items={programsMenu} 
              isActive={location.pathname.includes('/programs')}
            />
            <EnhancedDropdown 
              title="MORE" 
              items={moreMenu} 
              isActive={moreMenu.some(item => isActiveLink(item.to))}
            />

            <div className="flex items-center gap-4 ml-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 font-semibold"
                >
                  Contact
                </motion.button>
              </Link>
            
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center text-white backdrop-blur-sm"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-full sm:w-96 h-full bg-gradient-to-b from-gray-900 to-black border-l border-purple-500/20 shadow-2xl flex flex-col z-50"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-800 bg-gradient-to-r from-purple-600/10 to-pink-600/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white">TIGER BOXING</h2>
                    <p className="text-xs text-purple-400">CHAMPIONSHIP CLUB</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsMobileOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-red-500/20 hover:text-red-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto p-6 space-y-2">
                <MobileLink
                  to="/"
                  label="HOME"
                  isActive={isActiveLink("/")}
                  closeMenu={() => setIsMobileOpen(false)}
                />
                <MobileLink
                  to="/about"
                  label="ABOUT"
                  isActive={isActiveLink("/about")}
                  closeMenu={() => setIsMobileOpen(false)}
                />

                {/* Enhanced Accordions */}
                <EnhancedMobileAccordion
                  title="PROGRAMS"
                  menu={programsMenu}
                  openAccordion={openAccordion}
                  setOpenAccordion={setOpenAccordion}
                  closeMenu={() => setIsMobileOpen(false)}
                  isActive={location.pathname.includes('/programs')}
                />
                <EnhancedMobileAccordion
                  title="MORE"
                  menu={moreMenu}
                  openAccordion={openAccordion}
                  setOpenAccordion={setOpenAccordion}
                  closeMenu={() => setIsMobileOpen(false)}
                  isActive={moreMenu.some(item => isActiveLink(item.to))}
                />

                {/* Mobile CTA Buttons */}
                <div className="pt-8 space-y-4">
           
                  <Link to="/contact" onClick={() => setIsMobileOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl border-2 border-purple-500 text-purple-400 font-bold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                    >
                      📞 Contact Coach
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-800 bg-gradient-to-r from-purple-600/5 to-pink-600/5">
                <div className="text-center text-gray-400 text-sm space-y-2">
                  <p>🏆 15+ National Champions Trained</p>
                  <p>⭐ 5.0 Rating (200+ Reviews)</p>
                  <p className="pt-2 text-xs">© 2024 Tiger Boxing Club. All rights reserved.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* Enhanced Desktop Nav Link */
const NavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`relative px-4 py-2 font-semibold transition-all duration-300 group ${
      isActive ? "text-purple-400" : "text-gray-300 hover:text-white"
    }`}
  >
    {children}
    {isActive && (
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        layoutId="navbar-indicator"
      />
    )}
    <div className={`absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ${
      isActive ? "scale-100" : ""
    }`} />
  </Link>
);

/* Enhanced Desktop Dropdown */
const EnhancedDropdown = ({ title, items, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={`flex items-center px-4 py-2 font-semibold transition-all duration-300 group ${
        isActive ? "text-purple-400" : "text-gray-300 hover:text-white"
      }`}>
        {title}
        <ChevronDown
          className={`ml-2 w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            layoutId="navbar-indicator"
          />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 mt-2 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 p-4 w-80"
          >
            <div className="space-y-2">
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-purple-600/20 hover:border-purple-500/30 border border-transparent transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {item.name}
                    </div>
                    {item.description && (
                      <div className="text-xs text-gray-400 mt-1">
                        {item.description}
                      </div>
                    )}
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-500 transform -rotate-90" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* Enhanced Mobile Link */
const MobileLink = ({ to, label, isActive, closeMenu }) => (
  <Link
    to={to}
    onClick={closeMenu}
    className={`block py-4 px-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
      isActive 
        ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-400" 
        : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`}
  >
    {label}
  </Link>
);

/* Enhanced Mobile Accordion */
const EnhancedMobileAccordion = ({
  title,
  menu,
  openAccordion,
  setOpenAccordion,
  closeMenu,
  isActive
}) => {
  const isOpen = openAccordion === title;
  
  return (
    <div className={`rounded-xl overflow-hidden ${
      isActive ? "bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20" : ""
    }`}>
      <button
        onClick={() => setOpenAccordion(isOpen ? null : title)}
        className={`flex items-center justify-between w-full py-4 px-4 text-lg font-semibold transition-all duration-300 ${
          isOpen ? "text-purple-400" : "text-gray-300 hover:text-white"
        }`}
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 px-4 space-y-2">
              {menu.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  onClick={closeMenu}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg bg-gray-800/50 hover:bg-purple-600/20 border border-transparent hover:border-purple-500/30 transition-all duration-300 group"
                >
                  {item.icon && (
                    <item.icon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  )}
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;