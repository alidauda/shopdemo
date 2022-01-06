import { ChildBody } from "./ChildBody";

export default function BoDy({property} ){
    
    return property?property.map((p)=><ChildBody key={p.beds} p={p}/>) : null;
}


