import logo from '../assets/DeLawVery  Logo.svg'

export function Header() {
    return (
        <div style={{ backgroundColor: '#4e71ff', maxHeight: '60px', display: 'flex', justifyContent: 'center' }}  >
            <img src={logo} alt="logo" style={{ height: '40px', margin: '10px' }} />
        </div>

    )
}