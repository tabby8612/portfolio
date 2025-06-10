import Card from "./UI/Card";

export default function Projects() {
  return (
    <div
      id="portfolio"
      className="pb-15 px-15 dark:bg-black dark:text-white">
      <h1 className="text-5xl py-2 font-semibold">My Projects</h1>
      <p className="text-lg mb-8">My Recently Completed Projects</p>
      <div
        id="projects"
        className="grid grid-cols-3 grid-rows-2 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
