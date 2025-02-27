import Feed from '@/components/Feed'
import Image from '@/components/Image'
import Link from 'next/link'
import { TiArrowBackOutline } from 'react-icons/ti'

const UserPage = () => {
  return (
    <div className=''>
      {/* PROFILE TITLE */}
      <div className='sticky top-0 z-10 flex items-center gap-8 bg-[#00000084] p-4 backdrop-blur-md'>
        <Link href='/'>
          <div>
            <TiArrowBackOutline />
          </div>
        </Link>
        <h1 className='text-lg font-bold'>Lama Dev</h1>
      </div>
      {/* INFO */}
      <div className=''>
        {/* COVER & AVATAR CONTAINER */}
        <div className='relative w-full'>
          {/* COVER */}
          <div className='relative aspect-[3/1] w-full'>
            <Image path='general/cover.jpg' alt='' w={600} h={200} tr={true} />
          </div>
          {/* AVATAR */}
          <div className='absolute left-4 aspect-square w-1/5 -translate-y-1/2 overflow-hidden rounded-full border-4 border-black bg-gray-300'>
            <Image path='general/avatar.png' alt='' w={100} h={100} tr={true} />
          </div>
        </div>
        <div className='flex w-full items-center justify-end gap-2 p-2'>
          <div className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-gray-500'>
            <Image path={`icons/explore.svg`} alt='back' w={24} h={24} />
          </div>
          <div className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-gray-500'>
            <Image path={`icons/more.svg`} alt='back' w={24} h={24} />
          </div>
          <div className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-gray-500'>
            <Image path={`icons/message.svg`} alt='back' w={24} h={24} />
          </div>
          <button className='rounded-full bg-white px-4 py-2 font-bold text-black'>
            Follow
          </button>
        </div>
        {/* USER DETAILS */}
        <div className='flex flex-col gap-2 p-4'>
          {/* USERNAME & HANDLE */}
          <div className=''>
            <h1 className='text-2xl font-bold'>Lama Dev</h1>
            <span className='text-sm text-textGray'>@lamaWebDev</span>
          </div>
          <p>Lama Dev Youtube Channel</p>
          {/* JOB & LOCATION & DATE */}
          <div className='flex gap-4 text-[15px] text-textGray'>
            <div className='flex items-center gap-2'>
              <Image
                path='icons/userLocation.svg'
                alt='location'
                w={20}
                h={20}
              />
              <span>USA</span>
            </div>
            <div className='flex items-center gap-2'>
              <Image path='icons/date.svg' alt='date' w={20} h={20} />
              <span>Joined May 2021</span>
            </div>
          </div>
          {/* FOLLOWINGS & FOLLOWERS */}
          <div className='flex gap-4'>
            <div className='flex items-center gap-2'>
              <span className='font-bold'>100</span>
              <span className='text-[15px] text-textGray'>Followers</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-bold'>100</span>
              <span className='text-[15px] text-textGray'>Followings</span>
            </div>
          </div>
        </div>
      </div>
      {/* FEED */}
      <Feed />
    </div>
  )
}

export default UserPage
