
const projects = [
    { name: 'React Movies', initials: 'RM', href: '#', createdAt: '12/12/2022', link: 'https://github.com/Solaa08/react-movie' ,bgColor: 'bg-blue-600' },
    { name: 'React Restaurant', initials: 'RR', href: '#', createdAt: '12/12/2022', link: 'https://github.com/Solaa08/react-onepage' ,bgColor: 'bg-blue-600' },
    { name: 'React Todolist', initials: 'RT', href: '#', createdAt: '12/12/2022', link: 'https://github.com/Solaa08/react-todolist' ,bgColor: 'bg-blue-600' },
    { name: 'Native Todolist', initials: 'NT', href: '#', createdAt: '12/12/2022', link: 'https://github.com/Solaa08/todolistJS' ,bgColor: 'bg-yellow-500' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function List() {
  return (
    <div>
      <ul role="list" className="mt-0 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 mx-5">
        {projects.map((project) => (
          <li key={project.name} className="col-span-1 flex shadow-sm rounded-md">
            <div
              className={classNames(
                project.bgColor,
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}
            >
              {project.initials}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a href={project.href} className="text-gray-900 font-medium hover:text-gray-600">
                  {project.name}
                </a>
                <p className="text-gray-500">{project.createdAt}</p>
                <a href={project.link}>{project.link}</a>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="w-8 h-8 bg-white inline-flex items-center justify-center text-red-400 rounded-full bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
