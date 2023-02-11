import femaleStudent from './images/female_student.png';
import maleStudent from './images/male_student.png';

const Students=({students, selectedGroup, handleStudentCardClick, handleGroupSelectionChange})=>{

    return(
        <main className='container'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-6'>
                    <select className='form-select form-select-lg' value={selectedGroup} onChange={handleGroupSelectionChange}>
                        <option value="Divine Coders">Divine Coders</option>
                        <option value="Pedoghine">Pedoghine</option>
                        <option value="1/2">1/2</option>
                        <option value="Casa Forlanini">Casa Forlanini</option>
                        <option value="5C">5C</option>
                        <option value="Polipompati">Polipompati</option>
                        <option value="Bovisotti">Bovisotti</option>
                    </select>
                </div>
            </div>

            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-8'>
                    <div className='card-collection'>
                    {
                        students.map((student)=>(
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
                        ))
                    }
                    </div> 
                </div>
            </div>
        </main>
    )
}
export default Students;