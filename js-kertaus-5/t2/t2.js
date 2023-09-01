async function fetchData() {
  try {
    const response = await fetch('https://reqres.in/api/users', {
      body: JSON.stringify({
        name: 'User 1',
        job: 'Developer',
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('Done');
  }
}

fetchData();
