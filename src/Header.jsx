const Header = ({selectedGroup, groupMemberCount}) => {
    return(
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Study Groups</h1>
                    <h3>{selectedGroup} has {groupMemberCount} {groupMemberCount === 1? "Student" : "Students"}</h3>
                </div>
            </div>
        </header>
    )
}

export default Header;