export function Header() {
  return (
    <header>
      <div className="bg-black text-white px-8 py-4">
        <div className="flex items-center justify-between pr-5">
          <h5 className="text-xs sm:text-xl mb-4 md:mb-0 md:mr-4">TAS <br />INNOVATION</h5>
          <div className=" space-x-4 text-sm head-style hidden md:block ">
            {/* add menu === bar for these details */}
            <a href="" className="hover:text-blue-700">HOME</a>
            <a href="" className="hover:text-blue-700">CARRIER</a>
            <a href="" className="hover:text-blue-700">COURSES</a>
            <a href="" className="hover:text-blue-700">SERVICES</a>
            <a href="" className="hover:text-blue-700">ABOUT</a>
          </div>
        </div>
      </div>
    </header>
  );
}
