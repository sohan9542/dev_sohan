import Link from "next/link";
import Image from "next/image";
import { footer } from "@/data/global";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((link) => {
                  return (
                    <div key={link.name} className="my-4">
                      {link.leavesWebsite ? (
                        <a
                          href={link.link}
                          target="_blank"
                          rel="noreferrer"
                          className="items-center flex"
                        >
                          {link.icon && (
                            <span className="pr-2 -mb-1">
                              <Image
                                src={link.icon}
                                width={20}
                                height={20}
                                alt=""
                              />
                            </span>
                          )}
                          {link.name}
                        </a>
                      ) : (
                        <Link href={link.link}>{link.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0">
          <h4 className="uppercase text-fun-gray text-sm font-bold">
            Support My Work
          </h4>
          <div className="space-y-2 mt-4 w-full flex items-center sm:items-start flex-col">
            <p className="text-fun-gray text-xs pt-1">
              {footer.support.message}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <div className="flex flex-col items-center justify-center">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                  alt="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  className="invert"
                  title="NextJS"
                  alt="Next.js"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="26"
                  title="TailwindCSS"
                  alt="Tailwind CSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
