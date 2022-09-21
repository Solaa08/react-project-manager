
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function List(props) {

  const pros = props;

  return (
    <div>
      <ul role="list" className="grid grid-cols-1 gap-5 mx-5 mt-0 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pros.props.map((project) => (
          <li key={project.name} className="flex col-span-1 rounded-md shadow-sm">
            <div
              className={classNames(
                project.bgColor,
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}
            >
              {project.initials}
            </div>
            <div className="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a href={project.href} className="font-medium text-gray-900 hover:text-gray-600">
                  {project.name}
                </a>
                <p className="text-gray-500">{project.createdAt}</p>
                <a href={project.link}>{project.link}</a>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 text-red-400 bg-transparent bg-white rounded-full hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Open options</span>
                  Try it
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
