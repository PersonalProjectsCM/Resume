import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const socialData = [
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/camilo899" },
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/in/cristian-mejia-364404152" },
  { name: "YouTube", icon: <FaYoutube />, url: "https://www.youtube.com/channel/UCY1hEGYOF_2la7L7y_n3woA" },
  { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/" },
  { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/" },
  { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com/" },
];

const SocialLinks = () => (
  <div className="flex flex-col items-center gap-4">
    <h2 className="font-inter font-bold text-lg text-white">Links</h2>
    {socialData.map((social) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.name}
        className="p-2 rounded-full hover:bg-gray-700 transition text-white"
      >
        {social.icon}
      </a>
    ))}
  </div>
);

const RightMenu = () => {
  return (
    <aside className="fixed right-0 top-0 h-full w-[95px] bg-black flex flex-col items-center justify-center border-l border-gray-700">
      <SocialLinks />
    </aside>
  );
};

export default RightMenu;