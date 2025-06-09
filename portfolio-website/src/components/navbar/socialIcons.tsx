import { Github } from "../../assets/social/Github";
import { Linkedin } from "../../assets/social/LinkedIn";

export default function SocialIcons() {
  return (
    <div
      id="social-media"
      className="flex my-auto mx-12 gap-6 dark:text-white">
      <Github />
      <Linkedin />
    </div>
  );
}
