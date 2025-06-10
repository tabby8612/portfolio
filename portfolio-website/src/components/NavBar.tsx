import Dark from "./navbar/dark";
import Logo from "./navbar/logo";
import Navigation from "./navbar/navigation";
import SocialIcons from "./navbar/socialIcons";

export default function NavBar() {
  return (
    <>
      <div className="h-16 flex justify-between px-5 sticky top-0 z-50 bg-white dark:bg-black">
        <Logo />
        <Navigation />
        <SocialIcons />
        <Dark />
      </div>
    </>
  );
}
