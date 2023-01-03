import axios from 'axios'
import { useState, useEffect } from 'react';


export default function Home() {
  const [backend, setBackend] = useState('')


  useEffect(() => {
    axios.get("/api/helloworld")
      .then((res) => {
        setBackend(res.data)
      });
  }, []);



  return (
    <div>
      <p>
        {backend}
      </p>
    </div>
  )
}
