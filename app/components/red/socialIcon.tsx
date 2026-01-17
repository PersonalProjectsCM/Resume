import React from 'react';
import Badge from '../atoms/badge3';

interface Props {
  icon: string;
  profileUrl: string
}

const SocialIcon: React.FC<Props> = ({ icon, profileUrl }) => {
  return (
    <div className="">
      
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">
        <Badge icon = {icon}/> {/* Usa img para mostrar el icono */}
        </a>
    
    </div>
  );
};

export default SocialIcon;
