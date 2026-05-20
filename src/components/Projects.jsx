import '../Scss/projects.scss'
import cart1 from '../assets/cart1.png'
import cart2 from '../assets/cart2.png'
import cart3 from '../assets/cart3.png'
import cart4 from '../assets/cart4.png'
import cart5 from '../assets/cart5.png'
import cart6 from '../assets/cart6.png'
import { useRef, useState, useEffect } from 'react'

export default function Projects() {
	const [active, setActive] = useState(null)
	const timerRef = useRef(null)

	const handleCardClick = (id, link) => {
		// если уже открыта → второй клик = переход
		if (active === id) {
			window.location.href = link
			return
		}

		// открыть карточку
		setActive(id)

		// сброс таймера
		if (timerRef.current) clearTimeout(timerRef.current)

		// закрыть через 3 сек
		timerRef.current = setTimeout(() => {
			setActive(null)
		}, 3000)
	}

	useEffect(() => {
		return () => clearTimeout(timerRef.current)
	}, [])

	return (
		<div className='projects'>
			<div className='main_projects'>
				<div className='main_projects_container'>
					<h2 className='number'>- III -</h2>
					<h1 className='text1'>My</h1>
					<h1 className='text2'>
						<u>Art</u>
					</h1>
					<p className='text3'>Here are works shaped through purpose</p>
				</div>

				<div className='card-container'>
					<div
						className={`card ${active === 1 ? 'active' : ''}`}
						onClick={() => handleCardClick(1, 'https://time4pay.io/')}
					>
						<img className='card-front' src={cart1} alt='' />

						<div className='card-back'>
							<img src={cart2} alt='' />
						</div>
					</div>
					<div
						className={`card ${active === 1 ? 'active' : ''}`}
						onClick={() => handleCardClick(1, 'https://nenadolala.ru/radio-online/')}
					>
						<img className='card-front' src={cart3} alt='' />

						<div className='card-back'>
							<img src={cart4} alt='' />
						</div>
					</div>
					<div
						className={`card ${active === 1 ? 'active' : ''}`}
						onClick={() => handleCardClick(1, 'https://neokaidan.com/')}
					>
						<img className='card-front' src={cart5} alt='' />

						<div className='card-back'>
							<img src={cart6} alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
