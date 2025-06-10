import Logo from "./navbar/logo";
import SocialIcons from "./navbar/socialIcons";

export default function FooterContact() {
  return (
    <>
      <div className="h-16 flex justify-between px-5 dark:bg-black">
        <Logo />
        <div className="flex gap-3 justify-center items-center dark:text-white">
          <p>+92 3133933083</p>
          <p>+971 507363261</p>
          <p>tabishsajwani@hotmail.com</p>
        </div>
        <SocialIcons />
      </div>
      <div className="dark:bg-black after:w-3/4 after:h-0.5 after:rounded-lg after:bg-gray-300 flex flex-col after:opacity-60 after:mx-auto "></div>
    </>
  );
}
