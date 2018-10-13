
function randomPic(){
    var randNum = Math.floor(Math.random() * 10);
    var name = "puppy" + randNum + ".jpg";
    document.getElementById("randomPic").src = "../img/" + name;
}
randomPic();