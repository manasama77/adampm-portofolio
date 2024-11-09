import Link from "next/link";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const socialsMediaList = [
  { icon: <FaGithub />, url: "https://github.com/manasama77" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/adampm/" },
  { icon: <FaSquareXTwitter />, url: "https://x.com/adampm" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialsMediaList.map((item, index) => {
        return (
          <Link key={index} href={item.url} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
