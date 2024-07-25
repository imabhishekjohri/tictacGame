let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#rstbtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelectorAll(".msgContainer");
let msg=ocument.querySelector("#msg");

let turno = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
box.addEventListener("click", ()  => {
console.log("box was Clicked");
if(turno){
    box.innerText ="O";
    turno = false;
}
else {
    box.innerText = "X";
    turno = true;

}
box.disabled=true;
checkWinner();

});

});
//disabled
const disabledBoxes = () => {
    for (let box of boxes){
        box.disabled=true;
    }
}
//showWinner
 const showWinner = (winner) => 
{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

//checkWinner
const checkWinner = () => 
{
    for (let pattern of winPatterns)
    {
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val !="" && pos3Val !="")
        {
         if(pos1Val=== pos2Val && pos2Val ===pos3Val)
            {
              console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};