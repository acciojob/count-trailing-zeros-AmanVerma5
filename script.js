function trailingZeros(n) {
  //your JS code here. If required.
	let fac=1;
	for(let i=1;i<=n;i++){
		fac=fac*i;
	}
	let count=0;
	let flag=true;
	while(flag){
		if(fac%10===0){
			count++;
			fac=parseInt(fac/10);
			continue;
		}
		flag=false;
	}
	return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
