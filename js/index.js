window.addEventListener("DOMContentLoaded", function () {
	
	const tabsHeaders = document.querySelectorAll(".tabheader__item");
	const tabsContents = document.querySelectorAll(".tabcontent");
	const tabsHeaderParent = document.querySelector(".tabheader__items");

	function hideTabContent() {
		tabsContents.forEach(tabContent => {
			tabContent.classList.add("hide");
			tabContent.classList.remove("show", "fade");
		});

		tabsHeaders.forEach(tabHeader => tabHeader.classList.remove("tabheader__item_active"));
	}

	function showTabContent(i = 0) {
		tabsContents[i].classList.add("show", "fade");
		tabsContents[i].classList.remove("hide");
		tabsHeaders[i].classList.add("tabheader__item_active");
	}

	hideTabContent();
	showTabContent();

	tabsHeaderParent.addEventListener("click", (e) => {
		if (e.target && e.target.matches(".tabheader__item")) {
			tabsHeader.forEach((tabHeader, index) => {
				if (e.target === tabHeader) {
					hideTabContent();
					showTabContent(index);
				}
			});
		}
	});
	// timer logic start

	const deadline = "2023-07-17";

	function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		let days, hours, minutes, seconds;
		

		if(total <= 0){
			days=0;
			hours=0;
			seconds=0;
			minutes=0;
		}else{
			days =  Math.floor(total / (1000 * 60 * 60 * 24));
			hours = Math.floor((total / (1000 * 60 * 60) % 24));
			minutes = Math.floor((total / 1000 / 60) % 60);
			seconds = Math.floor((total / 1000) % 60);
		}
		return{
			total,
			days,
			hours,
			minutes,
			seconds,
		}
	}

	function setZero(n){
		if(n>=0 && n<10){
			return `0${n}`
		}else{
			return n;
		}
	}

	function setClock (selector, endTime) {
		const timer = document.querySelector(".timer");
		const daysBlock = timer.querySelector("#days");
		const hoursBlock = timer.querySelector("#hours");
		const minutesBlock = timer.querySelector("#minutes");
		const secondsBlock = timer.querySelector("#seconds");
		const timerId = setInterval(updateClock, 1000);

		updateClock();
		function updateClock(){
		const time = getTimeRemaining(endTime);	
		const {days, hours, minutes, seconds } = time;
		daysBlock.textContent = setZero(days) ;
		hoursBlock.textContent = setZero(hours);
		minutesBlock.textContent = setZero(minutes);
		secondsBlock.textContent = setZero(seconds);

		if(total <= 0){
			clearInterval(timerId);
		}
	}
		}

	setClock(".time", deadline);
	// timer logic end

});