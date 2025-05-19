import { loadCSS } from "../../Utils/loadCSS.js";
loadCSS('../Elements/Tier/tier.css')      

import { Slot } from "../Slot/slot.js";

const doc = document.getElementById("app");

export class Tier{
    constructor(name, color, rank, number) {
        this.name = name;
        this.color = color;
        this.rank = rank;
        this.number = number;
        this.slots = [];
    }

    addSlot (slot){
        if (!slot instanceof Slot) return;
        this.slots.push(slot);
    }

    render () {

        // createing a tier 
        const DivTier = document.createElement("div") ;
        DivTier.className = "tier"; 
        DivTier.style.backgroundColor = this.color; 


        //adding a name of the tier : s a ... f
        const TierName = document.createElement("div")
        TierName.className = "tier-name"
        TierName.textContent = this.name;
        DivTier.appendChild(TierName) 


        //rendering slots with cats or empty
        for (let i = 0; i< this.number; i++) { 

            //creating an  empty slot
            const slot = new Slot(null,this.rank, i+1) 
            this.addSlot(slot)  

            // adding slot to the Tier
            DivTier.appendChild(slot.render()) 
            
        }

        return(DivTier) 
    
    }
}