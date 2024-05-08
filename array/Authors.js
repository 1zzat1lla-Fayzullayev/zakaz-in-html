const authors = [
	{
		name: 'Viezh Robert',
		description:
			'“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
		img: './assets/author1.png',
	},
	{
		name: 'Yessica Christy',
		description:
			'“I like it because I like to travel far and still can connect with high speed.”.',
		img: './assets/author2.png',
	},
	{
		name: 'Kim Young Jou',
		description:
			'“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
		img: './assets/author3.png',
	},
]

document.addEventListener('DOMContentLoaded', function () {
	const authorsListContainer = document.querySelector('.authors')

	authors.forEach((author, index) => {
		const authorCard = `
            <div class="transition ease-in border-[2px] border-[#DDD] hover:border-[#79BFFF] rounded-[10px] md:w-[400px] w-full h-[230px]">
                <div class="mt-[30px] ml-[30px]">
                    <div class="flex items-center gap-[20px]">
                        <img src="${author.img}" alt="user" />
                        <p class="text-[#0B132A] text-[18px] font-normal">${author.name}</p>
                    </div>
                    <p class="mt-[20px] text-[#0B132A] text-[16px]">${author.description}</p>
                </div>
            </div>
        `

		const authorElement = document.createElement('div')
		authorElement.innerHTML = authorCard
		authorsListContainer.appendChild(authorElement)
	})
})
