// X대학 M교수님은 프로그래밍 수업을 맡고 있다. 교실엔 학생이 30명이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다.

// 교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.

// 입력
// 입력은 총 28줄로 각 제출자(학생)의 출석번호 n(1 ≤ n ≤ 30)가 한 줄에 하나씩 주어진다. 출석번호에 중복은 없다.

// 출력
// 출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.
// your code goes here
//readline 모듈 불러오기
const readline = require('readline');
//인터페이스 객체 생성하기
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var input = 0;
var num_arr = Array(30).fill(false);
var answer = [];
//입출력 처리하는 코드
rl.on('line', function (line) {
    //입력 처리하는 코드
    input ++;
    if(input<28){
    	num_arr[Number(line)-1] = Number(line);
    }else{
    	num_arr[Number(line)-1] = Number(line);
    	num_arr.forEach((num,index)=>{
			if(num==false){
				console.log(index+1);
			}
    		
    	})
    	// console.log(num_arr)
    	rl.close();	
    	
    }
    
    
})
rl.on('close', function () {
	//입력을 받은 뒤 실행할 코드
    process.exit();//종료문
});

// 문제
// N*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 행렬의 크기 N 과 M이 주어진다. 둘째 줄부터 N개의 줄에 행렬 A의 원소 M개가 차례대로 주어진다. 이어서 N개의 줄에 행렬 B의 원소 M개가 차례대로 주어진다. N과 M은 100보다 작거나 같고, 행렬의 원소는 절댓값이 100보다 작거나 같은 정수이다.

// 출력
// 첫째 줄부터 N개의 줄에 행렬 A와 B를 더한 행렬을 출력한다. 행렬의 각 원소는 공백으로 구분한다.



const readline = require('readline');
//인터페이스 객체 생성하기
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var input = 0;
var n = 0;
var m = 0;
var a = [];
var b = [];
var answer = [];
//입출력 처리하는 코드
rl.on('line', function (line) {
    //입력 처리하는 코드
    input ++;
    if(input==1){
    	[n,m] = line.split(" ").map(Number);
    	return
    }
	if(input <= 1+n ){
		a.push(line.split(" ").map(Number));
		
	}else{
		b.push(line.split(" ").map(Number));
	}
	if(input==1+2*n){
		rl.close();
	}
    
    
})
rl.on('close', function () {
	//입력을 받은 뒤 실행할 코드
	// console.log(a)
	// console.log(b)
	 for (let i = 0; i < n; i++) {
	    const row = [];
	    for (let j = 0; j < m; j++) {
	      row.push(a[i][j] + b[i][j]);
	    }
	    console.log(row.join(' '));
	  }
    process.exit();//종료문
});