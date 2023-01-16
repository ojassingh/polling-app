import type { NextPage } from "next";
import { useEffect, useState } from "react";

const New: NextPage = () => {


    const [title, setTitle] = useState('');
    const [location, setLoc] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [creator, setCreator] = useState("")
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null)



    async function getFunc(){

        var poll = fetch("http://localhost:3000/polls")
        .then(res => res.json())
        .then(data => {
          return data
        })
        
        return poll
        
    }

    async function submitHandler(){
      setLoading(true);

     let poll = await getFunc()
     console.log(poll)

      setLoading(false);
    }


  return (
    <div className="">
      <button onClick={submitHandler} className="py-2 px-10 bg-secondary hover:bg-primary rounded-xl text-white font-medium">Submit</button>
    </div>
  );
};

export default New;
