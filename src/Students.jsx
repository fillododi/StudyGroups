import {useState} from 'react';
import femaleStudent from './images/female_student.png';
import maleStudent from './images/male_student.png';

const Students=()=>{

    const [selectedGroup, setGroup] = useState("Divine Coders");

    const  [students, setStudents] = useState([
        {
            id: 1,
            fullName: "Filippo Dodi",
            major: "Computer Engineering",
            gender: "male",
            groupName: "Divine Coders"
        },
        {
            id: 2,
            fullName: "Giorgia di Martino",
            major: "Automation Engineering",
            gender: "female",
            groupName: "Pedoghine"
        },
        {
            id: 3,
            fullName: "Mattia Dolci",
            major: "Electronics Engineering",
            gender: "male",
            groupName: "1/2"
        },
        {
            id: 4,
            fullName: "Lorenzo d'Amato",
            major: "Computer Engineering",
            gender: "male",
            groupName: "Divine Coders"
        },
        {
            id: 5,
            fullName: "Lorenzo Dellacà",
            major: "Computer Engineering",
            gender: "male",
            groupName: "Divine Coders"
        },
        {
            id: 6,
            fullName: "Elisa Bettega",
            major: "Architecture",
            gender: "female",
            groupName: "Casa Forlanini"
        },
        {
            id: 7,
            fullName: "Ludovico Gioi",
            major: "Medicine",
            gender: "male",
            groupName: "Casa Forlanini"
        },
        {
            id: 8,
            fullName: "Gaia Arosio",
            major: "Medicine",
            gender: "female",
            groupName: "5C"
        },
        {
            id: 9,
            fullName: "Andrea di Carlo",
            major: "Computer Engineering",
            gender: "male",
            groupName: "Polipompati"
        },
        {
            id: 10,
            fullName: "Federico Consorte",
            major: "Computer Engineering",
            gender: "male",
            groupName: "Polipompati"
        },
        {
            id: 11,
            fullName: "Laura Donato Seminara",
            major: "Environmental Engineering",
            gender: "female",
            groupName: "Bovisotti"
        },
        {
            id: 12,
            fullName: "Massimo Lora",
            major: "Management",
            gender: "male",
            groupName: "Bovisotti"
        }
    ]);

    function handleGroupSelectionChange(event){
        setGroup(event.target.value);
        console.log("Changed group selection to " + event.target.value);
    }

    function handleStudentCardClick(event){
        const transformedStudents = students.map(
            (student)=>(student.id === parseInt(event.currentTarget.id))?
                (student.groupName === selectedGroup)?{...student, groupName:''}:{...student, groupName: selectedGroup}
                :student
        );
        setStudents(transformedStudents);
    }

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
                            <div id={student.id} className={(student.groupName === selectedGroup ?'card m-2 standout' :'card m-2')} 
                            style={{cursor: "pointer"}} onClick={handleStudentCardClick}>

                                {(student.gender === 'male')? <img src={maleStudent} className='card-img-top'/>
                                                            : <img src={femaleStudent} className='card-img-top'/>}
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