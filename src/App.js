import * as React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Students from './Students';
import GroupedMembers from './GroupedMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [selectedGroup, setGroup] = useState(JSON.parse(localStorage.getItem('selectedGroup')) || "Divine Coders");

  const  [students, setStudents] = useState(JSON.parse(localStorage.getItem('studentList')) ||[
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
    },
    {
      id: 13,
      fullName: "Assunta Damiano",
      major: "Mathematical engineering",
      gender: "female",
      groupName: "Pedoghine"
    }
  ]);

  useEffect(()=>{
    localStorage.setItem('studentList', JSON.stringify(students))
  }, [students]);

  useEffect(()=>{
    localStorage.setItem('selectedGroup', JSON.stringify(selectedGroup))
  }, [selectedGroup]);

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
  return (
    <div>
      <Router>
        <Nav/>
        <Header 
          selectedGroup = {selectedGroup} 
          groupMemberCount = {students.filter((student)=>student.groupName === selectedGroup).length}
        />
        <Routes>
          <Route path='/' element={
            <Students 
              students = {students} 
              selectedGroup = {selectedGroup} 
              handleStudentCardClick = {handleStudentCardClick} 
              handleGroupSelectionChange = {handleGroupSelectionChange}
            />
          }></Route>
          <Route path='/GroupedMembers' element={
            <GroupedMembers
              students={students}
              selectedGroup={selectedGroup}
              setGroup={setGroup}
            />
          }></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
