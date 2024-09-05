import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="h-screen w-screen sm:bg-none text-white">
      <div className="absolute inset-0 blur-sm bg-black opacity-20 sm:hidden">
        <Image src="/assets/contact/IMG_8498-Edit-2.jpg" alt="Background" fill={true} quality={100} className="z-0 object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center h-full text-center sm:flex-row sm:justify-between sm:text-center">
      <div className="hidden sm:block sm:relative  sm:object-cover sm:w-1/2 sm:h-full">
          <Image src="/assets/contact/IMG_8498-Edit-2.jpg" alt="Image" fill={true} quality={100}  className="z-0 object-cover"
 />
        </div>
        <div className="z-20 sm:z-0 p-4 sm:w-1/2 sm:h-full sm:flex sm:flex-col sm:justify-center sm:bg-zinc-800 sm:bg-opacity-75">
          <h1 className="text-4xl font-bold mb-4">Get in Contact</h1>
          <div className="text-lg whitespace-pre-line">The only way to get in contact with me is via email at <u className='text-blue-500'><Link href="mailto:ethan@fxllencode.dev" target='_blank'>ethan@fxllencode.dev</Link></u>.
          
          {"\n\n"}

          There is no other official way to get in contact with me. Always verify the identify of any social media accounts under my name by sending me an email before engaging with them.
          </div>
        </div>
        
      </div>
    </div>
  );
}
