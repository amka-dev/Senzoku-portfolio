import { useEffect, useState } from 'react'

export default function Preloader({ onLoaded }) {
	const [fade, setFade] = useState(false)
	const [setProgress] = useState(0)

	useEffect(() => {
		let i = 0

		const interval = setInterval(() => {
			i += Math.random() * 4
			if (i > 100) i = 100

			setProgress(Math.floor(i))

			if (i === 100) {
				clearInterval(interval)

				setTimeout(() => {
					setFade(true)
					setTimeout(() => onLoaded?.(), 900)
				}, 300)
			}
		}, 20)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className={`loader ${fade ? 'hide' : ''}`}>
			<div className='dot' />
		</div>
	)
}
