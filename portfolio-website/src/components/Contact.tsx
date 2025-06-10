export default function Contact() {
  return (
    <div
      id="contact"
      className="pb-25 px-15 dark:bg-black dark:text-white">
      <h1 className="text-5xl py-2 font-semibold">Contact</h1>
      <p className="text-lg mb-8">What to contact? Use the form below</p>
      <div
        id="form"
        className=" flex flex-col justify-center items-center">
        <form
          action=""
          className="w-3/4 mx-auto flex justify-between items-center flex-col">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="block py-2 px-3 my-3 rounded-lg border-2 border-gray-400 w-3/4"
          />
          <input
            type="text"
            name="name"
            placeholder="Enter Your Email"
            className="block py-2 px-3 my-3 rounded-lg border-2 border-gray-400 w-3/4"
          />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Leave Your Message"
            className="block py-2 px-3 my-3 rounded-lg border-2 border-gray-400 w-3/4"></textarea>
          <button className="my-3 py-2 px-15 bg-blue-600 text-lg text-white rounded-lg flex justify-center items-center gap-3 cursor-pointer shadow-lg">Submit</button>
        </form>
      </div>
    </div>
  );
}
