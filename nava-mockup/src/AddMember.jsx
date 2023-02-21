import { useState } from "react";


const AddMember = () => {
  const [showForm, setShowForm] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [fruit, setFruit] = useState('')
  
 
  const handleClick = () => {
    setShowForm(true)
    setShowButton(false)
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const member = { name, description, fruit }

    fetch('http://localhost:8000/member' ,{
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(member)
    })
    .then(() => {
      
      console.log("new data added")
    })
  }

    return ( 
        <>
          <div className="add-button">
            {showButton && <button onClick={handleClick} className="add-btn">Add new member</button>}
          </div>
          {showForm && (
            <div className="submit">
              <form onSubmit={handleSubmit}>
              <label>
                Family Member Name: <input type="text" required value={name} onChange= {(e) => setName(e.target.value) }  />
              </label>
              <label>
                Family Member Description: <input type="text" required value={description} onChange= {(e) => setDescription(e.target.value) } />
              </label>
              <label>
                Family Favorite Fruit: <input type="text" required value={fruit} onChange= {(e) => setFruit(e.target.value) } />
              </label>
              <button className="submit-btn">Add new member</button>  
            </form>

            </div>
          )}
        </>
     );
}
 
export default AddMember;