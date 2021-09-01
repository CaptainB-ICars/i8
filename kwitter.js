function adduser()
{
    username=document.getElementById("user_name").value;
    localStorage.setItem("user's name",username);
    window.location="kwitter_room.html";
}