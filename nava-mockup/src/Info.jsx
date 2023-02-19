import MemberSection from "./MemberSection";
import Navbar from "./Navbar";

const Info = () => {
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

              <MemberSection />

            </div>
            
          </section>
          
        </>
     );
}
 
export default Info;