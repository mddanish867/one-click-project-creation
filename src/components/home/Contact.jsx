// src/components/ContactSection.js
import { useTheme } from '../../context/ThemeContext';

const ContactSection = () => {
  const theme = useTheme();

  return (
    <section id="contact" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className={`text-4xl mb-6 ${theme.typography.heading}`}>
          Connect With Us
        </h2>
        <p className={`${theme.colors.text.secondary} max-w-2xl mx-auto ${theme.typography.body} mb-12`}>
          Ready to elevate your experience? Contact us today and let's start crafting your journey.
        </p>
        <button className={`group relative px-12 py-4 overflow-hidden rounded-full ${theme.button.primary} ${theme.animation.transition}`}>
          <div className={`absolute inset-0 w-0 bg-gradient-to-r ${theme.button.hover} ${theme.animation.transition} ease-out group-hover:w-full`}></div>
          <span className="relative text-white tracking-wider">Get In Touch</span>
        </button>
      </div>
    </section>
  );
};

export default ContactSection;