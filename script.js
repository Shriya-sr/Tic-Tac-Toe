let boxes=document.querySelectorAll(".box");
        let reset=document.querySelector("#resetbtn");
        let msgcontainer=document.querySelector(".msg-container");
        let msg=document.querySelector("#msg");

        let turnO=true;
        const wins=[
            [0,1,2],
            [0,3,6],
            [0,4,8],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [3,4,5],
            [6,7,8],
        ];
        boxes.forEach((box)=>{
            box.addEventListener("click",()=>{
                if(turnO === true){
                    box.innerText="O";
                    turnO=false;
                }else{
                    box.innerText="X";
                    turnO=true;
                }
                box.disabled=true;//Once you click a box, you can't change it

                checkWinner();
            });
        });
        const disableboxes= () =>{
            for(let box of boxes){
                box.disabled=true;
            }
        };

        const enableboxes = () => {
            for(let box of boxes){
                box.disabled=false;
                box.innerText="";
            }
        };

        const showWinner = (winner) => {
            msg.innerText = `Congratulations! The winner is ${winner}`;
            msgcontainer.classList.remove("hide");//When I wanto to show the winner, I remove hide
            disableboxes();
        };
        const checkWinner=() =>{
            for(let pattern of wins){
                let pos1=boxes[pattern[0]].innerText;//if pos1,pos2,pos3 fall in the same subarray, then it's a win
                let pos2=boxes[pattern[1]].innerText;
                let pos3=boxes[pattern[2]].innerText;

                if(pos1!="" && pos2!="" && pos3!=""){
                    if(pos1===pos2 && pos2===pos3){
                        showWinner(pos1);
                    }
                }
            }
        };
        const resetGame = () => {
            turnO=true;
            enableboxes();
            msgcontainer.classList.add("hide");
        };
        reset.addEventListener("click",resetGame);