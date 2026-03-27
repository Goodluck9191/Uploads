
import {Box} from "lucide-react";


const Navbar = () => {
    const isSignedIn = true
    const username = 'gooodluck'


    return (
        <header className={"navbar"}>
            <nav className={'inner'}>

                <div className={'left'}>
                    <div className={'brand'}>
                        <Box className={'logo'}/>

                        <span className={'name'}>
                            Roomify
                        </span>
                    </div>

                    <ul className={'links'}>
                        <a href="#">Product</a>
                        <a href="#">Pricing</a>
                        <a href="#">Community</a>
                        <a href="#">Enterprise</a>
                        <a href="#">Another</a>
                    </ul>
                </div>

                <div className={'actions'}>
                    {isSignedIn ? (
                        <>
                            <span className={'greeting'}>{username ?`Hi, ${username}`: 'Signed in'}</span>
                            <button  className={'btn cta'}>Log Out</button>
                        </>

                    ) : (
                        <>
                            <button  >
                                Log In
                            </button>


                        </>
                    )}

                </div>
            </nav>

        </header>
    )
}
export default Navbar;