const chatInput=document.querySelector(".chat-input teaxtarea");
const sendChatBtn=document.querySelector(".chat-input span");
const handleChat=()=>{
    userMessage=chatInput.ariaValueMax.trim();
    console.log(userMessage)
}
sendChatBtn.addEventListener("click",handleChat);
