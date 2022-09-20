export default function Navbar() {
    return (
    <div className="bg-gray-800">
      <div className="md:flex md:items-center md:justify-between mx-10">
        <div className="flex-1 min-w-0  mt-5 mb-5">
          <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">Loick T - Junior Front End Developper</h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Contact
          </button>
          <a
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            href="https://github.com/Solaa08"
          >
            Visit Github
          </a>
        </div>
      </div>
    </div>
    )
  }