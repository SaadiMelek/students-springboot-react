import React from "react";

const Search = ({ search, setSearch }) => {// Passed params from parent component
    return (
        <div className={"col-sm-6 mb-4"}>
            <form onSubmit={(event) => event.preventDefault()}>
                <input className={"form-control"}
                       type={"search"} role={"searchbar"}
                       placeholder={"Search students ..."}
                       value={search} onChange={(event) => setSearch(event.target.value)}
                />
                <div className={"alert alert-success"}>Search is just a filter on frontend level !</div>
            </form>
        </div>
    );
};

export default Search;