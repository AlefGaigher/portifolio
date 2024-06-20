import Link from 'next/link';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const socialMediaLinks = {
  github: "https://github.com/AlefGaigher",
  linkedin: "https://www.linkedin.com/in/alefgaigher/",
  instagram: "https://www.instagram.com/alefgaigher/",
  twitter: "https://x.com/alefgaigher",
};

const iconClasses = 'mb-1 flex items-center justify-center rounded-full bg-black text-white text-lg w-9 h-9 hover:bg-gray-600';
const containerClasses = 'mt-4 flex space-x-2';

export function SocialMediaButtons() {
  return (
    <div className={containerClasses}>
      {Object.entries(socialMediaLinks).map(([platform, url], index) => (
        <Link key={index} href={url} target='_blank' rel="noopener noreferrer" aria-label={`Link to ${platform}`}>
          <div className={iconClasses}>
            {platform === 'linkedin' && <FaLinkedin />}
            {platform === 'github' && <FaGithub />}
            {platform === 'instagram' && <FaInstagram />}
            {platform === 'twitter' && <FaTwitter />}
          </div>
        </Link>
      ))}
    </div>
  );
}
