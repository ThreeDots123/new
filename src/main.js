import React from "react";
import {
    useNavigate
} from "react-router-dom"

// component 1

const Main = () => {
    const navigate = useNavigate() //initializing navigate


    // The function to navigate to dashboard
    function goToDashboard() {
        // put the url(route) you want to navigate to
        navigate("/dashboard") // This will navigate to /dashboard and show the component for that url
    }


    return <>
        <div className="App">
            <h1>Price is Right!</h1>
            <h2>Guess the correct number for a chance to double your money!</h2>
            <button 
            onClick={function() {
                // on click of this button, perform the function bellow
                goToDashboard()
            }
            }>
                Connect AlgoWallet
            </button>
            <h3>OR</h3>

            <div class="mnemonic">
            <span>Import Account by mnemonic</span>
            <br></br>
            <br></br>

            <textarea
                name="secret"
                class="ContractInfo "
                placeholder="Paste Mnemonic Key"
                data-gramm="false"
                wt-ignore-input="true"
                //data-quillbot-element="0Yn1Rw5qtBy0352nOABcD"
            >
                {" "}
            </textarea>
            </div>
        </div>
    </>
}

export default Main