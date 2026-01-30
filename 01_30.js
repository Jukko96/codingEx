// 시험
// MUSINSA ROOKIE AI NATIVE ENGINEER 사전 환경 점검 시험
// 0:21:20
// 제출 : 01/01
// 01
// 제출 완료
// 문제 정보
// [사전테스트][난이도 1] 없는 수
// 유형
// 프로그래밍
// 실행 제한 시간
// 10s
// 제출 완료
// 주요 안내

// 시험실 내의 터미널 창에서 붙여넣기를 하는 경우, 다음과 같이 본인 환경에 따라 단축키를 사용해주시기 바랍니다.
// Windows: Ctrl + Shift + V
// Mac: Cmd + V


// 문제

// 주어지는 개의 수에 포함되지 않으면서, 이상 이하인 모든 수들의 합을 구해보자.



// 입력

// 첫째 줄에 과 가 공백을 두고 주어진다.
// 둘째 줄에 개의 수 가 공백을 두고 주어진다.



  
// 모든 는 다르다.
// 입력으로 주어지는 모든 수는 정수이다.


// 출력

// 조건을 만족하는 수들의 합을 출력한다.

// 입/출력 예시
// :
// 공백
// :
// 줄 바꿈
// :
// 탭
// 예시 1
// 입력
// 52
// 24
// 출력
// 9
// 예시 2
// 입력
// 31
// 2
// 출력
// 4
// ⋇ 입출력 형식을 잘 지켜주세요
// Selection deleted
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
// 30
// 31
// 32
// 33
// 34
// 35
// 36
// 37
// 38
// 39
// 40
// 41
// 42
// 43
// 44
// 45
// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	var answer = 0;
	var arr;
	var max;
	
	for await (const line of rl) {
		
		if(arr && max){
			var new_line = line.split(" ");
			// console.log(new_line)
			for(var i = 1; i <= max; i++){
				answer +=i;
			}
			new_line.forEach(data=>{
				answer-=Number(data)
			})
			
			console.log(answer)
			rl.close();
			
		}else{
			line.split(" ").forEach((num,index) =>{
				if(index ==0){
					max = Number(num);

				}
				if(index == 1){
					arr = Number(num);
				}
			})
			
		}
		
	}
	
	
	// 1~5 2
	// 135
	process.exit();
})();


// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	var answer = 0;
	var arr;
	var max;
	
	for await (const line of rl) {
		
		if(arr && max){
			var new_line = line.split(" ");
			// console.log(new_line)
			for(var i = 1; i <= max; i++){
				answer +=i;
			}
			new_line.forEach(data=>{
				answer-=Number(data)
			})
			
			console.log(answer)
			rl.close();
			
		}else{
			line.split(" ").forEach((num,index) =>{
				if(index ==0){
					max = Number(num);

				}
				if(index == 1){
					arr = Number(num);
				}
			})
			
		}
		
	}
	
	
	// 1~5 2
	// 135
	process.exit();
})();
