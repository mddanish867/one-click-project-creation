import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const theme = useTheme();

  return (
    <footer
      className={`py-12 text-center ${theme.colors.background.secondary} relative overflow-hidden`}
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-rose-400/10 to-purple-500/10 mix-blend-multiply blur-3xl"></div>
      <p className="relative text-gray-400 text-sm z-10">
        &copy; {new Date().getFullYear()} ScaffoldX. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
