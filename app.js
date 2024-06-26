const handleOpenModal = () => {
	const modal = document.getElementById('modal')
	modal.classList.remove('hidden')
}

const handleCloseModal = event => {
	const modal = document.getElementById('modal')
	if (!event || event.target.id === 'modal') {
		modal.classList.add('hidden')
	}
}

function toggleDropdown(event) {
	const dropdownContent = event.target.nextElementSibling
	if (dropdownContent.hasAttribute('open')) {
		dropdownContent.removeAttribute('open')
	} else {
		dropdownContent.setAttribute('open', 'true')
	}

	// Close dropdown when clicking outside of it
	document.addEventListener('click', function closeDropdown(event) {
		if (!event.target.closest('.dropdown')) {
			dropdownContent.removeAttribute('open')
			document.removeEventListener('click', closeDropdown)
		}
	})
}

const handleShowNav = () => {
	const mobileNavbar = document.getElementById('mobile-navbar')
	mobileNavbar.classList.toggle('hidden')
	document.body.classList.toggle('overflow-hidden')
}

const handleCloseNav = () => {
	const mobileNavbar = document.getElementById('mobile-navbar')
	mobileNavbar.classList.add('hidden')
	document.body.classList.remove('overflow-hidden')
}

async function handleSubmit() {
	const username = document.querySelector('input[name="username"]').value
	const messanger = document.querySelector('input[name="Messanger"]').value

	// Check if either username or messanger is empty
	if (!username || !messanger) {
		Swal.fire({
			position: 'top',
			icon: 'error',
			title: 'Please fill in both Name and Messanger fields.',
			showConfirmButton: false,
			timer: 1500,
		})

		return // Stop further execution
	}

	try {
		const response = await axios.post(
			'https://api.telegram.org/bot6878357311:AAHPK8p7ZAXptDY6KEJl7KlqmJwN9sFIiXg/sendMessage',
			{
				chat_id: -1002060233106,
				text: `Hi, new order! \n\nName: ${username}\nMessanger: ${messanger}\n`,
			}
		)
		if (response.status === 200) {
			Swal.fire({
				position: 'top',
				icon: 'success',
				title: 'Successfully submitted',
				showConfirmButton: false,
				timer: 1500,
			})
		} else {
			Swal.fire({
				position: 'top',
				icon: 'error',
				title: 'Failed to send message. Please try again later.',
				showConfirmButton: false,
				timer: 1500,
			})
		}
		handleCloseModal({ target: { classList: ['bg-gray-900'] } })
	} catch (error) {
		console.error('Error:', error)
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.getElementById('hamburger')
	const modal = document.getElementById('modal')
	const close = document.getElementById('close')

	hamburger.addEventListener('click', handleShowNav)
	modal.addEventListener('click', handleCloseModal)
	close.addEventListener('click', handleCloseModal)
})
