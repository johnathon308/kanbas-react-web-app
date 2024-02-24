function Array4() {
    let stringArray1 = ['string1', 'string3'];
    let stringArray2 = [];
    for (let i = 0;
        i < stringArray1.length;
        i++) {
    const string1 = stringArray1[i];
    stringArray2.push(
        string1.toUpperCase());
    }

    // Rendering stringArray2 elements as list items
    return (
        <>
            <ul>
                {stringArray2.map((string, index) => (
                    <li key={index}>{string}</li>
                ))}
            </ul>
        </>
    );
}

export default Array4;