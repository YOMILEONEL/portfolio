export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Steve Leonel Yomi Mbiakop Portfolio</div>
        <div className="space-x-4">
          <a href="#HOME" className="text-gray-300 hover:text-white">Home</a>
          <a href="#aboutme" className="text-gray-300 hover:text-white">AboutMe</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}