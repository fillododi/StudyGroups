import GroupMemberCard from "./GroupMemberCard"

const GroupMembers = ({students, selectedGroup, handleStudentCardClick}) => {
    return(
        students.map((student)=>(
            <GroupMemberCard student={student} handleStudentCardClick={handleStudentCardClick} selectedGroup={selectedGroup}/>
        ))
    )
}

export default GroupMembers