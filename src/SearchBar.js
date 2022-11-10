const Search = ({setSearchItem,title}) => {
    return (
        <div className="search">
        <input class="mainLoginInput" type="text" placeholder="&#61442; search for post" onChange={event =>{
            // Using setSearchItem to update the value of searchItem every time it's changed/updated.
                    setSearchItem(event.target.value);
                }}/>
                <hr className="navline"/>
                <h2 className="title">{title}</h2>
            </div>
    );
}
 
export default Search;