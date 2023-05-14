
var parentElement = document.querySelector(".parent");
parentElement.addEventListener("click", function () {
  window.history.back();
});
// 달력 이미지의 src 속성을 변경하는 함수
function changeImage(month) {
  // 이미지 요소를 선택
  let image = document.querySelector(".sdl-calendar");
  // 월에 따라 src 속성을 변경
  switch (month) {
    case "4월":
      image.src = "assets/schedule/april.png";
      break;
    case "5월":
      image.src = "assets/schedule/may.png";
      break;
    case "6월":
      image.src = "assets/schedule/june.png";
      break;
    case "7월":
      image.src = "assets/schedule/july.png";
      break;
    case "8월":
      image.src = "assets/schedule/august.png";
      break;
    case "9월":
      image.src = "assets/schedule/september.png";
      break;
    case "10월":
      image.src = "assets/schedule/october.png";
      break;
    case "11월":
      image.src = "assets/schedule/november.png";
      break;
    case "12월":
      image.src = "assets/schedule/december.png";
      break;
  }
}
console.log(month);

// p 태그들을 선택
let pTags = document.querySelectorAll(".month-info p");

// p 태그들에 클릭 이벤트 리스너를 추가
for (let p of pTags) {
  p.addEventListener("click", function () {
    // 클릭한 p 태그의 텍스트를 가져옴
    let month = this.textContent;
    // changeImage 함수를 호출
    changeImage(month);
  });
}
