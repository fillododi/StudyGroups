import { useState } from "react"

const GroupedMembers = ({students, selectedGroup, setGroup}) =>{

    function groupMembers(){
        var groups = [];
        var divineCodersMembers = students.filter((student)=>student.groupName === "Divine Coders");
        var divineCoders = {
            group: "Divine Coders", 
            members: divineCodersMembers, 
            collapsed: selectedGroup === "Divine Coders"? false : true
        };
        groups.push(divineCoders);

        var pedoghineMembers = students.filter((student)=>student.groupName === "Pedoghine");
        var pedoghine = {
            group: "Pedoghine", 
            members: pedoghineMembers, 
            collapsed: selectedGroup === "Pedoghine"? false : true
        };
        groups.push(pedoghine);

        var unoDueMembers = students.filter((student)=>student.groupName === "1/2");
        var unoDue = {
            group: "1/2", 
            members: unoDueMembers, 
            collapsed: selectedGroup === "1/2"? false : true
        };
        groups.push(unoDue);

        var casaForlaniniMembers = students.filter((student)=>student.groupName === "Casa Forlanini");
        var casaForlanini = {
            group: "Casa Forlanini", 
            members: casaForlaniniMembers, 
            collapsed: selectedGroup === "Casa Forlanini"? false : true
        };
        groups.push(casaForlanini);

        var quintaCMembers = students.filter((student)=>student.groupName === "5C");
        var quintaC = {
            group: "5C", 
            members: quintaCMembers, 
            collapsed: selectedGroup === "5C"? false : true
        };
        groups.push(quintaC);

        var polipompatiMembers = students.filter((student)=>student.groupName === "Polipompati");
        var polipompati = {
            group: "Polipompati", 
            members: polipompatiMembers, 
            collapsed: selectedGroup === "Polipompati"? false : true
        };
        groups.push(polipompati);

        var bovisottiMembers = students.filter((student)=>student.groupName === "Bovisotti");
        var bovisotti = {
            group: "Bovisotti", 
            members: bovisottiMembers, 
            collapsed: selectedGroup === "Bovisotti"? false : true
        };
        groups.push(bovisotti);

        return groups

    }
    
    const [groupedStudents, setGroupedData] = useState(groupMembers());

    function handleGroupClick(event){
        var transformedGroupedData = groupedStudents.map((groupedData) => groupedData.group === event.currentTarget.id?
            {...groupedData, collapsed: !groupedData.collapsed}
            :groupedData
        );
        setGroupedData(transformedGroupedData);
        setGroup(event.currentTarget.id);
    }

    return(
        <main className="container">
            {groupedStudents.map((item)=>{
                return(
                    <div key={item.group} className='card mt-2' style={{cursor:"pointer"}}>
                        <h4 id={item.group} className='card-header text-secondary bg-white' onClick={handleGroupClick}>
                            Group Name: {item.group}
                        </h4>
                        <div id={"collapse_" + item.group} className={item.collapsed === true? "collapse" : ""}>
                            <hr/>
                            {item.members.map((member)=>{
                                return(
                                    <div className="mt-2">
                                        <h5 className="card-title mt-2">
                                            <span className="text-dark">Full Name: {member.fullName}</span>
                                        </h5>
                                        <p>Major: {member.major}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </main>
    )
}
export default GroupedMembers