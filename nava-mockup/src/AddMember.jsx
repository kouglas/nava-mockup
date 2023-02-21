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
    // e.preventDefault()
    // ao if you keep it like this
    // you can add new members but the page will still refresh
    // after you submit 

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
                <strong>Family Member Name: </strong> <input type="text" required value={name} onChange= {(e) => setName(e.target.value) }  />
              </label>
              <label>
                <strong>Family Member Description:</strong> <input type="text" required value={description} onChange= {(e) => setDescription(e.target.value) } />
              </label>
              <label>
                <strong>Family Favorite Fruit:</strong> <input type="text" required value={fruit} onChange= {(e) => setFruit(e.target.value) } />
              </label>
              <button className="submit-btn">Add new member</button>  
            </form>

            </div>
          )}
        </>
     );
}
 
export default AddMember;