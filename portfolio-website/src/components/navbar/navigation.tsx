export default function Navigation() {
  const animateLine = "hover:after:animate-line hover:after:h-0.5 hover:after:bg-pink-700 hover:after:w-full hover:after:absolute hover:after:-bottom-1";

  return (
    <div
      id="navigations"
      className="my-auto">
      <ul className="flex gap-16 text-lg dark:text-white">
        <li className={`relative flex flex-col ${animateLine}`}>
          <a
            href="#"
            className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li className={`relative flex flex-col ${animateLine}`}>
          <a
            href="#about"
            className="hover:text-blue-500">
            About
          </a>
        </li>
        <li className={`relative flex flex-col ${animateLine}`}>
          <a
            href="#portfolio"
            className="hover:text-blue-500">
            Portfolio
          </a>
        </li>
        <li className={`relative flex flex-col ${animateLine}`}>
          <a
            href="#skills"
            className="hover:text-blue-500">
            Skills
          </a>
        </li>
        <li className={`relative flex flex-col ${animateLine}`}>
          <a
            href="#contact"
            className="hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
