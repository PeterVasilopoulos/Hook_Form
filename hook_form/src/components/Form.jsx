import React, {useState} from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [hairColor, setHairColor] = useState("");

    return (
        <div>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
                </div>

                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                </div>

                <div>
                    <label>Age:</label>
                    <input type="text" onChange={(e) => setAge(e.target.value)}/>
                </div>

                <div>
                    <label>Hair Color:</label>
                    <input type="text" onChange={(e) => setHairColor(e.target.value)}/>
                </div>
            </form>
        
            {/* Displaying Form Data */}
            <div>
                <p>Your Form Data</p>
                <label>First Name:</label>
                <p>{firstName}</p>
                <label>Last Name:</label>
                <p>{lastName}</p>
                <label>Age:</label>
                <p>{age}</p>
                <label>Hair Color:</label>
                <p>{hairColor}</p>
            </div>

        </div>
    )
}

export default Form