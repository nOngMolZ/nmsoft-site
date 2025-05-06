"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTheme } from "../context/ThemeContext";
import { FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contactInfoRef = useRef(null);
  const mapRef = useRef(null);

  const { isDarkMode } = useTheme();

  useGSAP(() => {
    // Animate section fade in
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    // Animate title
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
        },
      }
    );

    // Animate contact info
    gsap.fromTo(
      contactInfoRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top bottom-=100",
        },
      }
    );

    // Animate map/image
    gsap.fromTo(
      mapRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.6,
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top bottom-=100",
        },
      }
    );

    // Animate contact items
    const contactItems = contactInfoRef.current.querySelectorAll(".contact-item");
    gsap.fromTo(
      contactItems,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top bottom-=50",
        },
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={titleRef} className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>ติดต่อเรา</h1>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDarkMode ? "text-white-50" : "text-gray-700"}`}>เรายินดีและพร้อมที่จะบริการลูกค้าทุกท่านด้วยความเต็มใจ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div ref={contactInfoRef} className={`p-8 rounded-2xl shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <h2 className={`text-2xl font-semibold mb-8 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Contact Information</h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="contact-item flex items-center">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-gray-100"} flex items-center justify-center mr-4`}>
                    <FaEnvelope className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>Email</h3>
                    <a href="mailto:contact@yourcompany.com" className={`text-blue-600 hover:underline ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-800"}`}>
                      Mon@NMSoft.co
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-item flex items-center">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-gray-100"} flex items-center justify-center mr-4`}>
                    <FaMapMarkerAlt className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>Location</h3>
                    <p className={`${isDarkMode ? "text-white-50" : "text-gray-700"}`}>
                      ที่อยู่ 45/1 หมู่ 6 ตำบล ยางตาล อำเภอ โกรกพระ <br /> จังหวัด นครสวรรค์
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="contact-item">
                  <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Connect With Us</h3>
                  <div className="flex space-x-4">
                    {/* Facebook */}
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} flex items-center justify-center transition-all`}
                      aria-label="Facebook"
                    >
                      <FaFacebook className="h-5 w-5 text-blue-600" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} flex items-center justify-center transition-all`}
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="h-5 w-5 text-blue-600" />
                    </a>

                    {/* Line */}
                    <a
                      href="https://line.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} flex items-center justify-center transition-all`}
                      aria-label="Line"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-18.988-2.595c.129 0 .234.105.234.234v4.153h2.287c.129 0 .233.104.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.119-.025-.161-.065-.043-.041-.072-.098-.072-.161v-5.235c0-.129.104-.234.233-.234h.842zm14.992 0c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.883h2.287c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.884h2.287c.129 0 .233.105.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.12-.025-.162-.065-.042-.041-.072-.098-.072-.161v-5.235c0-.129.104-.234.234-.234h3.363zm-10.026.234v5.235c0 .129-.104.234-.233.234h-.842c-.129 0-.234-.105-.234-.234v-5.235c0-.129.105-.234.234-.234h.842c.129 0 .233.105.233.234zm5.514 0v5.235c0 .129-.105.234-.234.234h-.842c-.068 0-.13-.029-.173-.076l-2.296-3.095v2.937c0 .129-.104.234-.233.234h-.842c-.129 0-.234-.105-.234-.234v-5.235c0-.129.105-.234.234-.234h.842c.068 0 .13.029.173.076l2.296 3.095v-2.937c0-.129.104-.234.233-.234h.842c.129 0 .234.105.234.234z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map/Image */}
            <div ref={mapRef} className="h-full">
              <div className={`w-full h-[400px] rounded-2xl overflow-hidden shadow-lg ${isDarkMode ? "border border-gray-700" : "border border-gray-200"}`}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.22507320123339!2d100.1067918699135!3d15.55949682109491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e04d3767b4abaf%3A0x1ca6df5c59be7f1f!2z4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4Lig4Liy4LiT4Li44LiR4Lix4LiV4LiB4Lij4Li14LiR4Liy4LmA4Lin4LiX4Lii4LmM!5e0!3m2!1sth!2sth!4v1746453017334!5m2!1sth!2sth"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-4">
                <p className={`text-sm ${isDarkMode ? "text-white-50" : "text-gray-500"}`}>Visit us at our office during business hours: Monday-Friday, 9AM-5PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
