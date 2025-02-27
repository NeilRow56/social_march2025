import Feed from '@/components/Feed'
import Share from '@/components/Share'
import Link from 'next/link'

const Homepage = () => {
  return (
    <div>
      <div className='text-textGray border-borderGray flex justify-between border-b-[1px] px-4 pt-4 font-bold'>
        <Link
          className='border-iconBlue flex items-center border-b-4 pb-3'
          href='/#'
        >
          For you
        </Link>
        <Link className='flex items-center pb-3' href='/#'>
          Following
        </Link>
        <Link className='hidden items-center pb-3 md:flex' href='/'>
          React.js
        </Link>
        <Link className='hidden items-center pb-3 md:flex' href='/'>
          Javascript
        </Link>
        <Link className='hidden items-center pb-3 md:flex' href='/'>
          CSS
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  )
}

export default Homepage
