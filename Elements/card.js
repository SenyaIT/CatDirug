export class Card {
    constructor(actor){
        this.actor = actor;
        this.elem = document.createElement("div");

        this.isDragging = false

        this.onDrag = this.onDrag.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onDrop = this.onDrop.bind(this);
         
        this.elem.addEventListener('mousedown', this.onDrag) 
        document.addEventListener('mousemove', this.onMove)  
        document.addEventListener('mouseup', this.onDrop)  

        this.offsetX = 100; 
        this.offsetY = 100;     
    } 

    render (){
        const cardDiv = this.elem 
        cardDiv.className = "card" 

        cardDiv.style.backgroundImage =  `url('${this.actor.picture}`;     
        cardDiv.textContent = this.actor.name;
        
        return cardDiv 
    }

    onDrag(e) {
        if (e.button !== 0) return; 
        this.isDragging = true
        this.elem.classList.add("drag")  
        console.log("dragging started") 
    }
     onMove (e) {
         
        if (!this.isDragging) return 
        console.log("moving") 

        this.elem.style.left = `${e.clientX - this.offsetX}px`;
        this.elem.style.top = `${e.clientY - this.offsetY}px`; 
       // console.log(e.clientX)
       // console.log(e.clientY) 
     }
     onDrop (e) {
        this.isDragging = false
        this.elem.classList.remove("drag") 
        console.log("dropped") 
     } 

}