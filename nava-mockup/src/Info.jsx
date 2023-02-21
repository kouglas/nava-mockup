import MemberSection from "./MemberSection";
import useFetch from "./useFetch";

const Info = () => {
  const { data: members, isPending, error} = useFetch('http://localhost:8000/member')

  

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