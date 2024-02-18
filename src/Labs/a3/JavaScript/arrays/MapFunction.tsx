function Array5() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a: number) => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);

    // Rendering stringArray2 elements as list items
    return (
        <>
            <ul>
                {numberArray1.map((string, index) => (
                    <li key={index}>{string}</li>
                ))}
            </ul>
        </>
    );
}

export default Array5;