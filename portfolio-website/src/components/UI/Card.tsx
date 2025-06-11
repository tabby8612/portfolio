type Props = {
  image: string;
  title: string;
  description: string;
  tech: string;
  stack: string;
  livePreview?: string;
  githublink: string;
};

export default function Card({ image, title, description, tech, stack, livePreview, githublink }: Props) {
  return (
    <div className="w-[430px] rounded-lg shadow-2xl mb-6 dark:shadow-amber-50/40">
      <img
        src={image}
        alt={title}
        className="rounded-t-xl h-60 w-full"
      />
      <div className="p-3">
        <h1 className="text-lg font-bold mb-3">{title}</h1>
        <p className="mb-3 dark:text-stone-400">{description}</p>
        <p className="dark:text-stone-400">
          <strong className="dark:text-white">Tech: </strong> {tech}
        </p>
        <p className="dark:text-stone-400">
          <strong className="dark:text-white">Stack: </strong> {stack}
        </p>
        {livePreview ? (
          <div className="flex justify-around my-4">
            <a
              href={livePreview}
              className="font-semibold underline">
              Live Preview
            </a>
            <a
              href={githublink}
              className="font-semibold underline">
              View Code
            </a>
          </div>
        ) : (
          <div className="flex justify-around items-center my-4">
            <a
              href={githublink}
              className="font-semibold underline">
              View Code
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
