import { useState } from "react";

function HomeIcon() {
  return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
  );
}

function AboutIcon() {
  return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg>
  );
}

function TolsIcon() {
  return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
  </svg>
  );
}


function ProjectsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
    </svg>
  );
}

function ConnectionsIcon() {
  return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
  );
}


function ContactIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
    </svg>

  );
}



function NavBar({ orientation }) {
  // true is vertical, false is horizontal


  function Item({ image, text }) {
    const [hover, setHover] = useState(null);
    const ImageComponent = image;

    function hoverFlip(value) {
      console.log("flipping to value: ", value);
      setHover(value);
      console.log("flipped to value: ", value);
    }
    return (
      <li style={{ fontFamily: "Orbitron" }} onMouseEnter={() => hoverFlip(true)} onMouseLeave={() => hoverFlip(false)}>
        <button
          className="
          relative text-lg text-white font-extrabold py-2 px-4 overflow-hidden rounded-full 
            border-y-cyan-700 border-y-2
          hover:text-black group
          transition-all duration-100 ease-in-out
        "
        >
          <div
            className={`
            absolute inset-0 rounded-full bg-cyan-300
            transition-all duration-300 ease-in-out
            ${orientation ?
                'scale-y-0 group-hover:scale-y-100 -z-10'
                :
                'scale-x-0 group-hover:scale-x-100 -z-10'}         
          `}
          />
          <ImageComponent />
        </button>
        {hover && (
          <div
            className={`
              absolute  mt-2
              drop-shadow-transparent
              bg-black/30 text-white text-2xl rounded px-2 py-1
              whitespace-nowrap flex z-20
              ${orientation
                ? "top-1/2 left-full ml-3 transform -translate-y-1/2 flex-col "
                : "top-full left-1/2 mt-2 transform -translate-x-1/2 flex-row "
              }`
            }>
            {text}
          </div>
        )}
      </li>
    );
  }
  return (
    <div className="flex ">
      <nav className={`
    rounded-2xl bg-neutral-800 backdrop-blur-3xl w-fit px-5 py-3
    border-b-2 border-b-neutral-600 border-t-2 border-t-neutral-300
    hover:drop-shadow-lg hover:drop-shadow-cyan-400/50     transition-all duration-300 linear
    `}>
        <ul className={` gap-5 flex ${orientation ?
          "flex-col"
          :
          "flex-row"
          }`}>
          <Item image={HomeIcon} text="Home" />
          <Item image={AboutIcon} text="About" />
          <Item image={TolsIcon} text="Tools" />
          <Item image={ProjectsIcon} text="Projects" />
          <Item image={ContactIcon} text="Contact" />
        </ul>
      </nav>
    </div>
  );
}



export default NavBar;
