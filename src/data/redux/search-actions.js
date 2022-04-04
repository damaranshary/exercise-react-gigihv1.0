function search(query) {
    return {
        type: "search",
        payload: query
    };
}

export { search };