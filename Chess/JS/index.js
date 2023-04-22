let id = 0;

const icon = ['./Image/Black_rook.png', './Image/Black_horse.png', './Image/Black_camel.png', './Image/Black_queen.png', './Image/Black_king.png','./Image/Black_camel.png', './Image/Black_horse.png', './Image/Black_rook.png'];
const whiteicon = ['./Image/White_rook.png', './Image/White_horse.png', './Image/White_camel.png', './Image/White_queen.png', './Image/White_king.png','./Image/White_camel.png', './Image/White_horse.png', './Image/White_rook.png'];

for (let i = 0; i < 8; i++) {
    document.getElementById('table').innerHTML += `<tr class="" id="row${i}">`;
    // ======================= chess bord 1 row =========================
    if (i == 0) {
        for (let index = 0; index < icon.length; index++) {
            if (index % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="move(this)" id="${id}"><img src="${icon[index]}"/></td>`;
                id++;
            }
            else if(index % 2 != 0){
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="move(this)" id="${id}"><img src="${icon[index]}"/></td>`;
                id++;
            }
        }
    }
    if (i == 1) {
        for (let index = 0; index < 8; index++) {
            if (index % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="move(this)" id="${id}"><img src="./Image/Black_soldier.png"/></td>`;
                id++;
            }
            else if(index % 2 != 0){
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="move(this)" id="${id}"><img src="./Image/Black_soldier.png"/></td>`;
                id++;
            }
        }
    }
    // ======================= chess bord 7 row =========================
    if (i == 6) {
        for (let index = 0; index < icon.length; index++) {
            if (index % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="move(this)" id="${id}"><img src="./Image/White_soldier.png"/></td>`;
                id++;
            }
            else if(index % 2 != 0){
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="move(this)" id="${id}"><img src="./Image/White_soldier.png"/></td>`;
                id++;
            }
        }
    }
    if (i == 7) {
        for (let index = 0; index < 8; index++) {
            if (index % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="move(this)" id="${id}"><img src="${whiteicon[index]}"/></td>`;
                id++;
            }
            else if(index % 2 != 0){
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="move(this)" id="${id}"><img src="${whiteicon[index]}"/></td>`;
                id++;
            }
        }
    }

    // ======================= chess bord =========================
    for (let j = 0; j < 8; j++) {
        if (i % 2 == 0 && i >= 2 && i < 6) {
            if (j % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[60px] font-bold p-2" onclick="move(this)" data-id="${j}" id="${id}"></td>`;
                id++;
            }
            else if (j % 2 != 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[60px] font-bold p-2" onclick="move(this)" data-id="${j}" id="${id}"></td>`;
                id++;
            }
        }
        else if (i % 2 != 0 && i >= 2 && i < 6) {
            if (j % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[60px] font-bold p-2" onclick="move(this)" data-id="${j}" id="${id}"></td>`;
                id++;
            }
            else if (j % 2 != 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[60px] font-bold p-2" onclick="move(this)" data-id="${j}" id="${id}"></td>`;
                id++;
            }
        }
    }
    document.getElementById('table').innerHTML += `</tr>`;
}

    // ======================== select the player ===================
        let player1 = null;
        let player2 = null;
        let turn = null;

        function getPlayer(e){
            if (player1 == null && player2 == null) {
                player1 = e.innerText;
                if (player1 == "White") {
                    player2 = "Black";
                    turn = player1;
                    document.getElementById('selectPlayerModel').style.visibility = "hidden";
                    document.getElementById('player1').innerHTML = player1;
                    document.getElementById('player2').innerHTML = player2;
                }
                else if (player1 == "Black") {
                    player2 = "White";
                    turn = player1;
                    document.getElementById('selectPlayerModel').style.visibility = "hidden";
                    document.getElementById('player1').innerHTML = player1;
                    document.getElementById('player2').innerHTML = player2;
                }
            }
        }

    // ======================== Move ===================
        
        function move(e){
        let piece = document.getElementById(e.id).children[0]?document.getElementById(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", ""):null
        let pieceVriet = piece?piece.replace("_soldier","").replace("_king","").replace("_queen","").replace("horse","").replace("_camel","").replace("_rook",""):alert("Select proper move");
        
                if (turn == player1) {
                    if(pieceVriet == player1){
                        turn = player2;
                        let currentPosition = e.id;
                        let currentPositionImage = document.getElementById(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "");
                        
                        if(currentPosition <= 15){
                            let move = parseInt(currentPosition) + 8;
                            let moveIconImage = document.getElementById(e.id).children[0].getAttribute("src");
                            document.getElementById(move).style.backgroundColor = "Green";
                            document.getElementById(move).addEventListener('click', function() {
                                    document.getElementById(move).innerHTML = `<img src="${moveIconImage}"/>`;
                                    document.getElementById(e.id).innerHTML = "";
                              });
                        }
                        else{
                            let move = parseInt(currentPosition) - 8;
                            let moveIconImage = document.getElementById(e.id).children[0].getAttribute("src");
                            document.getElementById(move).style.backgroundColor = "Green";
                            document.getElementById(move).addEventListener('click', function() {
                                document.getElementById(move).innerHTML = `<img src="${moveIconImage}"/>`;
                                document.getElementById(e.id).innerHTML = "";
                          });
                        }
                    }
                    else{
                        alert("It is player 1 turn");
                    }
                }
                else if (turn == player2) {
                    if(pieceVriet == player2){
                        turn = player1;
                        let currentPosition = e.id;
                        if(currentPosition <= 15){
                            let move = parseInt(currentPosition) + 8;
                            let moveIconImage = document.getElementById(e.id).children[0].getAttribute("src");
                            document.getElementById(move).style.backgroundColor = "Green";
                            document.getElementById(move).addEventListener('click', function() {
                                document.getElementById(move).innerHTML = `<img src="${moveIconImage}"/>`;
                                document.getElementById(e.id).innerHTML = "";
                          });
                        }
                        else{
                            let move = parseInt(currentPosition) - 8;
                            let moveIconImage = document.getElementById(e.id).children[0].getAttribute("src");
                            document.getElementById(move).style.backgroundColor = "Green";
                            document.getElementById(move).addEventListener('click', function() {
                                document.getElementById(move).innerHTML = `<img src="${moveIconImage}"/>`;
                                document.getElementById(e.id).innerHTML = "";
                          });
                        }
                    }
                    else{
                        alert("It is player 2 turn");
                    }
                }
            }