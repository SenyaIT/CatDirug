import { DragCard } from "../../Globals/dragCard.js";
import { loadCSS } from "../../Utils/loadCSS.js";

loadCSS('../Elements/Card/card.css')       

export class Card {
    constructor(actor){ 
        this.actor = actor;
        this.elem = document.createElement("div");
        this.elem.className = "card"  
        this.elem.id = actor.name
 
        this.slot = null 

        this.isDragging = false
         
        this.elem.addEventListener('mousedown', this.onDrag) 
        document.addEventListener('mousemove', this.onMove)  
        document.addEventListener('mouseup', this.onDrop)  

        this.offsetX = 100; 
        this.offsetY = 100;     
    } 

    render (){
        const cardDiv = document.createElement("div")

        cardDiv.className = "card-img-div" 
        cardDiv.style.backgroundImage =  `url('${this.actor.picture}`; 
        this.elem.appendChild(cardDiv) 

        const text = document.createElement("p")
        text.textContent = this.actor.name;
        

        this.elem.appendChild(text)  
        
        return this.elem
    }


    // Drag and Drop Functions

    onDrag = (e)=> {
        if (e.button !== 0) return; 

        this.makeHitInvisible()

        // checking if card is in slot
        if (this.slot) {
            this.elem.classList.remove("in-slot")  
            this.slot.actor = null 
        }

        this.isDragging = true
        this.elem.style.left = `${e.clientX - this.offsetX}px`;
        this.elem.style.top = `${e.clientY - this.offsetY}px`;  
        this.elem.classList.add("drag") 
        
        DragCard.setCard(this) 

    }
     onMove= (e)=> {
         
        if (!this.isDragging) return 

        this.elem.style.left = `${e.clientX - this.offsetX}px`;
        this.elem.style.top = `${e.clientY - this.offsetY}px`; 

     }
     onDrop= (e)=> {
        this.isDragging = false
        this.elem.classList.remove("drag") 
     } 

    makeHitInvisible() {
        this.elem.style.pointerEvents = "none"
    }
    makeHitVisible() {
        this.elem.style.pointerEvents = "auto"
    }

    setSlot(slot) { 
        this.slot = slot;
    }
    clearSlot() {
        this.slot = null
    }



}