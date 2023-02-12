import femaleStudent from './images/female_student.png';
import maleStudent from './images/male_student.png';

const GroupMemberCard = ({student, handleStudentCardClick, selectedGroup}) => {
    return(
        <div 
            key={student.id} 
            id={student.id} 
            className={(student.groupName === selectedGroup ?'card m-2 standout' :'card m-2')} 
            style={{cursor: "pointer"}} onClick={handleStudentCardClick}
        >
            {(student.gender === 'male')? 
                <img src={maleStudent} className='card-img-top'/>
                :<img src={femaleStudent} className='card-img-top'/>}
            <div className='card-body'>
                <h5 className='card-title'>Full Name: {student.fullName}</h5>
                <p className='card-text'><b>Major:</b> {student.major}</p>
            </div>
        </div>
    )
}

export default GroupMemberCard