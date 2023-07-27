function clock(){
	let df = document.getElementById("df")
	dformat = df.value;
	let tf = document.getElementById("tf")
	tformat = tf.value;
	let date = document.getElementById("date");
	let time = document.getElementById("time");
	let date_ = new Date();
	let hr = new Date().getHours();
	let min = new Date().getMinutes();
	let sec = new Date().getSeconds();
	
	if (dformat == "d"){
		date.innerHTML = "Date : " + date_.getDate()+ " / " + parseInt(date_.getMonth() + 1) + " / " + date_.getFullYear();
	}
	else{
		date.innerHTML = "Date : " + date_.getFullYear() + " / " + parseInt(date_.getMonth() + 1) + " / " + date_.getDate();
	}

	if(sec < 10){
		sec = "0" + sec;
	}
	if(min < 10){
		min = "0" + min;
	}

	if(tformat == "24h"){
		if(hr < 10){
			hr = "0" + hr;
		}
		time.innerHTML = hr + " : " + min + " : " + sec;
	}
	else{
		if(hr > 12){
			hr = hr - 12;
			time.innerHTML = "0" + hr + " : " + min + " : " + sec + " : PM";
		}
		else{
			time.innerHTML = "0" + hr + " : " + min + " : " + sec + " : AM";
		}
	}

}
setInterval(clock,1000)