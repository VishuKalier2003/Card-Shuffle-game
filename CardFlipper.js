// Creating constant variable for all tags of the given selector
const cards = document.querySelectorAll('.cards');

// variable to check if any card is flipped
let hasflipped = false;
let firstDraw, secondDraw;

// variable to get Element by Tag.
var span_point = document.getElementById('final');
let points = 0;

function flipCard() {
    // adding the class created in the CSS without attached to any HTML tag
    this.classList.add('cards-flip');
    if (!hasflipped) {
        // It is the first card to be flipped
        hasflipped = true;
        firstDraw = this;
    } else {
        // It is the second card to be flipped
        hasflipped = false;
        secondDraw = this;
        if (firstDraw.dataset.framework === secondDraw.dataset.framework) {
            firstDraw.removeEventListener('click', flipCard);
            secondDraw.removeEventListener('click', flipCard);
            points = points + 2;
            GetPoints();
        } else {
            setTimeout(() => {
                firstDraw.classList.remove('cards-flip');
                secondDraw.classList.remove('cards-flip');
                points--;
                GetPoints();
            }, 1500);
        }
    }
}

function GetPoints() {
    if (points > 0) {
        final.textContent = points;
        final.style.color = "Green";
    }
    if (points < 0) {
        final.textContent = points;
        final.style.color = "Red";
    } else {
        final.textContent = points;
        final.style.color = "Blue";
    }
}
// for each card call the flipped function when clicked at the particular card
cards.forEach(card => card.addEventListener('click', flipCard));