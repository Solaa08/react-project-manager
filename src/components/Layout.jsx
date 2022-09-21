import React from 'react'
import Navbar from './Navbar'
import List from './List'
import Card from './Card'

export default function Layout() {

  const projects = [
    { name: 'React Movies', initials: 'RM', href: '#', createdAt: '12/12/2022', link: 'https://github.com/Solaa08/react-movie' ,bgColor: 'bg-blue-600' },
    { name: 'React Restaurant', initials: 'RR', href: '#', createdAt: '12/12/2022', link: 'https://github.com/Solaa08/react-onepage' ,bgColor: 'bg-blue-600' },
    { name: 'React Todolist', initials: 'RT', href: '#', createdAt: '12/12/2022', link: 'https://github.com/Solaa08/react-todolist' ,bgColor: 'bg-blue-600' },
    { name: 'Native Todolist', initials: 'NT', href: '#', createdAt: '12/12/2022', link: 'https://github.com/Solaa08/todolistJS' ,bgColor: 'bg-yellow-500' },
    { name: 'Native Video Game', initials: 'NVG', href: '#', createdAt: '12/12/2022', link: 'https://github.com/Solaa08/todolistJS' ,bgColor: 'bg-red-500' },
]

  return (
    <body>
    <Navbar/>
    <Card/>
    <List props={projects}/>
    </body>

  )
}
