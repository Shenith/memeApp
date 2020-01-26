loadScreen = async () => {
    return fetch('https://www.ideabackery.com/memes/index.php/get_memes/1')
      .then((response) => {
          console.log('1',response);
          response.json();
        })
      .then((responseJson) => {
          console.log('2',responseJson);
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }