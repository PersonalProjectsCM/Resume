import React from 'react';
import Image from 'next/image';

type Status = 'online' | 'offline' | 'busy';

interface ProfileImageProps {
  status?: Status; // limita las opciones válidas
}

const statusColors: Record<Status, string> = {
  online: 'bg-green-400',
  offline: 'bg-red-500',
  busy: 'bg-yellow-400',
};

const ProfileImage: React.FC<ProfileImageProps> = ({ status = 'online' }) => {
  // fallback por si en runtime llega un valor inesperado (defensivo)
  const colorClass = statusColors[status] ?? 'bg-gray-400';

  return (
    <div className="relative inline-block bg-black">
      <Image
        src="/perfil_4.png"
        alt="Frontend"
        width={135}
        height={135}
        className="rounded-full opacity-1"
      />
      <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full shadow-md ${colorClass}`} />
    </div>
  );
};

export default ProfileImage;