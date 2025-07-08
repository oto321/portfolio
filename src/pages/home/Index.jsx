import Navbar from "./../../components/navbar/Navbar.jsx";


function home() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      <div className="absolute inset-0 bg-black"></div>


      <div className="relative z-10 text-white p-8">
        <Navbar />
      </div>
    </div>
  );
}

export default home;
