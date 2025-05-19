import { DragCard } from "../../Globals/dragCard.js";
import { Start } from "../../Globals/start.js";
import { loadCSS } from "../../Utils/loadCSS.js";
import { Content } from "../Content/content.js";

loadCSS('../Elements/Digur/digur.css')

import { Tier } from "../Tier/tier.js";
const TIERNAMES = ["S", "A", "B", "C", "D", "E", "F"]
const TIERCOLOR = "burlywood"
export class Digur {
    constructor(name, numTiers, numInTier) {
        this.name = name;
        this.numTiers = numTiers;
        this.numInTier = numInTier;
        this.tiers = [];
        this.digurDiv = document.createElement("div");

        document.addEventListener("mouseup", this.onDrop)
        document.addEventListener("keydown", this.testDirug)
    }


    testDirug = (e) => {
        this.tiers.forEach(tier => {
            tier.slots.forEach(slot=>{
                console.log(slot.actor)
            })
        })
    }
    AddTier(tier) {
        if (!tier instanceof Tier) return;
        this.tiers.push(tier);
    }

    render() {

        this.digurDiv.remove()
        this.digurDiv = document.createElement("div"); 

        this.digurDiv.className = "digur";

        for (let i = 0; i < this.numTiers; i++) {

            let tier = new Tier(TIERNAMES[i], TIERCOLOR, i + 1, this.numInTier)
            this.AddTier(tier)
            this.digurDiv.appendChild(tier.render());

        }
        return this.digurDiv;
    }

    onDrop = (e) => {

        // getting the dr agging card
        let dragCard = DragCard.getCard()

        // if no dragging card nothing happens
        if (!dragCard) return

        if (Content.hovered) {
            return 
        }

        // getting the element on which the card is being dropped
        const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

        // if one of the slots are the target of the drop
        if (hoveredElement.classList.contains("slot")) {

            // the hovered element has been detected so its time to bring visibility back
            dragCard.makeHitVisible()

            // getting the row and column of the slot int the DOM
            const row = parseInt(hoveredElement.dataset.row)
            const col = parseInt(hoveredElement.dataset.col)

            const slot = this.tiers[row - 1].slots[col - 1] // getting the correct slot

            if (!slot.checkActor()) { 
                slot.setActor(dragCard.actor)   // setting an actor if empty

                hoveredElement.appendChild(dragCard.elem) //  putting the dragging card inside of the slot in the DOM 

                dragCard.elem.classList.add("in-slot");
                dragCard.setSlot(slot);   

                slot.render() 
            }
            

            DragCard.clearCard()
        }

        // if we hit smth else
        else {
            dragCard.makeHitVisible()
            DragCard.clearCard()
        }



    }
}