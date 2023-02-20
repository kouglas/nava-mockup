import { useEffect, useState } from "react";
import MemberSection from "./MemberSection";

const Info = () => {
  const [members, setMembers] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [ error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/member')
      .then(response => {
        if(!response.ok) {
          throw Error('could not fetch the data for that resource')
        }
          return response.json()
      })
      .then(data => {
          console.log(data)
          setMembers(data)
          setIsPending(false)
          setError(null)
      })
      .catch(err => {
        setIsPending(false)
        setError(err.message)
      })
}, [])

    return ( 
        <>
          <section> 
            <div className="main-info">
              <h1 className="main-title">
                Your household 
              </h1>
              <p className="text-info">
                Welcome to the MarketPlace! Review your household below:
              </p>
              {/* put the MemberSection component here */}

              {error && <div>{ error } </div>}
              {isPending && <div>Loading...</div>}
              {members && <MemberSection members={members}  />} 
              {/* render when we have members data */}

            </div>
            
          </section>
          
        </>
     );
}
 
export default Info;