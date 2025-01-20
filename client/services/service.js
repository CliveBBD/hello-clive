const getData = async (name) => {

    const response = fetch(`/api/data?name=${name}`);

    const resolvedResponse = await response.json();

    return resolvedResponse;
}