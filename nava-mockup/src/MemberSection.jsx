
const MemberSection = ({ members }) => {

    return ( 
        <>
        <div className="family-members">
            {members.map((member) => (
                <div className="member-card" key={ member.id }>
                    <h3>{ member.name }</h3>
                    <p><strong>Description: </strong>{ member.description }</p>
                    <p><strong>Fruit: </strong>{ member.fruit }</p>
                </div>
                

            ))}
        </div>
        </>
     );
}
 
   {/* above I want to have an input form, take the items from the form
        then add them to card elements */}
        {/* lets start with making the fake data first */}
export default MemberSection;