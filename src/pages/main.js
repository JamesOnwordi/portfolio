import Image from "next/image";

export default function Main() {
  return (
    <div
      id="home"
      className="flex items-center justify-center min-h-screen p-16 bg-white"
    >
      <div className="lg:w-1/2 pr-8">
        <div className="mb-6">
          <p className="font-kurale text-4xl 2xl:text-6xl mb-3">
            Hello I'm{" "}
            <span className="text-4xl 2xl:text-6xl font-spicyRice text-teal-600">
              James Onwordi.
            </span>
          </p>
          <p className="text-4xl 2xl:text-6xl font-aclonica mb-3">
            Software <span className="text-slate-600">Developer</span>
          </p>
          <p className="text-4xl 2xl:text-6xl mb-3 font-kurale">
            Based in{" "}
            <span className="font-aclonica text-amber-600">Calgary</span>
          </p>
        </div>

        <div className="mb-8">
          <p className="font-kurale text-lg 2xl:text-2xl text-gray-700">
            I am passionate about building impactful digital solutions. With
            experience in JavaScript, React, and full-stack development, I focus
            on creating intuitive, efficient applications that prioritize user
            experience. I’m committed to continuous growth and exploration in
            the tech world, always eager to take on new challenges and bring
            creative ideas to life.
          </p>
        </div>

        <div className="w-2/3 text-gray-800">
          <p className="text-3xl lg:text-5xl mb-4 font-kurale">
            Connect with me!
          </p>
          <div className="flex space-x-3">
            <a
              href="https://github.com/JamesOnwordi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-gray-800 border-2 p-1 transition-all hover:bg-gray-800 hover:text-white transform hover:scale-110 hover:rotate-6"
            >
              <svg
                height="32"
                aria-hidden="true"
                viewBox="0 0 16 16"
                width="32"
                className="w-6 h-6 m-2"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/james-onwordi/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-gray-800 border-2 p-1 transition-all hover:bg-gray-800 hover:text-white transform hover:scale-110 hover:rotate-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 m-2"
                width="24"
                height="24"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="place-content-center hidden lg:block">
        <Image
          className="rounded-full border-4 border-gray-800"
          src="/mypic.png"
          width={400}
          height={400}
          alt="James' Pic"
          priority
        />
      </div>
    </div>
  );
}
