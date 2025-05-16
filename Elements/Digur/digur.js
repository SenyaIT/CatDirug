import { loadCSS } from "../../Utils/loadCSS.js";

loadCSS('./Elements/Digur/digur.css')       

import { Tier } from "../Tier/tier.js"; 
const TIERNAMES = ["S","A","B","C","D","E","F"]
const TIERCOLOR = "burlywood"
export class Digur {
    constructor (name, numTiers, numInTier){
        this.name= name;
        this.numTiers = numTiers;
        this.numInTier = numInTier;
        this.tiers = [];
    }


    AddTier (tier) {
        if (! tier instanceof Tier ) return;
        this.tiers.push(tier);
    }

    render() {

        const digurDiv = document.createElement("div");
        digurDiv.className = "digur";
 
        for (let i=0; i<this.numTiers;i++ ) {
          
            let tier = new Tier (TIERNAMES[i],TIERCOLOR, i+1, this.numInTier )
            digurDiv.appendChild(tier.render());
   
         } 

        
         return digurDiv; 
    }
}