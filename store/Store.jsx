import { create } from "zustand";
const Selected = create((set) => ({
    total:0,
    darkmode:true,
    date:null,
    destination:null,
    setdestination:(text)=>set({destination:text}),
    setdate:(date)=>set({date:date}),
    setdarkmode:(mode)=>set({darkmode:mode}),
    settotal:(no)=>set({total:no}),
}));
export default Selected;