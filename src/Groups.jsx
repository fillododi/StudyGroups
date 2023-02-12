const Groups = ({selectedGroup, handleGroupSelectionChange}) => {
    return(
        <select className='form-select form-select-lg' value={selectedGroup} onChange={handleGroupSelectionChange}>
            <option value="Divine Coders">Divine Coders</option>
            <option value="Pedoghine">Pedoghine</option>
            <option value="1/2">1/2</option>
            <option value="Casa Forlanini">Casa Forlanini</option>
            <option value="5C">5C</option>
            <option value="Polipompati">Polipompati</option>
            <option value="Bovisotti">Bovisotti</option>
        </select>
    )
}

export default Groups