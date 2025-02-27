import Link from 'next/link'
import Image from './Image'

const PopularTags = () => {
  return (
    <div className='flex flex-col gap-4 rounded-2xl border-[1px] border-borderGray p-4'>
      <h1 className='text-xl font-bold text-textGrayLight'>
        {"What's"} Happening
      </h1>
      {/* TREND EVENT */}
      <div className='flex gap-4'>
        <div className='relative h-20 w-20 overflow-hidden rounded-xl'>
          <Image
            path='general/cover.jpg'
            alt='event'
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className='flex-1'>
          <h2 className='font-bold text-textGrayLight'>
            Nadal v Federer Grand Slam
          </h2>
          <span className='text-sm text-textGray'>Last Night</span>
        </div>
      </div>
      {/* TOPICS */}
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-textGray'>Technology • Trending</span>
          <Image path='icons/infoMore.svg' alt='info' w={16} h={16} />
        </div>
        <h2 className='font-bold text-textGrayLight'>OpenAI</h2>
        <span className='text-sm text-textGray'>20K posts</span>
      </div>
      {/* TOPICS */}
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-textGray'>Technology • Trending</span>
          <Image path='icons/infoMore.svg' alt='info' w={16} h={16} />
        </div>
        <h2 className='font-bold text-textGrayLight'>OpenAI</h2>
        <span className='text-sm text-textGray'>20K posts</span>
      </div>
      {/* TOPICS */}
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-textGray'>Technology • Trending</span>
          <Image path='icons/infoMore.svg' alt='info' w={16} h={16} />
        </div>
        <h2 className='font-bold text-textGrayLight'>OpenAI</h2>
        <span className='text-sm text-textGray'>20K posts</span>
      </div>
      {/* TOPICS */}
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-textGray'>Technology • Trending</span>
          <Image path='icons/infoMore.svg' alt='info' w={16} h={16} />
        </div>
        <h2 className='font-bold text-textGrayLight'>OpenAI</h2>
        <span className='text-sm text-textGray'>20K posts</span>
      </div>
      <Link href='/' className='text-iconBlue'>
        Show More
      </Link>
    </div>
  )
}

export default PopularTags
