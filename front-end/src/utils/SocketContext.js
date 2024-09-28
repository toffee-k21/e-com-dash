import { io } from "socket.io-client";

const { createContext, useState, useContext, useEffect } = require("react");

export const SocketContext = createContext(null);

export let useSocket =()=>{
    return useContext(SocketContext);
}

export const SocketProvider = ({children} )=>{

    const [socket,setSocket] = useState([]);
    useEffect(()=>{
        setSocket(io("http://localhost:5001/"));
          },[])
return <SocketContext.Provider value={{socket}}>
    {children}
</SocketContext.Provider>
}