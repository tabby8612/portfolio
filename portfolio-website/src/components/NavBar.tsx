import Dark from "./navbar/dark";
import Logo from "./navbar/logo";
import Navigation from "./navbar/navigation";
import SocialIcons from "./navbar/socialIcons";

export default function NavBar() {
  return (
    <>
      <div className="w-screen h-16 flex justify-between px-5">
        <Logo />
        <Navigation />
        <SocialIcons />
        <Dark />
      </div>
    </>
  );
}
