import Link from 'next/link'
import Image from './Image'

const menuList = [
  {
    id: 1,
    name: 'Homepage',
    link: '/',
    icon: 'home.svg'
  },
  {
    id: 2,
    name: 'Explore',
    link: '/',
    icon: 'explore.svg'
  },
  {
    id: 3,
    name: 'Notification',
    link: '/',
    icon: 'notification.svg'
  },
  {
    id: 4,
    name: 'Messages',
    link: '/',
    icon: 'message.svg'
  },
  {
    id: 5,
    name: 'Bookmarks',
    link: '/',
    icon: 'bookmark.svg'
  },
  {
    id: 6,
    name: 'Jobs',
    link: '/',
    icon: 'job.svg'
  },
  {
    id: 7,
    name: 'Communities',
    link: '/',
    icon: 'community.svg'
  },
  {
    id: 8,
    name: 'Premium',
    link: '/',
    icon: 'logo.svg'
  },
  {
    id: 9,
    name: 'Profile',
    link: '/',
    icon: 'profile.svg'
  },
  {
    id: 10,
    name: 'More',
    link: '/',
    icon: 'more.svg'
  }
]

const LeftBar = () => {
  return (
    <div className='sticky top-0 flex h-screen flex-col justify-between pb-8 pt-2'>
      {/* LOGO MENU BUTTON */}
      <div className='xxl:items-start flex flex-col items-center gap-4 text-lg'>
        {/* LOGO */}
        <Link href='/' className='rounded-full p-2 hover:bg-[#181818]'>
          <Image path='icons/logo.svg' alt='logo' w={24} h={24} />
        </Link>
        {/* MENU LIST */}
        <div className='flex flex-col gap-4'>
          {menuList.map(item => (
            <Link
              href={item.link}
              className='flex items-center gap-4 rounded-full p-2 hover:bg-[#181818]'
              key={item.id}
            >
              <Image
                path={`icons/${item.icon}`}
                alt={item.name}
                w={24}
                h={24}
              />
              <span className='xxl:inline hidden'>{item.name}</span>
            </Link>
          ))}
        </div>
        {/* BUTTON */}
        <Link
          href='/compose/post'
          className='xxl:hidden flex h-12 w-12 items-center justify-center rounded-full bg-white text-black'
        >
          <Image path='icons/post.svg' alt='new post' w={24} h={24} />
        </Link>
        <Link
          href='/compose/post'
          className='xxl:block hidden rounded-full bg-white px-20 py-2 font-bold text-black'
        >
          Post
        </Link>
      </div>
      {/* USER */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='relative h-10 w-10 overflow-hidden rounded-full'>
            <Image
              path='/general/avatar.png'
              alt='lama dev'
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className='xxl:flex hidden flex-col'>
            <span className='font-bold'>Lama Dev</span>
            <span className='text-textGray text-sm'>@lamaWebDev</span>
          </div>
        </div>
        <div className='xxl:block hidden cursor-pointer font-bold'>...</div>
      </div>
    </div>
  )
}

export default LeftBar
