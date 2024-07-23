import React, { useState } from "react";

const Calculator: React.FC = () => {
    const [name, setName] = useState("");
    const [humanAge, setHumanAge] = useState<number | string>("");
    const [dogAge, setDogAge] = useState<number | string>("");


    const handleHumanAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newHumanAge = event.target.value;
        setHumanAge(newHumanAge === "" ? "" : Number(newHumanAge));
    };

    const calculateDogAge = (): void => {
        if (typeof humanAge === "number" && typeof name === "string") {
            const dogAge = 16 * Math.log(humanAge) + 31;
            setDogAge(`${name} is ${dogAge} in dog years. `);
        } else {
            setDogAge("0 years old");
        }
    }
    

    return (
        <>
            <form>
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
                <button type="button" onClick={calculateDogAge}>Calculate Dog Age</button>               
            </form>
        </>
    );
}

export default Calculator;

