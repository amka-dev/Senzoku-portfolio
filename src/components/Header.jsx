import logo from '../assets/logosenzoku.svg'
export default function Header() {
	return (
		<div className='header'>
			<div className='logo_container'>
				<img className='logo' src={logo} alt='logo zensoku' />
				<p className='logo_name'>SENZOKU</p>
			</div>
			<div className='name_container'>
				<p className='name'>AMIR</p>
				<p className='surname'>NASIFULLIN</p>
			</div>
		</div>
	)
}
