import Navbar from "./../../components/navbar/Navbar.jsx";


function home() {
  return (
    // Outer container for the entire page, relative for children positioning
    <div className="relative min-h-screen overflow-hidden">

      {/* Main Page Background (full screen, z-index 0 or default) */}
      {/* Make sure this is z-0 or omitted, so it goes behind everything else. */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950 to-neutral-900 z-0"></div>


      {/* Content Layer (including Navbar), explicitly z-index 10 to be above the background */}
      <div className="relative z-10 text-white p-8">
        <Navbar />
      </div>
    </div>
  );
}

export default home;
