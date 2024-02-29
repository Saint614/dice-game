function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i ++) {
        const roll = (Math.floor(Math.random() * 6) + 1);
        alert("You have rolled a " + roll);
        if (roll === 1) {
            alert("Game over! No more rolls!");
            break;
        } else if (roll < 5) {
            if ((roll === 4) && (goldCoins > 0)) {
                goldCoins -= 1;
                alert("You have lost 1 Gold Coin");
            } else {            
            alert("Continue"); 
        }    
        alert("You currently have " + goldCoins + " gold coins");    
        } else if (roll === 5) {
            alert("Congratulations, you have won 5 gold coins!");
            goldCoins += roll;
            alert("You currently have " + goldCoins + " gold coins");
        } else {
        alert("Congratulations, you have won 6 gold coins!");
        goldCoins += roll;
        alert("You currently have " + goldCoins + " gold coins");
        }
    }
    alert("You have won a total of " + goldCoins + " coins");
}