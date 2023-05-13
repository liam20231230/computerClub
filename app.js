document.querySelectorAll(".month-selection").forEach((monthSelection) => {
  if (monthSelection.id !== "unlock-selection") {
    monthSelection.addEventListener("click", () => {
      alert(
        "추후 학사일정을 모두 확인하고 개발하겠습니다.\n(수요일 7교시 진행 이슈)"
      );
    });
  }
});
var parentElement = document.querySelector(".parent");
parentElement.addEventListener("click", function () {
  window.history.back();
});
