export { fetchSearch };

const fetchSearch = imageName => {
  const parameters = new URLSearchParams({
    key: '43312748-d2770da7ff63c643db495a6a3',
    q: imageName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${parameters}`, {
    header: {
      'Access-Control-Allow-Origin': 'https://pixabay.com',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(obj => {
      return obj.hits;
    })
    .catch(error => console.log(error));
};
