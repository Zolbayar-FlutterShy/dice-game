var diceDom = document.querySelector(".dice"); // querySelector нь browser ийг илүү ачааллуулдаг тул дахин энэ Dom ийг дуудхад дахин querySelect хийлгүйгээр энийгээ нэг хувьсагчид хадгалж өгөөд тэгээд энэ Dom ийг ашиглахаар бол энэ хувьсагчийг дуудхад лл хангалттай юм
//Тоглогчийн ээлжийг хадгалдаг хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе!

//Тоглоом дууссан үгүйг шалгах төлөвийн хувьсагч хэрэгтэй
var isGameOver;

var activePlayer = 0;
//Тоглогчдын цуглуулсан оноог харуулдаг хувьсагч
var scores = [0, 0];
//Тоглогчдын эээлжиндээ цуглуулж байгаа оноог хадгалдаг хувьсагч
var roundScores = 0;

document.querySelector(".btn-new").addEventListener("click", newGame);

newGame();
//Шинээр тоглоомийг эхлүүлэх eventListener
//Тоглоомд шинээр бэлтгэе.
function newGame() {
  //Тоглоомыг эхэллээ гэсэн төлөвт оруулна
  isGameOver = false;

  //Тоглогчийн ээлжийг хадгалдаг хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе!
  activePlayer = 0;
  //Тоглогчдын цуглуулсан оноог харуулдаг хувьсагч
  scores = [0, 0];
  //Тоглогчдын эээлжиндээ цуглуулж байгаа оноог хадгалдаг хувьсагч
  roundScores = 0;
  // document.querySelector("#score-0").textContent = dice;
  // document.querySelector("#score-1").textContent = dice; //Хэрэв textContent ийн оронд innerHTML байх юм бол HTML ашиглаж тухайн зүйлийг өөрчилж болно
  // document.querySelector(".dice").style.display = "none"; //style ийг ашиглан css дотор бичигдсэн зүйлүүдийг өөрчилж болно
  //Програмд бэлтгэе
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //Тоглогчдын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  //Active player ийн тэмдэг
  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver === false) {
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
      switchToNextPlayer();
    }
  } else {
    alert(
      "Тоглоом дууссан байна аа NEW GAME товчыг даран дахин тоглоомийг эхлүүлнэ үү!"
    );
  }
}); //Энэ нь eventListener function маань click function болон shooShid гэсэн function ийг callBack ашиглан argument болгон авч байна аа callBack нь function дотор funtction Argument болгож авч тэгээд тэр function ийг ашиглахийг хэлнэ. Anonymous нь function ийг нэргүйгээр шууд тэр чигээр нь бичиж ашиглана учир нь тэр function өөр газар ашиглахгүй зөвхөн тэр function ашиглах бол илүү үйлдэл хийх шаардлаггүй юм

// HOLD товчны евент листэнэр
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isGameOver === false) {
    //Уг тоглогчын цуглуулсан ээлжийн оноог global оноон дээр нэмж өгнө
    scores[activePlayer] = scores[activePlayer] + roundScores;

    //Дэлгэцэн дээр оноог нь өөрчилнө
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //Уг тоглогчийг хожсон эсэхийг (оноо нь 100 с их эсэхийг шалгах )
    if (scores[activePlayer] >= 10) {
      //Тоглоомыг дууссан төлөвт оруулна
      isGameOver = true;

      //Ялагч гэсэн текстийг нэрнийх нь оронд гаргана
      document.getElementById("name-" + activePlayer).textContent =
        "WINNER!!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      //Тоглогчын ээлжийг солино
      switchToNextPlayer();
    }
  } else {
    alert(
      "Тоглоом дууссан байна аа NEW GAME товчыг даран дахин тоглоомийг эхлүүлнэ үү!"
    );
  }
});
//Энэ function нь тоглогчийн ээлжийг дараачийн хүн лүү шилжүүлнэ
function switchToNextPlayer() {
  //Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно
  roundScores = 0;
  document.getElementById("current-" + activePlayer).textContent = "0";
  //Тоглогчын ээлжийг нөгөө тоглогч руу шилжүүлнэ
  //Хэрэв идэвхитэй тоглогч нь 0 байвал идэвхитэй тоглогчийг 1 болго
  //Үгүй бол 0 болго
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); //if statement ийг товчоор ингэж бичиж болно

  //Улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active"); //Ингэж тухайн Dom ийн class руу хандаж дотор байгаа class ийг нэмж хасж г.м үйлдлүүдийг хийж болно toggle бол хэрвээ энэ class дотор active class байвал устгана байхгүй бол нэмнэ remove add хоёрыг хослуулсан нэг хэлбэр
  document.querySelector(".player-1-panel").classList.toggle("active");

  //Шоог алга болгоно
  diceDom.style.display = "none";
}
