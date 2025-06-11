import { Github } from "../../assets/social/Github";
import { Linkedin } from "../../assets/social/LinkedIn";

export default function SocialIcons() {
  return (
    <div
      id="social-media"
      className="flex my-auto mx-12 gap-6 dark:text-white">
      <a
        href="https://github.com/tabby8612"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-115 hover:text-blue-500">
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/tabish-sajwani/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-115 hover:text-blue-500">
        <Linkedin />
      </a>
    </div>
  );
}
