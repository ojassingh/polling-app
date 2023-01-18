import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Poll: NextPage = ({ pollObj }: any) => {
  let poll = JSON.parse(pollObj);

  let responses = poll.responses;


  

  return (
    <div className="">
      <Head>
        <title>Answer the Poll</title>
      </Head>

      <main className="py-20 px-20">
        <div id="intro">
          <h1 className="text-6xl font-semibold">
            Hi there, here is your poll! (ID #{poll.id})
          </h1>
          <h2 className="text-xl text-gray-600">
            Created by <strong className="text-primary">{poll.creator}</strong>{" "}
            on {new Date(poll.createdAt).toUTCString()}
          </h2>
        </div>

        <div className="p-10 mt-10 mb-4 outline outline-1 outline-gray-500 rounded-3xl">
          <div className="text-2xl">
            <h1 className="text-4xl font-semibold text-secondary">
              {poll.title}
            </h1>
            <h1 className="">Notes: {poll.title}</h1>
            <h1 className="">Venue: {poll.location}</h1>
            <h1 className="">Date: {poll.location}</h1>
          </div>
        </div>

        <div
          id="add-repsponse"
          className="p-10 outline outline-1 outline-gray-500 rounded-3xl"
        >
          <div className="text-2xl">
            <h1 className="text-secondary font-semibold">Add your response!</h1>
          </div>
          <div className="py-4 flex flex-wrap place-content-center gap-20">
            <div id="details" className="grid gap-1">
              <p className="">What is your name?</p>
              <input placeholder="John Doe IV" className="p-2 rounded-3xl" />
            </div>
            <div id="optionA" className="grid gap-1">
              <button className="p-4 bg-green-100 outline outline-1 outline-green-600 rounded-2xl hover:bg-green-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                I'll make it!
              </button>
            </div>
            <div id="optionB" className="grid gap-1">
              <button className="p-4 bg-yellow-100 outline outline-1 outline-yellow-600 rounded-2xl hover:bg-yellow-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
                Maybe, if I have to
              </button>
            </div>
            <div id="optionC" className="grid gap-1">
              <button className="p-4 bg-red-100 outline outline-1 outline-red-600 rounded-2xl hover:bg-red-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
                Sorry, can't make it
              </button>
            </div>
          </div>
        </div>

        <div
          id="previous-responses"
          className="p-10 my-4 outline outline-1 outline-gray-500 rounded-3xl"
        >
          <div className="text-2xl font-semibold text-secondary">
            <h1 className="">Other responses</h1>
          </div>
          <div id="responses" className="">
            {/* {responses.map((response: any)=>{
              return(<div className="">
                  
              </div>)
            })} */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Poll;

export async function getStaticPaths() {
  var polls = await fetch("http://localhost:3000/polls")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  let paths = polls.map((poll: any) => ({
    params: { poll: poll.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
  const pollID = context.params.poll;

  var poll = await fetch("http://localhost:3000/polls/" + pollID)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  let pollObj = JSON.stringify(poll);

  return {
    props: {
      pollObj: pollObj,
    },
    revalidate: 20,
  };
}
