import { MapPin, Phone, Mail, Instagram, Youtube, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl mb-4">JK Sports & Media Ventures Pvt. Ltd.</h3>
            <p className="text-gray-400 mb-6">
              Your trusted partner in sports, entertainment & corporate leagues.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#a7fa25] flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  15th Floor, Office No. 1563, Gaur City Mall, Greater Noida (West), UP
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#a7fa25] flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 9527575294</p>
                  <p className="text-gray-300">+91 9319781655</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#a7fa25] flex-shrink-0" />
                <a href="mailto:neeraj@jksportsventures.com" className="text-gray-300">neeraj@jksportsventures.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a7fa25] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a7fa25] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a7fa25] transition-colors">
                  Tournaments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a7fa25] transition-colors">
                  LCL
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a7fa25] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a7fa25] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a7fa25] transition-colors">
                  Event Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a7fa25] transition-colors">
                  Corporate Leagues
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a7fa25] transition-colors">
                  Live Broadcasting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a7fa25] transition-colors">
                  Youth Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a7fa25] transition-colors">
                  Box Cricket
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#a7fa25] transition-colors">
                  Sponsorship
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400">
              © 2025 JK Sports. All Rights Reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <p className="text-gray-400">Follow Us:</p>
              <div className="flex gap-3">
                <a 
                  target="_blank"
                  href="https://www.instagram.com/jksportsmediaventures?igsh=dmN1ZW84MTA5ZWsy" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#a7fa25] hover:text-slate-900 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  target="_blank"
                  href="https://youtube.com/@jksportsmanagement5391?si=WDOQTOxja2F_fFNL" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#a7fa25] hover:text-slate-900 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  target="_blank"
                  href="https://www.facebook.com/share/17uFtpFAb4/" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#a7fa25] hover:text-slate-900 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  target="_blank"
                  href="https://www.linkedin.com/in/neeraj-sachdeva-699958364/" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#a7fa25] hover:text-slate-900 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
