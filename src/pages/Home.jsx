import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [roomCode, setRoomCode] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/room/${roomCode}`);
    }
  return (
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col justify-center items-center mt-50 font-poppins">
        <div className="text-xl">Enter a Room Code</div>
        <input className="focus:ring-blue-500 mt-4 focus:border-blue-500 block w-50 p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" required value={roomCode} onChange={(e)=>setRoomCode(e.target.value)} placeholder="Enter room code" />
    <button type="submit" className="border-2 p-2 rounded-lg mt-8 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">Enter Room</button>
    </div>
      
    </form>
  )
}

export default Home;
