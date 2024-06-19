import Link from 'next/link';
import { FaTwitter , FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const socialMediaLinks = {
    github: "https://github.com/AlefGaigher",
    linkedin: "https://www.linkedin.com/in/alefgaigher/",
    instagram: "https://www.instagram.com/alefgaigher/",
    twitter: "https://x.com/alefgaigher",
};

const iconClasses = 'mb-1 flex items-center justify-center rounded-full bg-black text-white text-lg w-9 h-9 hover:bg-gray-600';
const containerClasses = 'z-50 bottom-1/2 left-0 fixed';

export function SocialMediaButtons() {
  return (
    <div className={containerClasses}>
      <div className='bg-white text-center text-xl w-12 h-50 shadow-3xl p-1 rounded-e-lg '>
        {Object.entries(socialMediaLinks).map(([platform, url], index) => (
          <Link key={index} href={url} target='_blank' rel="noopener noreferrer" aria-label="Read more about Seminole tax hike">
            <div className={iconClasses}>
              {platform === 'linkedin' && <FaLinkedin />}
              {platform === 'github' && <FaGithub />}
              {platform === 'instagram' && <FaInstagram />}
              {platform === 'twitter' && <FaTwitter />}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
