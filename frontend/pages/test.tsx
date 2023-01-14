import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, {Calendar, DayValue, DayRange, Day } from 'react-modern-calendar-datepicker'

const New: NextPage = () => {


    const [title, setTitle] = useState('');
    const [location, setLoc] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [creator, setCreator] = useState("")
    const [loading, setLoading] = useState(false);



    async function getFunc(){
        const poll = await fetch("http://localhost:3000/polls", {
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            mode: "cors"
        })
        .then(function(response){
            return response
        })
        return poll
    }

    async function submitHandler(){
      setLoading(true);

      const d = new Date()

      const data = {
        title: "title",
        description: "description",
        dateTime: d,
        location: "location",
        createdBy: "creator"
      }

     console.log(getFunc())

      setLoading(false);
    }


  return (
    <div className="">
      <button onClick={submitHandler} className="py-2 px-10 bg-secondary hover:bg-primary rounded-xl text-white font-medium">Submit</button>
    </div>
  );
};

export default New;
