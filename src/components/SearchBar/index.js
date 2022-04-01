const SearchBar = ({ handleFormSubmit, handleFormChange, query }) => {
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={query} onChange={handleFormChange} required />
            <button className="fa fa-search" type="submit"></button>
        </form>
    )
}

export default SearchBar;