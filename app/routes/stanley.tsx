import { ActionFunctionArgs } from "@remix-run/node"
import { Link, redirect, useActionData } from "@remix-run/react"
import parchment from "app/assets/parchment.png"

export async function action({request}:ActionFunctionArgs) {
    const body = await request.formData()
    const name = await body.get('text')
    if(name && name.includes('stan')){
        return redirect('https://carlstanley.se')
    }
    return name
}

export default function Characters(){
    const data = useActionData()
    console.log(data);
    
    return <div className="h-screen bg-orange-100 bg-center bg-cover text-black">
        <img src={parchment} alt="" className="fixed z-0 left-0 top-0 h-full" />
        <div className="relative z-10 flex flex-col h-screen align-middle justify-center gap-8 p-8">
            <p>I tiderna innan gjordes ett försök</p>
            <p>men pest och plåga tog planerna och dök</p>
            <p>Tid har nu gått, vi får chansen ny</p>
            <p>att i Malmö gå, på Carl <form action="" method="post"><input className="bg-transparent border border-black rounded-md" type="text" name="text" /> <button type="submit">{'>'}</button></form></p>
        </div>
        
        
        </div>
}