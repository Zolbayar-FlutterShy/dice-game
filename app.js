//Тоглогчийн ээлжийг хадгалдаг хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе!
var activePlayer = 0;
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
  //Шооны зургыг веб дээр гаргаж ирнэ.
  diceDom.style.display = "block";
  //1 - 6 доторх санамсаргүй тоо гаргаж ирнэ

  var diceNumber = Math.floor(Math.random() * 6) + 1;

  //Буусан санамсаргүй тоонд харгалзах шооны зургыг веб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  //Буусан шооны тоо маань 1 ээс ялгаатай тоо бол идэвхитэй тоглогчийн ээлжинй оноог нэмэгдүүлнэ

  if (diceNumber !== 1) {
    //1 ээс ялгаатай тоо буулаа буусан тоог тоглогчид нэмж өгнө
    roundScores = roundScores + diceNumber;
    document.getElementById(
      "current-" + activePlayer
    ).textContent = roundScores;
  } else {
    //1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө
    //Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно
    document.getElementById("current-" + activePlayer).textContent = "0";
    roundScores = 0;
    //Тоглогчын ээлжийг нөгөө тоглогч руу шилжүүлнэ
    //Хэрэв идэвхитэй тоглогч нь 0 байвал идэвхитэй тоглогчийг 1 болго
    //Үгүй бол 0 болго
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); //if statement ийг товчоор ингэж бичиж болно
    // if(activePlayer === 0){
    //   activePlayer = 1;
    // }esle{
    //   activePlayer = 0;
    // }

    //Улаан цэгийг шилжүүлэх\
    document.querySelector(".player-0-panel").classList.toggle("active"); //Ингэж тухайн Dom ийн class руу хандаж дотор байгаа class ийг нэмж хасж г.м үйлдлүүдийг хийж болно toggle бол хэрвээ энэ class дотор active class байвал устгана байхгүй бол нэмнэ remove add хоёрыг хослуулсан нэг хэлбэр
    document.querySelector(".player-1-panel").classList.toggle("active");

    //Шоог алга болгоно
    diceDom.style.display = "none";
  }
}); //Энэ нь eventListener function маань click function болон shooShid гэсэн function ийг callBack ашиглан argument болгон авч байна аа callBack нь function дотор funtction Argument болгож авч тэгээд тэр function ийг ашиглахийг хэлнэ. Anonymous нь function ийг нэргүйгээр шууд тэр чигээр нь бичиж ашиглана учир нь тэр function өөр газар ашиглахгүй зөвхөн тэр function ашиглах бол илүү үйлдэл хийх шаардлаггүй юм
