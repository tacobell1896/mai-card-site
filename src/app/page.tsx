import Image from "next/image";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="bg-white rounded-lg sm:mx-48">
          <div className="flex items-center justify-between px-4 py-3 bg-linear-to-r from-rose-300 to-white rounded-t-lg text-center">
mai.exe - running
    <div className="flex space-x-2">
      <div className="w-8 h-8 bg-green-200 rounded-lg cursor-pointer hover:bg-green-300 transition-colors border-gray-300 border-2"></div>
      <div className="w-8 h-8 bg-cyan-200 rounded-lg cursor-pointer hover:bg-cyan-300 transition-colors border-gray-300 border-2"></div>
      <div className="w-8 h-8 bg-violet-300 rounded-lg cursor-pointer hover:bg-violet-400 transition-colors border-gray-300 border-2"></div>
    </div>
          </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-x-4 sm:gap-y-16 gap-8 px-8 py-6 my-8" >
              <Image src="/girl.png" width="300" height="600" alt="Welcome to my site!" className="rounded-lg sm:aspect-auto aspect-square object-cover object-top sm:order-1 order-2 row-span-4"/>
              <div className="bg-rose-300 text-center rounded-lg sm:order-2 order-1 sm:col-2 flex items-center justify-around row-span-2 sm:py-4 sm:px-2 py-8 px-8">
                Hi, I’m Mai ˖◛⁺⑅♡ Cosplayer/Agnes Tachyon lover.
                More of me below (´ε｀ )♡
              </div>
              <a href="https://x.com/ggs_cos" className="bg-rose-300 text-center rounded-lg order-3 sm:col-2 flex items-center px-8 py-8">
                Twitter (´• ω •`) ♡
                (I post daily) (Secret Link is there!)
              </a>
              <a href="https://www.instagram.com/xxggsonlyxx" className="bg-rose-300 text-center rounded-lg order-4 sm:col-2 flex items-center justify-around py-8">
                Instagram ♡( ◡‿◡ )
              </a>
            </div>
        </div>
			</main>
		</div>
	);
}
