//Тоглогчийн ээлжийг хадгалдаг хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе!
var activePlayer = 1;
//Тоглогчдын цуглуулсан оноог харуулдаг хувьсагч
var scores = [0, 0];
//Тоглогчдын эээлжиндээ цуглуулж байгаа оноог хадгалдаг хувьсагч
var roundScores = 0;
//Шооны аль талаараа буусныг хадгалдаг хувьсагч хэрэгтэй, 1 - 6 гэсэн утгыг энэ хувьсагчид санамсаргүй олгож өгнө

// document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").textContent = dice; //Хэрэв textContent ийн оронд innerHTML байх юм бол HTML ашиглаж тухайн зүйлийг өөрчилж болно
// document.querySelector(".dice").style.display = "none"; //style ийг ашиглан css дотор бичигдсэн зүйлүүдийг өөрчилж болно
//Програмд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice"); // querySelector нь browser ийг илүү ачааллуулдаг тул дахин энэ Dom ийг дуудхад дахин querySelect хийлгүйгээр энийгээ нэг хувьсагчид хадгалж өгөөд тэгээд энэ Dom ийг ашиглахаар бол энэ хувьсагчийг дуудхад лл хангалттай юм
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
}); //Энэ нь eventListener function маань click function болон shooShid гэсэн function ийг callBack ашиглан argument болгон авч байна аа callBack нь function дотор funtction Argument болгож авч тэгээд тэр function ийг ашиглахийг хэлнэ. Anonymous нь function ийг нэргүйгээр шууд тэр чигээр нь бичиж ашиглана учир нь тэр function өөр газар ашиглахгүй зөвхөн тэр function ашиглах бол илүү үйлдэл хийх шаардлаггүй юм
