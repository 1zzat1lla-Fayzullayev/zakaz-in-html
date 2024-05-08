const handleOpenModal = () => {
	const modal = document.getElementById('modal')
	modal.classList.remove('hidden')
}

const handleCloseModal = event => {
	const modal = document.getElementById('modal')
	if (event.target.classList.contains('bg-gray-900')) {
		modal.classList.add('hidden')
	}
}

const handleShowNav = () => {
	const mobileNavbar = document.getElementById('mobile-navbar')
	mobileNavbar.classList.toggle('hidden')
	document.body.classList.toggle('overflow-hidden')
}

const handleCloseNav = () => {
	document.body.classList.remove('overflow-hidden')
}

async function handleSubmit() {
	const username = document.querySelector('input[name="username"]').value
	const messanger = document.querySelector('input[name="Messanger"]').value

	try {
		const response = await axios.post(
			'https://api.telegram.org/bot6878357311:AAHPK8p7ZAXptDY6KEJl7KlqmJwN9sFIiXg/sendMessage',
			{
				chat_id: -1002060233106,
				text: `Hi, new order! \n\nName: ${username}\nMessanger: ${messanger}\n`,
			}
		)
		if (response.status === 200) {
			alert('Message sent successfully!')
		} else {
			alert('Failed to send message. Please try again later.')
		}
		handleCloseModal({ target: { classList: ['bg-gray-900'] } })
	} catch (error) {
		console.error('Error:', error)
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.getElementById('hamburger')
	const modal = document.getElementById('modal')
	const mobileNavbar = document.getElementById('mobile-navbar')
	const close = document.getElementById('close')

	hamburger.addEventListener('click', handleShowNav)
	modal.addEventListener('click', handleCloseModal)
	mobileNavbar.addEventListener('click', handleShowNav)
	close.addEventListener('click', handleCloseNav)
})
