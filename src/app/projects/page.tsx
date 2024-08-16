import Image from "next/image";
import Link from "next/link";
import CustomSend from "../components/CustomSend";
import { GoArrowUpRight } from "react-icons/go";

export default function Projects() {
  return (
    <main className="w-full bg-zinc-800 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
      {/* First one */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:mx-32 lg:mx-64 my-10 p-10 rounded-lg bg-zinc-900">
        <div className="w-full md:w-1/2 mb-4 md:mx-5 md:mb-0">
          <Image src="/Banner.png" alt="Status+" width={250} height={150} className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 md:mx-5 md:pl-4">
          <h2 className="text-2xl font-semibold mb-2">Status+</h2>
          <p className="mb-4">Status+ was my primary project I worked on from 2021 to 2023, and started as a small personal project to a Discord bot with over 2k servers, 2 million user interactions, and 5,000 server members. I founded the project and wrote the intial bot before shifting to an oversight role as well as working on the backend, system design, database management, and DevOps. The project was shut down in 2023, and there are currently no plans on restarting. However, the project was a great learning experience and I heavily enjoyed working on DevOps.</p>
          <div className="flex flex-col text-center md:text-left md:flex-row lg:space-x-4">
            <CustomSend url="https://github.com/Status-Plus" text="Github"/>
            <CustomSend url="https://discord.gg/status-800480268733120533" text="Discord Archive"/>
            <CustomSend url="https://devforum.roblox.com/t/status-revamped-improved-outage-tracking-and-fflag-updates-all-on-discord-and-in-a-bot/1536258" text="DevForum Post"/>
          </div>
        </div>
      </div>
      {/* Second one */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:mx-32 lg:mx-64 my-10 p-10 rounded-lg bg-zinc-900">
        <div className="w-full md:w-1/2 mb-4 md:mx-5 md:mb-0">
          <Image src="/PXL_20240711_165216659~2.jpg" alt="Pi25-SDR" width={250} height={150} className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 md:mx-5 md:pl-4">
          <h2 className="text-2xl font-semibold mb-2">FultonScanner.com & Pi25-Scanner-SDR</h2>
          <p className="mb-4">FultonScanner and Pi25 SDR was a project I started working on in 2024 out of interest in radio communcations and public safety in my area. I wanted a scanner, but the cost of one that supports digital radio was over $650! Instead, I used Raspberry Pi, Ubuntu, and multiple other open-source softwares to create my own scanner that not just creates an awesome looking device, but a site to allow others from around the world to listen in. I am currently working on a writeup on how I created the physical device and the custom scripts I created to make it work seamlessly. FultonScanner.com is the public portal for my scanner. It currently only listens to NFRRSA, though I plan on adding Fulton County P25 in the near future.</p>
          <div className="flex flex-col text-center md:text-left md:flex-row lg:space-x-4">
            <CustomSend url="fultonscanner.com" text="FultonScanner.com"/>
            <CustomSend url="https://github.com/FxllenCode/Pi25-Scanner-SDR" text="Pi25-Scanner-SDR Github (WIP)"/>
          </div>
        </div>
      </div>
      {/* Third one */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:mx-32 lg:mx-64 my-10 p-10 rounded-lg bg-zinc-900">
        <div className="w-full md:w-1/2 mb-4 md:mx-5 md:mb-0">
          <Image src="/firefox_R8ZSTRJR3F.png" alt="Pi25-SDR" width={250} height={150} className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 md:mx-5 md:pl-4">
          <h2 className="text-2xl font-semibold mb-2">DevOps-Rblx & Roxios</h2>
          <p className="mb-4">DevOps-Rblx and Roxios are two projects I created for the Roblox game engine that demostrate the ability to seamlessly integrate with toolchains and other professional tools for game development, such as Wally, Git, and more. DevOps-Rblx is a sample project that teaches users how to create their own open-source package with a full CI/CD cycle, and Roxios is a wrapper of HttpService inspired by Axios in JavaScript - using the development cycle created in DevOps-Rblx. Both are completely open source and are maintaned as needed. I also created a lengthy tutorial on the DevForum for developers interested in the DevOps process I created for this deployment cycle. </p>
          <div className="flex flex-col text-center md:text-left md:flex-row lg:space-x-4 md:flex-wrap">
            <CustomSend url="https://github.com/FxllenCode/devops-rblx-tutorial" text="DevOps-Rblx Github"/>
            <CustomSend url="https://devforum.roblox.com/t/creating-a-proper-open-source-project-with-devops/1796689/" text="DevOps-Rblx DevForum Post"/>
            <CustomSend url="https://github.com/FxllenCode/roxios/" text="Roxios Github"/>
            <CustomSend url="https://devforum.roblox.com/t/roxios-promise-based-httpservice-wrapper-based-off-of-axios/1767740" text="Roxios DevForum Post"/>
            <CustomSend url="https://wally.run/package/fxllencode/roxios" text="Roxios on Wally"/>
          </div>
        </div>
      </div>
      {/* Fourth one */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:mx-32 lg:mx-64 my-10 p-10 rounded-lg bg-zinc-900">
        <div className="w-full md:w-1/2 mb-4 md:mx-5 md:mb-0">
          <Image src="/firefox_jaO76BohPA.png" alt="Pi25-SDR" width={250} height={150} className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 md:mx-5 md:pl-4">
          <h2 className="text-2xl font-semibold mb-2">APCSP & APCSA Notes/Projects</h2>
          <p className="mb-4">After taking and passing both AP Computer Science Principles and AP Computer Science Applications, I decided to publish my notes and sample programs I wrote for the classes I took. I have not filtered through any of it nor is it tailored to be a study guide, but you can use it as a reference or however you find fit. It's fully open source. </p>
          <div className="flex flex-col text-center md:text-left md:flex-row lg:space-x-4 md:flex-wrap">
            <CustomSend url="https://github.com/FxllenCode/APCSPWork" text="APCSP Github"/>
            <CustomSend url="https://github.com/FxllenCode/APCSA" text="APCSA Github"/>

          </div>
        </div>
      </div>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
           
      
    </main>
  );
}