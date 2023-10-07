// 현재 숫자를 저장할 변수
let currentNumber = 0;

// 버튼을 클릭할 때 호출되는 함수
function countUp() {
  // 현재 숫자를 1 증가시킴
  currentNumber++;
  
  // 숫자를 화면에 표시
  document.querySelector('.number').textContent = currentNumber;
}


function recoverybtn() {
  if(!confirm('숫자를 초기화 하시겠습니까?')) {
    alert('숫자를 초기화 하지 않았습니다')
  } else {
    alert('숫자를 초기화 했습니다')
    location.reload(true);
  }
}