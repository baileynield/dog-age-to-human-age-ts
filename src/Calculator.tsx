import React, { useState } from "react";


const Calculator: React.FC = () => {
    const [name, setName] = useState("");
    // can be a number or an empty string
    const [humanAge, setHumanAge] = useState<number | string>("");
    // State to hold the calculated dog age as a string (null initially)
    const [dogAge, setDogAge] = useState<string | null>(null);

    // Handler for form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Prevent the page from refreshing when the user clicks submit
        event.preventDefault();

        // Only show the result if the user has entered a valid human age
        if (typeof humanAge === "number" && humanAge > 0) {
            // Calculate dog age using the formula and set the result in state
            const calculatedDogAge = 16 * Math.log(humanAge) + 31;
            setDogAge(`${name} is ${calculatedDogAge.toFixed(2)} years old in dog years.`);
        } else {
            setDogAge("Please enter a valid human age");
        }
    };

    const handleHumanAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newHumanAge = event.target.value;
        // Update the human age state (convert to number if not empty)
        setHumanAge(newHumanAge === "" ? "" : Number(newHumanAge));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        placeholder="Enter name"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="humanAge">Human Age</label>
                    <input
                        type="number"
                        id="humanAge"
                        value={humanAge}
                        placeholder="Enter human age in years"
                        onChange={handleHumanAgeChange}
                    />
                </div>
                <button type="submit">SubmitMe</button>
            </form>
            {/* Display the calculated dog age if it exists */}
            {dogAge && <p>{dogAge}</p>}
        </>
    );
}

export default Calculator;
