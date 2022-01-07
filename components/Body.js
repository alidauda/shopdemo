import { ChildBody } from "./ChildBody";

export default function BoDy({property} ){
    
    return property?property.map((p)=><ChildBody key={p.id} p={p}/>) : null;
}


