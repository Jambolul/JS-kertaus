async function fetchData() {
  const response = await fetch('https://reqres.in/api/unknown/23', {
    method: 'GET',
  });

  try {
    if (!response.ok) {
      console.log(response);
      throw new Error(`Error in request: ${response.status}`);
    }
  } catch (error) {
    console.log('tosi paha errori!!! 😈☠️');
  }
}

fetchData();
