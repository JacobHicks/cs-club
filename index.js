const samplePost = async () => {
    const nameDiv = document.getElementById('name');
    const name = nameDiv.value;

    const res = await fetch('https://cs-club.vercel.app/api/api1', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: name})
    });
    const resultText = await res.text();

    document.getElementById('result').textContent = resultText;
};