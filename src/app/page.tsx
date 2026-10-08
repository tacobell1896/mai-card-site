import Image from "next/image";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center ">
        <div className="bg-white rounded-lg sm:mx-48 sm:max-w-1/2">
          <div className="flex items-center justify-between px-4 py-3 bg-linear-to-r from-rose-300 to-white rounded-t-lg text-center">
mai.exe - running
    <div className="flex space-x-2">
      <div className="w-8 h-8 bg-green-200 rounded-lg cursor-pointer hover:bg-green-300 transition-colors border-gray-300 border-2 flex items-center justify-center">        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.17454 0.000155885C0.622342 -0.00948325 0.166881 0.43035 0.157243 0.982551L0.000170521 9.98118C-0.00946819 10.5334 0.430365 10.9888 0.982566 10.9985C1.53477 11.0081 1.99023 10.5683 1.99987 10.0161L2.13949 2.0173L10.1383 2.15692C10.6905 2.16656 11.1459 1.72673 11.1556 1.17453C11.1652 0.622327 10.7254 0.166866 10.1732 0.157227L1.17454 0.000155885ZM7.56152 7.63199L8.28086 6.93733L1.87643 0.305345L1.15709 1L0.43775 1.69466L6.84218 8.32665L7.56152 7.63199Z" fill="#1E1E1E" fill-opacity="0.26"/>
      <path d="M17.8785 19.3352C18.4308 19.3352 18.8785 18.8875 18.8785 18.3352L18.8785 9.33521C18.8785 8.78293 18.4308 8.33521 17.8785 8.33521C17.3262 8.33521 16.8785 8.78293 16.8785 9.33521V17.3352H8.87852C8.32623 17.3352 7.87852 17.7829 7.87852 18.3352C7.87852 18.8875 8.32623 19.3352 8.87852 19.3352L17.8785 19.3352ZM11.3593 11.816L10.6522 12.5231L17.1714 19.0423L17.8785 18.3352L18.5856 17.6281L12.0664 11.1089L11.3593 11.816Z" fill="#1E1E1E" fill-opacity="0.26"/>
      </svg>
</div>
      <div className="w-8 h-8 bg-cyan-200 rounded-lg cursor-pointer hover:bg-cyan-300 transition-colors border-gray-300 border-2 flex items-center justify-center"><svg width="16" height="1" viewBox="0 0 16 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="0.5" x2="16" y2="0.5" stroke="#1E1E1E" stroke-opacity="0.26"/>
      </svg>

</div>
      <div className="w-8 h-8 bg-violet-300 rounded-lg cursor-pointer hover:bg-violet-400 transition-colors border-gray-300 border-2 flex items-center justify-center"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0.828529" y1="0.353539" x2="18.2928" y2="17.8178" stroke="#1E1E1E" stroke-opacity="0.26"/>
      <line x1="0.353539" y1="18.0499" x2="17.8178" y2="0.585641" stroke="#1E1E1E" stroke-opacity="0.26"/>
      </svg>
</div>
    </div>
          </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-x-2 sm:gap-y-16 gap-8 px-8 py-6 my-8" >
              <Image src="/girl.png" width="300" height="600" alt="Welcome to my site!" className="rounded-lg sm:aspect-auto aspect-square object-cover object-top sm:order-1 order-2 row-span-4"/>
              <div className="bg-rose-300 text-center rounded-lg sm:order-2 order-1 sm:col-2 flex items-center justify-around row-span-2 p-8">
                Hi, I’m Mai ˖◛⁺⑅♡ Cosplayer/Agnes Tachyon lover.
                More of me below (´ε｀ )♡
              </div>
              <a href="https://x.com/ggs_cos" className="bg-rose-300 text-center rounded-lg order-3 sm:col-2 flex items-center justify-around p-8">
                Twitter (´• ω •`) ♡
                (I post daily) (Secret Link is there!)
              </a>
              <a href="https://www.instagram.com/xxggsonlyxx" className="bg-rose-300 text-center rounded-lg order-4 sm:col-2 flex items-center justify-around p-8">
                Instagram ♡( ◡‿◡ )
              </a>
            </div>
        </div>
			</main>
		</div>
	);
}
