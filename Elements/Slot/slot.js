import { loadCSS } from "../../Utils/loadCSS.js";

loadCSS('./Elements/Slot/slot.css')     
export class Slot {

    constructor(actor = null){
        this.actor = actor
        this.elem = document.createElement("div")
        this.elem.className = "slot"
        this.isHovered = false
    }

    setActor(actor){
        this.actor = actor 
    }
    render () {

        // if the slot is empty
        if (!this.actor) return this.elem 


        // if the slot has something passed in
        this.elem.style.backgroundImage =  `url('${this.actor.picture}`; 
        this.elem.textContent = this.actor.name;
        
        return this.elem 
    }


    onHover() {
        this.isHovered = true
    }

    onDrop() {
        if (!this.isHovered)  return
    }

    onHoverOut () {
        this.isHovered = false;
    }
}