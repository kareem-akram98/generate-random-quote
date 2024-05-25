

qoutes = [
    {
        text: '“Be yourself; everyone else is already taken.”',
        author: '― Oscar Wilde'
    },
    {
        text: '“So many books, so little time.”',
        author: '― Frank Zappa'
    },
    {
        text: '“A room without books is like a body without a soul.”',
        author: '― Marcus Tullius Cicero'
    },
    {
        text: '“Be the change that you wish to see in the world.”',
        author: '― Mahatma Gandhi'
    }
    ,
    {
        text: '“If you tell the truth, you donot have to remember anything.”',
        author: '― Mark Twain'
    }
    ,
    {
        text: '“A friend is someone who knows all about you and still loves you.”',
        author: '― Elbert Hubbard'
    }
    ,
    {
        text: '“Always forgive your enemies; nothing annoys them so much.””',
        author: '― Oscar Wilde'
    }
    ,
    {
        text: '“We accept the love we think we deserve.”',
        author: '― Stephen Chbosky, The Perks of Being a Wallflower'
    }
]

    var oldX;
    
function qouteRandom() {

    let x = Math.floor( Math.random() * qoutes.length);
    while (x==oldX) {
        x = Math.floor( Math.random() * qoutes.length);
        
    }
    oldX = x ;
    document.getElementById(`qouteText`).innerHTML =qoutes[x].text;
    document.getElementById(`qouteAuthor`).innerHTML =qoutes[x].author;
}

 
 

























/*
“Be yourself; everyone else is already taken.”
― Oscar Wilde


“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
― Marilyn Monroe


“So many books, so little time.”
― Frank Zappa


“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein


“A room without books is like a body without a soul.”
― Marcus Tullius Cicero


“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch


“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
― William W. Purkey

“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
― Dr. Seuss

“You only live once, but if you do it right, once is enough.”
― Mae West

“Be the change that you wish to see in the world.”
― Mahatma Gandhi

“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost

“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
― J.K. Rowling, Harry Potter and the Goblet of Fire

“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”
― Albert Camus



“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”
― C.S. Lewis, The Four Loves

“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
― Maya Angelou


“To live is the rarest thing in the world. Most people exist, that is all.”
― Oscar Wilde


“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”
― Martin Luther King Jr., A Testament of Hope: The Essential Writings

“Live as if you were to die tomorrow. Learn as if you were to live forever.”
― Mahatma Gandhi

“We accept the love we think we deserve.”
― Stephen Chbosky, The Perks of Being a Wallflower

“Without music, life would be a mistake.”
― Friedrich Nietzsche, Twilight of the Idols

“I am so clever that sometimes I don't understand a single word of what I am saying.”
― Oscar Wilde, The Happy Prince and Other Stories

“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”
― Ralph Waldo Emerson

“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”
― Marilyn Monroe

“It is better to be hated for what you are than to be loved for what you are not.”
― Andre Gide, Autumn Leaves
















*/