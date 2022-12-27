import { useState, useEffect } from "react";
import axios from 'axios'
import Navbar from './Navbar'
import {
  Text
} from '@chakra-ui/react'

export default function Home() {
  const [msg, setMsg] = useState([])
  console.log(msg)
  useEffect(() => {
    axios.get("/api/HelloWorld")
      .then((response) => {
        setMsg(response.data)
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Text>
        {msg}
      </Text>
    </div>
  )
}
