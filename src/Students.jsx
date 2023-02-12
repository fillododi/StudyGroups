import Groups from './Groups';
import GroupMembers from './GroupMembers';

const Students=({students, selectedGroup, handleStudentCardClick, handleGroupSelectionChange})=>{

    return(
        <main className='container'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-6'>
                    <Groups selectedGroup={selectedGroup} handleGroupSelectionChange={handleGroupSelectionChange}/>
                </div>
            </div>

            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-8'>
                    <div className='card-collection'>
                        <GroupMembers 
                            students={students} 
                            selectedGroup={selectedGroup} 
                            handleStudentCardClick={handleStudentCardClick}
                        />
                    </div> 
                </div>
            </div>
        </main>
    )
}
export default Students;