import Navigation from "./navbar/navigation";

export default function Footer() {
  return (
    <div className="h-16 flex justify-between px-5 items-center dark:bg-black dark:text-white">
      <Navigation />
      <div className="">Designed and Build by Tabish Sajwani with 💗</div>
    </div>
  );
}
