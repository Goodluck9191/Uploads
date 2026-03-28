
import {Box} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

    const {user, signOut} = useAuth()

    const navigate = useNavigate()


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
                    {user ? (
                        <>
                            <span className={'greeting'}>{user.username ?`Hi, ${user.username}`: 'Signed in'}</span>
                            <button  className={'btn cta'} onClick={signOut}>Log Out</button>
                        </>

                    ) : (
                        <>
                            <button className="btn cta" onClick={() => navigate('/auth')} >
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