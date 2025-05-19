import { DragCard } from "../../Globals/dragCard.js";
import { loadCSS } from "../../Utils/loadCSS.js";

loadCSS('../Elements/Slot/slot.css')     
export class Slot {

    constructor(actor = null, row, col){
        this.actor = actor
        this.row = row
        this.col = col

        this.elem = document.createElement("div")
        this.elem.className = "slot"

        this.elem.dataset.row = row;
        this.elem.dataset.col = col;

        this.isHovered = false


        // drag and drop events :
        this.elem.addEventListener("mouseenter", this.onHover) 
        this.elem.addEventListener("mouseleave", this.onHoverOut) 
        this.elem.addEventListener("mousedown", this.onTake) 
    }

    setActor(actor){
        this.actor = actor 
    }
    checkActor() {
        if (this.actor) return true;
        return false;
    }
    render () {
        return this.elem 
    }



    onHover = (e) => {
        this.isHovered = true 
        this.elem
    }

    onHoverOut = (e) => {
        this.isHovered = false;
    } 

    onTake = (e) => {
    }
}