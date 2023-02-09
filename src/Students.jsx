import {useState} from 'react';

const Students=()=>{

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
            major: "Xomputer Engineering",
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

    return(
        <main>
            {
                students.map((student)=>(
                    <p>{student.fullName}</p>
                ))
            }
        </main>
    )
}
export default Students;