import Link from 'next/link'
import Image from './Image'
import PostInfo from './post-info'
import PostInteractions from './post-interactions'

const Post = () => {
  return (
    <div className='className="p-4 border-borderGray" border-y-[1px]'>
      {/* POST TYPE */}
      <div className='text-textGray from-bold mb-2 flex items-center gap-2 text-sm'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 24 24'
        >
          <path
            fill='#71767b'
            d='M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z'
          />
        </svg>
        <span>Lama Dev reposted</span>
      </div>
      {/* POST CONTENT */}
      <div className={`flex gap-4`}>
        {/* AVATAR */}
        <div className='relative h-10 w-10 overflow-hidden rounded-full'>
          <Image path='general/avatar.png' alt='' w={100} h={100} tr={true} />
        </div>
        <div className='flex flex-1 flex-col gap-2'>
          {/* TOP */}
          <div className='flex w-full justify-between'>
            <Link href={`/lamaWebDev`} className='flex gap-4'>
              <div className='} relative h-10 w-10 overflow-hidden rounded-full'>
                <Image
                  path='general/avatar.png'
                  alt=''
                  w={100}
                  h={100}
                  tr={true}
                />
              </div>
              <div className='flex flex-wrap items-center gap-2'>
                <h1 className='text-md font-bold'>Lama Dev</h1>
                <span className='text-textGray'>@lamaWebDev</span>
                <span className='text-textGray'>1 day ago</span>
              </div>
            </Link>
            <PostInfo />
          </div>
          {/* TEXT & MEDIA */}
          <Link href={`/lamaWebDev/status/123`}>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              animi. Laborum commodi aliquam alias molestias odio, ab in,
              reprehenderit excepturi temporibus, ducimus necessitatibus fugiat
              iure nam voluptas soluta pariatur inventore.
            </p>
          </Link>
          <Image path='general/post.jpeg' alt='' w={600} h={600} />
          <PostInteractions />
        </div>
      </div>
    </div>
  )
}

export default Post
