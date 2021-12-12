// Variables DOM qui communique avec mon HTML et mon CSS
// Variables de bouton pour attaquer et cibler
var boutonDemonTarget = document.getElementById("demonTarget"); //Pour approprier au Javascript l'element qui porte l'id et agir dessus
var boutonDragonTarget = document.getElementById("dragonTarget");
var boutonWyvernTarget = document.getElementById("wyvernTarget");
var boutonKnightAttack = document.getElementById("knightAttack");
var boutonSorceressAttack = document.getElementById("sorceressAttack");
var boutonDwarfAttack = document.getElementById("dwarfAttack");
var boutonAngelAttack = document.getElementById("angelAttack");
//Variables d'interface et de points de vie pour mes personnages et mes ennemis
var hpDemonDOM = document.getElementById("hpDemonText");
var hpDragonDOM = document.getElementById("hpDragonText");
var hpWyvernDOM = document.getElementById("hpWyvernText");
var hpKnightDOM = document.getElementById("hpKnightText");
var hpSorceressDOM = document.getElementById("hpSorceressText");
var hpDwarfDOM = document.getElementById("hpDwarfText");
var hpAngelDOM = document.getElementById("hpAngelText");
var interfaceDOM = document.getElementById("Actions")

//Pour print les variables DOM
console.log(hpDemonDOM); 
console.log(hpDragonDOM);
console.log(hpWyvernDOM);
console.log(hpKnightDOM);
console.log(hpSorceressDOM); 
console.log(hpDwarfDOM);
console.log(hpAngelDOM);
console.log(interfaceDOM);





// Je defini toutes mes variables, je ne suis pas oblige de leur attribuer une valeur
var hpDragon = 300;
var hpWyvern = 250;
var hpDemon = 400;
var hpKnight = 200;
var hpSorceress = 200;
var hpDwarf = 250;
var hpAngel = 150;
var dragonFire;
var demonSpell;
var wyvernClaw;
var knightBlade;
var dwarfAxe;
var sorceressSpell;
var angelLight;
var tour = 0;

// Ensuite je vais utiliser des fonctions pour attribuer des valeurs aleatoires a mes variables d'attaque
function dragonAttack(){
    return dragonFire = Math.floor(Math.random()*50)+25; //Ici j'ai importe des fonctions de la librairie Math pour programmer la prise de valeur
}

function wyvernAttack(){
    return wyvernClaw = Math.floor(Math.random()*25)+25;
}

function demonAttack(){
    return demonSpell = Math.floor(Math.random()*50)+50;
}

function knightAttack(){
    return knightBlade = Math.floor(Math.random()*50)+25;
}

function dwarfAttack(){
    return dwarfAxe = Math.floor(Math.random()*50)+50;
}

function sorceressAttack(){
    return sorceressSpell = Math.floor(Math.random()*25)+50;
}

function angelAttack(){
    return angelLight = Math.floor(Math.random()*25)+25;
}


//Maintenant je vais programmer la boucle de combat

while (hpDemon > 0 && hpDragon > 0 && hpWyvern > 0) {
    if (boutonKnightAttack.onclick);
        tour += 1;
        if (boutonDemonTarget.onclick);
            interfaceDOM.innerHTML = "Le Chevalier attaque le Demon !" ;
            boutonKnightAttack.onclick = function() {
                hpDemon -= knightAttack(); //Pour que hpDemon soit deduit de knightAttack
                hpDemonDOM.innerHTML = hpDemon - knightAttack() + "/400" ; //Pour que le texte des HP du Demon affiche hpDemon
        }
        if (boutonDragonTarget.onclick);
            interfaceDOM.innerHTML = "Le Chevalier attaque le Dragon !" ;
            boutonKnightAttack.onclick = function() {
                hpDragon -= knightAttack();
                hpDragonDOM.innerHTML = hpDragon - knightAttack() + "/300" ;

        if (boutonWyvernTarget.onclick);
            interfaceDOM.innerHTML = "Le Chevalier attaque la Wyvern !" ;
            boutonKnightAttack.onclick = function() {
                hpWyvern -= knightAttack();
                hpWyvernDOM.innerHTML = hpWyvern - knightAttack() + "/250" ;
            }



    if (boutonSorceressAttack.onclick);
        tour += 1;
        if (boutonDemonTarget.onclick);
            interfaceDOM.innerHTML = "La Sorciere attaque le Demon !" ;
                boutonSorceressAttack.onclick = function() {
                hpDemon -= sorceressAttack(); 
                hpDemonDOM.innerHTML = hpDemon - sorceressAttack() + "/400" ; 
                }

        if (boutonDragonTarget.onclick);
            interfaceDOM.innerHTML = "La Sorciere attaque le Dragon !" ;
                boutonSorceressAttack.onclick = function() {
                    hpDragon -= sorceressAttack();
                    hpDragonDOM.innerHTML = hpDragon - sorceressAttack() + "/300" ;
                }
        
        if (boutonWyvernTarget.onclick);
            interfaceDOM.innerHTML = "La Sorciere attaque la Wyvern !" ;
            boutonSorceressAttack.onclick = function() {
                hpWyvern -= sorceressAttack();
                hpWyvernDOM.innerHTML = hpWyvern - sorceressAttack() + "/250" ;  
            }



    if (boutonDwarfAttack.onclick);
        tour +=1;
        if (boutonDemonTarget.onclick);
            interfaceDOM.innerHTML = "Le Nain attaque le Demon !" ;
            boutonDwarfAttack.onclick = function() {
                hpDemon -= dwarfAttack();
                hpDemonDOM.innerHTML = hpDemon - dwarfAttack() + "/400" ;
            }
            
        if (boutonDragonTarget.onclick);
            interfaceDOM.innerHTML = "Le Nain attaque le Dragon !" ;
            boutonDwarfAttack.onclick = function() {
                hpDragon -= dwarfAttack();
                hpDragonDOM.innerHTML = hpDragon - dwarfAttack() + "/300" ;
            }    

        if (boutonWyvernTarget.onclick);
            interfaceDOM.innerHTML = "Le Nain attaque la Wyvern !" ;
            boutonDwarfAttack.onclick = function() {
                hpWyvern -= dwarfAttack();
                hpWyvernDOM.innerHTML = hpWyvern - dwarfAttack() + "/250" ;
            }

    
    if (boutonAngelAttack.onclick);
        tour += 1;
        if (boutonDemonTarget.onclick);
            interfaceDOM.innerHTML = "L'Ange attaque le Demon !" ;
            boutonAngelAttack.onclick = function() {
                hpDemon -= angelAttack();
                hpDemonDOM.innerHTML = hpDemon - angelAttack() + "/400" ;
            }

        if (boutonDragonTarget.onclick);
            interfaceDOM.innerHTML = "L'Ange attaque le Dragon !" ;
            boutonAngelAttack.onclick = function() {
                hpDragon -= angelAttack();
                hpDragonDOM.innerHTML = hpDragon - angelAttack() + "/300" ;
            }

        if (boutonWyvernTarget.onclick);
            interfaceDOM.innerHTML = "L'Ange attaque la Wyvern !" ;
            boutonAngelAttack.onclick = function() {
                hpWyvern -= angelAttack();
                hpWyvernDOM.innerHTML = hpWyvern - angelAttack() + "/250" ;
            }




    }
    if (tour == 4);
        
        interfaceDOM.innerHTML = "Les Monstres passent a l'attaque" ;

        if (hpDemon < 0);
            interfaceDOM.innerHTML = "Le Demon est MORT" ;
            hpDemonDOM.innerHTML = "MORT" ;

            interfaceDOM.innerHTML = "Le Dragon attaque le Chevalier" ;
            hpKnight -= dragonAttack();
            hpKnightDOM.innerHTML = hpKnight - dragonAttack() + "/200" ;

            interfaceDOM.innerHTML = "La Wyvern attaque la Sorciere" ;
            hpSorceress  -= wyvernAttack();
            hpSorceressDOM.innerHTML = hpSorceress - wyvernAttack() + "/200" ;

            interfaceDOM.innerHTML = "Le Dragon attaque le Nain" ;
            hpDwarf -= dragonAttack();
            hpDwarfDOM.innerHTML = hpDwarf - dragonAttack() + "/250" ;

            interfaceDOM.innerHTML = "La Wyvern attaque l'Ange" ;
            hpAngel -= wyvernAttack();
            hpAngelDOM.innerHTML = hpAngel - wyvernAttack() + "/150" ;




    
        if (hpDragon < 0); 
            hpDragonDOM.innerHTML = "MORT" ;

            interfaceDOM.innerHTML = "Le Demon attaque le Chevalier" ;
            hpKnight -= demonAttack();
            hpKnightDOM.innerHTML = hpKnight - demonAttack() + "/200" ;

            interfaceDOM.innerHTML = "La Wyvern attaque la Sorciere" ;
            hpSorceress  -= wyvernAttack();
            hpSorceressDOM.innerHTML = hpSorceress - wyvernAttack() + "/200" ;

            interfaceDOM.innerHTML = "Le Demon attaque le Nain" ;
            hpDwarf -= demonAttack();
            hpDwarfDOM.innerHTML = hpDwarf - dragonAttack() + "/250" ;

            interfaceDOM.innerHTML = "La Wyvern attaque l'Ange" ;
            hpAngel -= wyvernAttack();
            hpAngelDOM.innerHTML = hpAngel - wyvernAttack() + "/150" ;


    
        if (hpWyvern < 0); 
            hpWyvernDOM.innerHTML = "MORT" ;

            interfaceDOM.innerHTML = "Le Demon attaque le Chevalier" ;
            hpKnight -= demonAttack();
            hpKnightDOM.innerHTML = hpKnight - demonAttack() + "/200" ;

            interfaceDOM.innerHTML = "Le Dragon attaque la Sorciere" ;
            hpSorceress  -= dragonAttack();
            hpSorceressDOM.innerHTML = hpSorceress - dragonAttack() + "/200" ;

            interfaceDOM.innerHTML = "Le Demon attaque le Nain" ;
            hpDwarf -= demonAttack();
            hpDwarfDOM.innerHTML = hpDwarf - demonAttack() + "/250" ;

            interfaceDOM.innerHTML = "Le Dragon attaque l'Ange" ;
            hpAngel -= dragonAttack();
            hpAngelDOM.innerHTML = hpAngel - dragonAttack() + "/150" ;

        if (hpDemon > 0) and (hpDragon > 0),  and (hpWyvern > 0); 

            interfaceDOM.innerHTML = "Le Demon attaque le Chevalier" ;
            hpKnight -= demonAttack();
            hpKnightDOM.innerHTML = hpKnight - dragonAttack() + "/200" ;

            interfaceDOM.innerHTML = "Le Dragon attaque la Sorciere" ;
            hpSorceress  -= dragonAttack();
            hpSorceressDOM.innerHTML = hpSorceress - dragonAttack() + "/200" ;

            interfaceDOM.innerHTML = "Le Demon attaque le Nain" ;
            hpDwarf -= demonAttack();
            hpDwarfDOM.innerHTML = hpDwarf - demonAttack() + "/250" ;

            interfaceDOM.innerHTML = "La Wyvern attaque l'Ange" ;
            hpAngel -= wyvernAttack();
            hpAngelDOM.innerHTML = hpAngel - wyvernAttack() + "/150" ;
}

interfaceDOM.innerHTML = "Vous avez vaincu les Monstres !" ;
    