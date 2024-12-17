import { LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { db } from "~/utils/db.server"
import nisse1 from "app/assets/Nisse1.png"
import nisse2 from "app/assets/Nisse2.png"
import nisse3 from "app/assets/Nisse3.png"
import nisse4 from "app/assets/Nisse4.png"


export async function loader({params}:LoaderFunctionArgs) {
    let  id  = await params   
    id = id.id
    const data = await db.character.findFirst({
        where: {
            id: id
        }
    })
    return data
}

export default function Character (){
 const character = useLoaderData()
    let img;
    console.log(character.id);
    
    switch(character.id){
    case "1":
        img = nisse1
        break;
    case "2":
        img = nisse2
        break;
    case "3":
        img = nisse3
        break;
    case "4":
        img = nisse4
        break;
    }

 return <div className="flex justify-center flex-col items-center gap-10 m-6">
    <h2 className="text-xl font-extrabold">{character.name}</h2>
    <img src={img} alt="" />
    <div className="flex flex-col gap-3">
        <div className="flex justify-between">
            <label htmlFor="Constitution">Constitution</label>
            <input name="Constitution" type="number" defaultValue={character.constitution} className="bg-transparent w-8 text-right"/>
        </div>
        <div className="flex justify-between">
            <label htmlFor="Dexterity">Dexterity</label>
            <input name="Dexterity" type="number" defaultValue={character.dexterity} className="bg-transparent w-8 text-right"/>
        </div>
        <div className="flex justify-between">
            <label htmlFor="Strength">Strength</label>
            <input name="Strength" type="number" defaultValue={character.strength} className="bg-transparent w-8 text-right"/>
        </div>
        <div className="flex justify-between">
            <label htmlFor="Charisma">Charisma</label>
            <input name="Charisma" type="number" defaultValue={character.charisma} className="bg-transparent w-8 text-right"/>
        </div>
        <div className="flex justify-between">
            <label htmlFor="Intellect">Intellect</label>
            <input name="Intellect" type="number" defaultValue={character.intellect} className="bg-transparent w-8 text-right"/>
        </div>
        <div className="flex justify-between">
            <label htmlFor="Perception">Perception</label>
            <input name="Perception" type="number" defaultValue={character.perception} className="bg-transparent w-8 text-right"/>
        </div>
    </div>
    <div className="flex flex-col gap-3">
        <h3 className="text-xl">Attacker</h3>
        <div className="flex justify-between">
            <label htmlFor="life">Livspoäng</label>
            <input name="life" type="number" defaultValue={20} className="bg-transparent w-8 text-right" />
        </div>
        <p className="font-sans">Närstrid: {character.closeRange}</p>
        <p className="font-sans">Långdistans: {character.longRange}</p>
        <p className="font-sans">Special: {character.attackSkill}</p>
    </div>
    <div className="flex flex-col gap-3">
        <h3 className="text-xl">Egenskaper</h3>
        <p className="font-sans">{character.skill1}</p>
        <p className="font-sans">{character.skill2}</p>
        <p className="font-sans">{character.skill3}</p>
    </div>
        <h3 className="text-xl">Anteckningar</h3>
        <div contentEditable className="bg-transparent w-full mb-12 font-sans rounded-md border border-[black]"></div>
 </div>
}