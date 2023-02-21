
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
 
export default MemberSection;