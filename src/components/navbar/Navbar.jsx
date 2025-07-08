function NavBar() {
  return (
    <div>
      <nav className="rounded-2xl bg-cyan-950 py-2 px-9 w-fit">
        <ul className="inline-flex gap-5">
          <Item text={"Index"} />
          <Item text={"About"} />
          <Item text={"Projects"} />
          <Item text={"Contact"} />
        </ul>
      </nav>
    </div>
  );
}

function Item({ text }) {
  return (
    <li style={{ fontFamily: "Orbitron" }}>
      <button
        className=" 
    relative text-lg text-white py-2 px-4 overflow-hidden group transition-colors duration-200 ease-in-out
    hover:text-cyan-400  rounded-full
          ">
        <span
          className="
    absolute  rounded-full top-0 inset-x-0 h-1 bg-cyan-600
    transform scale-x-0 group-hover:scale-x-100
    transition-transform duration-200 ease-out
    "/>
        {text}
        <span
          className="
    absolute  rounded-full bottom-0 inset-x-0 h-1 bg-cyan-600
    transform scale-x-0 group-hover:scale-x-100
    transition-transform duration-200 ease-out
    "
        />
      </button>
    </li>
  );
}

export default NavBar;
