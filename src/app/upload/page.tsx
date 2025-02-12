"use client";
import FileUpload from "@/components/FileUpload";
import DashboardNav from "@/components/DashboardNav"
import Sidebar from "@/components/Sidebar"

export default function DashboardUpload() {
  return (
    <>
    <Sidebar />
        <div className="py-8 px-12 text-white bg-[#0D0D0D] min-h-screen flex gap-3 flex-col mt-20 md:mt-0 md:ml-64">
      {/* Header */}
      <DashboardNav />
      <section className="w-full h-full">
        <p className="text-lg mb-3 text-center">
          Upload your document securely to the blockchain. choose a document type and set your privacy preferences.
        </p>
        <FileUpload />
        <section className="mt-5">
          {/* <DocumentSelector /> */}
        </section>

      </section>
    </div>
    </>
  );
}
