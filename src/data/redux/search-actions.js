function search(query) {
    return {
        type: "query",
        payload: query
    };
}

export { search };