export class DragCard {
    static currentCard = null

    static setCard(card) {
        DragCard.currentCard = card
    }

    static clearCard() {
        DragCard.currentCard = null
    }
    static getCard(){
        return DragCard.currentCard
    }
}