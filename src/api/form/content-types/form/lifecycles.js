const axios = require('axios');

module.exports = {

  // async afterCreate(event, ctx) {

  //   const { data, where, select, populate } = event.params;
  //   const id = data.id;
  //   const image = data.moviePoster;
  //   // console.log(image);
  //   // if(image !== null){
  //     try {
  //       const response = await axios.get(`https://storage.bunnycdn.com/demo715/${id}/`, {
  //         headers: {
  //           'AccessKey': 'fdb484e0-24c0-4769-807754ecf0c0-4888-4b82',
  //           'accept': 'application/json',
  //         },
  //       });
  
  //       // const responseData = JSON.parse(response.data);
  //       // console.log(responseData);

  //       // ctx.send({
  //       //   message: 'Data retrieved successfully',
  //       //   responseData,
  //       // });
  
  //       // Store the responseData in the json attribute of the model
  //     //   params.query = { ...params.query, bunnyCDNResponse: responseData };
  
  //       // Continue with the find operation
  //     } catch (error) {y
  
  //       console.error('Error making BunnyCDN request:', error);
  
  //       // Rethrow the error to be caught and handled by the Strapi framework
  //       throw error;
  //     // }
  //   }
  //   // else{
  //   //     console.log("Error in lifecycle");
  //   // }
  // },
};
