const Header = () => {
  return (
    <div className="flex justify-between mx-8 h-[100px] border-solid border-black border text-xl px-[10px] bg-black text-white items-center font-medium">
      <h1>My Store</h1>

      <nav>
        <a className="ml-5" href="#">
          Home
        </a>
        <a className="ml-5" href="#">
          Products
        </a>
        <a className="ml-5" href="#">
          About
        </a>
        <a className="ml-5" href="#">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
