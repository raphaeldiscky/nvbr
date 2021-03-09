import { Link } from 'react-router-dom'

const Hamburger = () => {
  return (
    <div className='hamburger-menu'>
      <div className='menu-secondary-bg-color'></div>
      <div className='menu-layer'>
        <div className='menu-city-bg'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link to='/opportunities'>Opportunities</Link>
                  </li>
                  <li>
                    <Link to='/solutions'>Solutions</Link>
                  </li>
                  <li>
                    <Link to='/contact-us'>Contact us</Link>
                  </li>
                </ul>
              </nav>
              <div className='info'>
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique fuga ipsum corrupti. Atque esse rerum adipisci ad
                  deleniti ratione laborum velit maiores eum repellat
                  necessitatibus, enim quo neque quia recusandae.
                </p>
              </div>
              <div className='locations'>
                Locations:
                <span>Dallas</span>
                <span>Austin</span>
                <span>New York</span>
                <span>San Francisco</span>
                <span>Beijing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
