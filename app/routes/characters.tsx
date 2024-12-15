import { Outlet } from "@remix-run/react";
import parchment from "app/assets/parchment.png"

export default function Characters(){
    return <div className="h-screen bg-orange-100 bg-center bg-cover text-black bg-parchment">
        <img src={parchment} alt="" className="fixed z-0 left-0 top-0 h-full" />
       <div className="relative z-10">
       <h1 className="text-center text-2xl mt-14 font-extrabold">Christmas Roleplay</h1>
            <Outlet />
        </div> 
        </div>
}