import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="h-20 bg-red-900">
      <nav className=" h-full items-center flex justify-between px-20">
        <div className="text-white">
          <h2>Postly</h2>
        </div>
        <div className="text-white">
          <ul className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
