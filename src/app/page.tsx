import Image from "next/image";
import HomePage from "@/pages/Home";
export default function Home() {
  return (
    <>
      <HomePage />
      <section className="mx-5 lg:mx-40 xl:mx-80 md:mt-28 mt-6 text-white" id="how-it-works">
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            How <span className="text-[#2B9DDA]">Data-Bank</span> Works
          </h1>
          <p className=" text-xl">A simple and secure way to store your documents </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 md:gap-5 lg:gap-9 mb-3 md:mb-10 justify-center">
          <div>
            <div className="flex gap-3 items-center mb-4">
              <span className="rounded-xl p-3 h-12 w-12 border-[#6FEEFF] bg-[#b5b5b5] bg-opacity-30">
                <Image src="/img/wallet.png" width={20} height={20} alt="wallet icon" />
              </span>
              <h3 className="font-bold text-xl">Connect Your Wallet</h3>
            </div>
            <p className="ml-16 md:ml-0">
              Sign up and securely connect your Algorand wallet, such as Pera wallet and begin using Data-bank.
            </p>
          </div>
          {/* upload section */}
          <div>
            <div className="flex gap-3 md:gap-2 lg:gap-3 items-center mb-4">
              <span className="rounded-xl p-3 h-12 w-12 border-[#6FEEFF] bg-[#b5b5b5] bg-opacity-30">
                <Image src="/img/upload.png" width={20} height={20} alt="upload icon" />
              </span>
              <h3 className="font-bold text-xl">Upload Your Documents</h3>
            </div>
            <p className="ml-16 md:ml-0">
              Easily upload important document such as IDs, certificates, or passports, select a document type and set privacy preferences.
            </p>
          </div>
          {/* mint section */}
          <div>
            <div className="flex gap-3 items-center mb-4">
              <span className="rounded-xl p-3 h-12 w-12 border-[#6FEEFF] bg-[#b5b5b5] bg-opacity-30">
                <Image src="/img/mint.png" width={20} height={20} alt="mint icon" />
              </span>
              <h3 className="font-bold text-xl">Mint as NFTs </h3>
            </div>
            <p className="ml-16 md:ml-0">Each document is securely minted as a unique NFT ensuring authenticity and immutability.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-6 gap-3 md:gap-5 lg:gap-9 justify-center">
          {/* manage section */}
          <div className="md:col-start-2 md:col-span-2">
            <div className="flex gap-3 items-center mb-4">
              <span className="rounded-xl p-3 h-12 w-12 border-[#6FEEFF] bg-[#b5b5b5] bg-opacity-30">
                <Image src="/img/manage.png" width={20} height={20} alt="manage icon" />
              </span>
              <h3 className="font-bold text-xl">Manage and Share</h3>
            </div>
            <p className="ml-16 md:ml-0">Organize your document in your dashboard and share them securely with others as needed.</p>
          </div>
          {/* access section  */}
          <div className="md:col-start-4 md:col-span-2">
            <div className="flex gap-3 items-center mb-4">
              <span className="rounded-xl p-3 h-12 w-12 border-[#6FEEFF] bg-[#b5b5b5] bg-opacity-30">
                <Image src="/img/access.png" width={20} height={20} alt="access icon" />
              </span>
              <h3 className="font-bold text-xl">Access anytime</h3>
            </div>
            <p className="ml-16 md:ml-0">Access your document from any device, anytime, with complete control over who sees them.</p>
          </div>
        </div>
      </section>
      <div className="text-white text-center h-screen" id="about-us">
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 mx-5 xl:mx-40  md:mt-28 mt-6 gap-6 lg:gap-12 mb-20">
        {/* mission */}
        <div className="md:col-start-2 md:col-span-2 border border-[#2B9DDA] rounded-xl bg-[#b5b5b5] bg-opacity-30 p-3 lg:p-7">
          <div className="flex gap-3 justify-center items-center mb-4 ">
            <span className="rounded-xl p-3 h-12 w-12 border-[#6FEEFF] bg-[#b5b5b5] bg-opacity-30">
              <Image src="/img/about.png" width={20} height={20} alt="an icon for about us" />
            </span>
            <h3 className="font-bold text-xl lg:text-2xl">Our Mission</h3>
          </div>
          <p>
            To empower individuals and organizations by providing a secure, decentralized, and user-friendly platform for storing, managing,
            and sharing important documents.
          </p>
        </div>
        {/* Vision */}
        <div className="md:col-span-2 bg-[#b5b5b5] bg-opacity-30 border border-[#2B9DDA] rounded-xl p-3 lg:p-7">
          <div className="flex gap-3 items-center justify-center mb-4">
            <span className="rounded-xl p-3 h-12 w-12 border-[#6FEEFF] bg-[#b5b5b5] bg-opacity-30">
              <Image src="/img/about.png" width={20} height={20} alt="an icon for about us" />
            </span>
            <h3 className="font-bold text-xl lg:text-2xl">Our Vision</h3>
          </div>
          <p>
            To revolutionize document management by leveraging blockchain technology to create a trustless, transparent, and efficient
            system that protects user data and empowers digital identity.
          </p>
        </div>
        {/* what we do */}
        <div className="md:col-start-3 md:col-span-2 bg-[#b5b5b5] bg-opacity-30 border border-[#2B9DDA] rounded-xl p-3 lg:p-7">
          <div className="flex gap-3 justify-center items-center mb-4">
            <span className="rounded-xl p-3 h-12 w-12 border-[#6FEEFF] bg-[#b5b5b5] bg-opacity-30">
              <Image src="/img/about.png" width={20} height={20} alt="an icon for about us" />
            </span>
            <h3 className="font-bold text-xl lg:text-2xl">What we do</h3>
          </div>
          <p>
            Data-Bank is a decentralized document storage platform that utilizes blockchain technology to provide a secure and immutable
            solution for managing your important documents.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
