import React from 'react'


const Navbar = () => {
    const content =<>
    <div className="">
      <ul>
        <a href=""><li>Home</li></a>

        <a href=""><li>About</li></a>

        <a href=""><li>LogIn</li></a>

        <a href=""><li>SignUp</li></a>

        <a href=""><li>Psychaitrist</li></a>

        <a href=""><li>Contact</li></a>

          
      </ul>
    </div></>
  return (
    <nav>
        <div>
            <div>
                <span>LOGO</span>
            </div>
            <div>
                <div>
                    <ul>
                    <a href=""><li>Home</li></a>
                    </ul>

                    <ul>
                    <a href=""><li>About</li></a>
                    </ul>

                    <ul>
                    <a href=""><li>LogIn</li></a>
                    </ul>

                    <ul>
                    <a href=""><li>SignUp</li></a>
                    </ul>

                    <ul>
                    <a href=""><li>Psychaitrist</li></a>
                    </ul>

                    <ul>
                    <a href=""><li>Contact</li></a>
                    </ul>
                </div>
            </div>
        </div>

    </nav>
    
  )
}

export default Navbar
