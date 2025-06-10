import StellarImage from "../../assets/images/projects/stellarmart.jpg";

export default function Card() {
  return (
    <div className="w-[430px] rounded-lg shadow-2xl mb-6 dark:shadow-amber-50/40">
      <img
        src={StellarImage}
        alt="Stellar Image"
        className="rounded-t-xl"
      />
      <div className="p-3">
        <h1 className="text-lg font-bold mb-3">Stellmart - Ecommerce Website</h1>
        <p className="mb-3 dark:text-stone-400">
          A full-fledged full-stack e-commerce application with integrated online payment functionality, enabling users to search, save, filter, and purchase products. Users can also manage their profiles and track their orders and purchases.
          Additionally, implement an admin dashboard to add and track overall products and product sales on the website and manage orders and users.
        </p>
        <p className="dark:text-stone-400">
          <strong className="dark:text-white">Tech: </strong> HTML, CSS, JS, TS, React.js, Node.js, Express.js
        </p>
        <p className="dark:text-stone-400">
          <strong className="dark:text-white">Stack: </strong> React, Typescript, Laravel, MySQL
        </p>
        <div className="flex justify-around my-4">
          <a
            href=""
            className="font-semibold underline">
            Live Preview
          </a>
          <a
            href=""
            className="font-semibold underline">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
