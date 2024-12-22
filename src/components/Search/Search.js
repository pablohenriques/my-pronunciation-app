import { useState } from "react";
import "./Search.css";
import getPronunciation from "../../services/server";


function Search() {
    const [phrase, setPhrase] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (phrase === "" || phrase === null) {
            setPhrase("Please provide the phrase you want me to translate.");
        } else {
            let response = getPronunciation(phrase);
            response.then(res => {
                setAnswer(res)
            })
        }
    }

    const handlerClear = (event) => {
        event.preventDefault();
        setPhrase('');
        setAnswer('');
    }

    return (
        <section class="container">
            <h1>Write your word/phrase</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="search" value={phrase} onChange={(e) => setPhrase(e.target.value)}></input>
                <div class="container-search">
                    <button type="submit">Search</button>
                    <button class="clear-button" onClick={handlerClear}>Clear</button>
                </div>
            </form>
            <div class="container-result">
                <table>
                    <thead>
                        <tr>
                            <th>BR Pronuciation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{answer}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Search;