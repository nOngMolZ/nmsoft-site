import React from "react";
import { useTheme } from "../context/ThemeContext";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";

const Policy = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}>
      <NavBar />

      <main className="flex-grow container mx-auto px-5 md:px-20 py-32">
        <div className={`max-w-4xl mx-auto p-8 md:p-12 rounded-2xl ${isDarkMode ? "bg-[#1c1c21] border border-[#282732]" : "bg-white border border-gray-200 shadow-sm"}`}>
          <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <div className={`space-y-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            <p className="text-sm opacity-70">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="mb-8">
              <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>1. Introduction</h2>
              <p>
                Welcome to NMSoft ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our apps. This Privacy Policy explains our practices regarding the collection, use, and disclosure of your information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>2. Information We Collect</h2>
              <p className="mb-2">We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, and other contact details you voluntarily provide when contacting us.</li>
                <li><strong>Usage Data:</strong> Information about how you use our app, including crash logs and performance data, which helps us improve our services.</li>
                <li><strong>Device Information:</strong> We may collect information about the device you use to access our app, such as the device model, operating system version, and unique device identifiers.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Provide, maintain, and improve our services.</li>
                <li>Respond to your comments, questions, and requests.</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our app.</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>4. Data Sharing and Disclosure</h2>
              <p>
                We do not share your personal information with third parties except as described in this policy. We may share information with:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as hosting, analytics, and customer support.</li>
                <li><strong>Legal Compliance:</strong> When required by law or to protect our rights and the safety of our users.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>5. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us at the email provided below.
              </p>
            </div>

            <div className="mb-8">
              <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>6. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="mb-8">
              <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2 font-medium text-blue-500">
                support@nmsoft.com
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Policy;
