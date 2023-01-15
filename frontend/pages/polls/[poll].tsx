import { NextPage} from "next";
import Head from "next/head";

const Poll: NextPage = ({pollObj}: any) => {

    let poll = JSON.parse(pollObj);
    console.log(poll)

    return (
      <div className="">
       
        <Head>
          <title>Poll</title>
        </Head>


        <main className="py-20 px-20">
          <div>
            <h1 className="text-6xl font-semibold">Hi there, here is poll #{poll.id}!</h1>
            <h2 className="text-xl text-gray-600">Created by {poll.createdBy}</h2>
          </div>
        </main>


      </div>
    )
  }

export default Poll;



export async function getStaticPaths() {

    var polls = await fetch("http://localhost:3000/polls")
    .then(res => res.json())
    .then((response)=>{
        return response
    })
    .then((res)=>{
      return res
    })

    let paths = polls.map((poll: any) => ({
        params: { poll: poll.id.toString() },
    }))
  
    return { paths, fallback: false}
  }
  
  
  export async function getStaticProps(context: any) {

    const pollID = context.params.poll;

    var poll = await fetch("http://localhost:3000/polls/" + pollID)
        .then(res => res.json())
        .then((response)=>{
            return response
        })
        .then((res)=>{
          return res
      })

    let pollObj = JSON.stringify(poll);

    return {
      props: {
        pollObj: pollObj
       },
      revalidate: 20
    }

    
  }