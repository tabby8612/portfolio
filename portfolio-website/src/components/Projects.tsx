import Card from "./UI/Card";
import MindHackingImage from "../assets/images/projects/MindHacking.jpg";
import EvoFitnessImage from "../assets/images/projects/EvoFitness.png";

export default function Projects() {
  return (
    <div
      id="portfolio"
      className="pb-15 px-15 dark:bg-black dark:text-white">
      <h1 className="text-5xl py-2 font-semibold">My Projects</h1>
      <p className="text-lg mb-8">My Recently Completed Projects</p>
      <div
        id="projects"
        className="grid grid-cols-3  gap-4">
        <Card
          image={MindHackingImage}
          title="MindHacking Blog"
          description="This project is a content management system that allows admins to create and manage posts using a rich text editor, along with categories, tags, and images. It includes features for organizing posts, managing users, assigning roles, and viewing a dashboard with key site statistics. Admins can also handle contact messages sent through the website, making the system a complete solution for content publishing and website management."
          tech="HTML, CSS, JS, TS, React, PHP, Laravel, MySql"
          stack="React + Laravel"
          livePreview=""
          githublink="https://github.com/tabby8612/LaravelLearning/tree/main/09%20-%20Main%20Application"
        />
        <Card
          image={EvoFitnessImage}
          title="EvoGYM Fitness"
          description="I developed a fitness web application using modern technologies and tools to ensure a smooth and responsive user experience. The app is built with React and TypeScript/JavaScript, providing a strong foundation for dynamic and scalable frontend development. For styling, I used Tailwind CSS, allowing for rapid and consistent UI design.To enhance interactivity and user engagement, the app integrates Framer Motion for smooth animations and transitions. "
          tech="HTML, CSS, JavaScript, TypeScript, React"
          stack="React"
          livePreview=""
          githublink="https://github.com/tabby8612/ReactFitnessApp"
        />
      </div>
    </div>
  );
}
