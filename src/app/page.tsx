import Image from "next/image";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="bg-white rounded-lg ">
          <div className="flex items-center justify-between px-4 py-3 bg-linear-to-r from-rose-300 to-white rounded-t-lg text-center">
mai.exe - running
          </div>
          <div className="columns-2  px-4 py-6 gap-6">
            <Image src="/girl.png" width="150" height="600" alt="Welcome to my site!" className="rounded-lg"/>
            <div className="bg-rose-300 text-center px-4 py-6 my-6 rounded-lg">
              Hi, I’m Mai ˖◛⁺⑅♡ Cosplayer/Agnes Tachyon lover.
              More of me below (´ε｀ )♡
            </div>
            <div className="bg-rose-300 text-center px-4 py-6 my-6 rounded-lg">
              Twitter (´• ω •`) ♡
              (I post daily) (Secret Link is there!)
            </div>
            <div className="bg-rose-300 text-center px-4 py-6 my-6 rounded-lg">
              Instagram ♡( ◡‿◡ )
            </div>

          </div>
        </div>
			</main>
		</div>
	);
}
