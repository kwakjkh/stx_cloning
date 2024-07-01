window.onload = function(){
    // 비주얼 이동 버튼 스크롤 가능
    // 변수 선언
    const visualButton = document.querySelector(".visual-bt");
    visualButton.addEventListener("click" , function(){
        // scrollToSection() 함수는 특정 섹션으로 부드럽게 스크롤하는 기능
        scrollToSection("#business")
        // scrollToSection() 함수 작성
    });
function scrollToSection(sectionId) {
// console.log(sectionId);
// sectionID로 지정된 요소를 찾아서 section 변수에 저장
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior : "smooth" });
    }
}
// top버튼 스크롤 기능------------
 const topBtn = document.getElementById("top-btn")
 topBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log(window.scrollY);
    if (window.scrollY == 0){
        window.scrollTo({
            top:3197,
            behavior: "smooth"
        });
    }
    else{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    }
 });
    // 화살표 이미지 회전
    const topBtnImg = document.getElementById("top-btn-img")
    window.addEventListener("scroll" , function (scTop) {
        scTop = window.document.documentElement.scrollTop;
        if(scTop > 0){
            topBtnImg.classList.add("up")
        }
        else{
            topBtnImg.classList.remove("up")
        }
    });
};