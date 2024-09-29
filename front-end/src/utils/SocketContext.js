import { io } from "socket.io-client";

const { createContext, useState, useContext, useEffect, useMemo } = require("react");

export const SocketContext = createContext(null);

export const useSocket =()=>{
    return useContext(SocketContext);
}

export const SocketProvider = ({children} )=>{

const socket = useMemo(() => io("http://localhost:5001/"), []);
return <SocketContext.Provider value={{socket}}>
    {children}
</SocketContext.Provider>
}