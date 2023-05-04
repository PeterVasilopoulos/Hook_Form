import React, {useState} from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [hairColor, setHairColor] = useState("");

    let [formData, setFormData] = useState([]);
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submitted", firstName, lastName, age, hairColor);
        setFormData([{firstName, lastName, age, hairColor}])
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
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
                
                <button>Submit</button>
            </form>

            <div>
                {
                    formData.map((data) => {
                        return (
                            <div>
                                <p>Your Form Data</p>
                                <label>First Name:</label>
                                <p>{data.firstName}</p>
                                <label>Last Name:</label>
                                <p>{data.lastName}</p>
                                <label>Age:</label>
                                <p>{data.age}</p>
                                <label>Hair Color:</label>
                                <p>{data.hairColor}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Form