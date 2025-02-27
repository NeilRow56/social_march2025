'use client'

import React from 'react'
import Image from './Image'

const Share = () => {
  return (
    <form className='flex gap-4 p-4' action={() => {}}>
      {/* AVATAR */}
      <div className='relative h-10 w-10 overflow-hidden rounded-full'>
        <Image path='general/avatar.png' alt='' w={100} h={100} tr={true} />
      </div>
      {/* OTHERS */}
      <div className='flex flex-1 flex-col gap-4'>
        <input
          type='text'
          name='desc'
          placeholder='What is happening?!'
          className='placeholder:text-textGray bg-transparent text-xl outline-none'
        />
        {/* PREVIEW IMAGE */}

        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div className='flex flex-wrap gap-4'>
            <input
              type='file'
              name='file'
              className='hidden'
              id='file'
              accept='image/*,video/*'
            />
            <label htmlFor='file'>
              <Image
                path='icons/image.svg'
                alt=''
                w={20}
                h={20}
                className='cursor-pointer'
              />
            </label>
            <Image
              path='icons/gif.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
            <Image
              path='icons/poll.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
            <Image
              path='icons/emoji.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
            <Image
              path='icons/schedule.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
            <Image
              path='icons/location.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
          </div>
          <button className='rounded-full bg-white px-4 py-2 font-bold text-black'>
            Post
          </button>
        </div>
      </div>
    </form>
  )
}

export default Share
