document.addEventListener('DOMContentLoaded', function () {
	const priceList = [
		{
			first_name: 'Unlimited Bandwidth',
			second_name: 'Encrypted Connection',
			third_name: 'No Traffic Logs',
			fourth_name: 'Works on All Devices',
			price: '$10',
			img: './assets/check.png',
		},
		{
			first_name: 'Unlimited Bandwidth',
			second_name: 'Encrypted Connection',
			third_name: 'No Traffic Logs',
			fourth_name: 'Works on All Devices',
			price: '$10',
			img: './assets/check.png',
		},
		{
			first_name: 'Unlimited Bandwidth',
			second_name: 'Encrypted Connection',
			third_name: 'No Traffic Logs',
			fourth_name: 'Works on All Devices',
			price: '$10',
			img: './assets/check.png',
		},
	]

	const container = document.querySelector('.flex-container')

	priceList.forEach(item => {
		const div = document.createElement('div')
		div.classList.add('mb-4')
		div.innerHTML = `
            <div class="border-[2px] border-[#DDD] transition ease-in hover:border-[#2BC6F6] flex flex-col items-center w-[300px] h-[full] rounded-[10px]">
                <h3 class="text-[#0B132A] text-[18px] font-normal mt-[57px]">Standard</h3>
                <ul class="flex flex-col gap-4 mt-[30px]">
                    <li class="flex items-center gap-4 text-[#4F5665]"><img src="${item.img}" alt="check" />${item.first_name}</li>
                    <li class="flex items-center gap-4 text-[#4F5665]"><img src="${item.img}" alt="check" />${item.second_name}</li>
                    <li class="flex items-center gap-4 text-[#4F5665]"><img src="${item.img}" alt="check" />${item.third_name}</li>
                    <li class="flex items-center gap-4 text-[#4F5665]"><img src="${item.img}" alt="check" />${item.fourth_name}</li>
                </ul>
                <h1 class="text-center text-[#0B132A] text-[25px] font-semibold mt-[54px]">${item.price}</h1>
                <button class="border-[2px] text-[#2BC6F6] border-[#2BC6F6] rounded-[50px] w-[177px] h-[45px] mt-[20px] mb-[57px] transition ease-in hover:shadow-lg hover:shadow-[#2BC6F6] hover:bg-[#2BC6F6] hover:text-white">Select</button>
            </div>
        `
		container.appendChild(div)
	})
})
