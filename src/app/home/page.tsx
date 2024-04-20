"use client";
import { NavbarComponent } from "@/components/NavBarComponent";
import { HoverEffect } from "@/components/hover-effect-grid";
import Button from "@mui/material/Button";
import React, { useState } from "react";

export default function Home() {
  return (
    <div className=' w-full bg-white h-[200vh] flex items-center  flex-col '>
      <NavbarComponent className='top-2' />
      <div className=' top-[200px] relative flex flex-col items-center w-[70%]'>
        <div className=' flex flex-col items-center'>
          <div className=' flex'>
            <h1 className=' text-black relative text-5xl font-bold'>
              Our Latest
            </h1>
            <h1 className=' text-blue-600 relative text-5xl font-bold mx-2'>
              Templates
            </h1>
          </div>
          <p className=' text-black w-[60%] text-center my-[20px]'>
            Search and explore the latest templates. Choose a template and make
            your own exam paper with just a few clicks
          </p>
          <form action=''>
            <input
              type='text'
              placeholder='Type your school or institute name'
              className=' h-[30px] rounded-md w-[300px] px-[10px] border-solid border-gray-300 border-2 '
            />
            <Button
              className='bg-blue-600 my-auto h-[30px] ml-2'
              variant='contained'
            >
              Search
            </Button>
          </form>
        </div>
        <div className=' border-solid border-gray-300 border-2  w-full  my-[50px] rounded-3xl'>
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
