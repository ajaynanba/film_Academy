// "use strict"

// const axios = require("axios")
// const { ApplicationError } = require("@strapi/utils").errors

// module.exports = {
//   init({ api_key, storage_zone, pull_zone }) {
//     if (!api_key || !storage_zone || !pull_zone) {
//       throw new ApplicationError("BUNNY_API_KEY, BUNNY_STORAGE_ZONE or BUNNY_PULL_ZONE can't be null or undefined.")
//     }

//     const bunny_api = axios.create({
//       baseURL: `https://storage.bunnycdn.com/${storage_zone}/`,  
//       timeout: 0,
//       maxBodyLength: Infinity,
//       headers: {
//         AccessKey: api_key,
//         "content-type": "application/octet-stream",
//       },
//     })

//     const upload = (file) =>
//       new Promise(async (resolve, reject) => {
//         const data = file.stream || Buffer.from(file.buffer, "binary")
//         const path = file.alternativeText;
//         const caption = file.caption;
       
//           try {
//             // console.log(file);
           
//             const response = await bunny_api.put(`${path}/${caption}/${file.hash}${file.ext}`, data)
  
//             // console.log(response);
//             if (response.data.HttpCode !== 201) {
//               reject(new Error(`Error uploading to Bunny.net: ${error.message}`))
//             }
//             file.url = `${pull_zone}/${path}/${caption}/${file.hash}${file.ext}`
//             resolve()
  
            
//             if(caption === 'MoviePoster' || caption === 'video' || caption === 'Thumbnail' ){
//               // try {
//                 const apiUrl = 'http://localhost:1337'
//                if(caption === 'MoviePoster'){
//                 const response = await axios.put(
//                  ` ${apiUrl}/api/forms/${path}`,
//                   {
//                     data: {
//                       posterUrl: file.url,
//                     },
//                   },
//                   {
//                     headers: {
//                       'Content-Type': 'application/json',
//                     },
//                   }
//                 );
//                }else if(caption === 'video'){
//                 const response = await axios.put(
//                  ` ${apiUrl}/api/forms/${path}`,
//                   {
//                     data: {
//                       movieUrl: file.url,
//                     },
//                   },
//                   {
//                     headers: {
//                       'Content-Type': 'application/json',
//                     },
//                   }
//                 );
//                }else if(caption === 'Thumbnail'){
                
//                   const response = await axios.put(
//                    ` ${apiUrl}/api/forms/${path}`,
//                     {
//                       data: {
//                         thumbnailUrl: file.url,
//                       },
//                     },
//                     {
//                       headers: {
//                         'Content-Type': 'application/json',
//                       },
//                     }
//                   );
                 
//                }
            
//                 console.log('Updated forms:', response.data);
//               // } catch (error) {
//               //   console.error('Error updating forms:', error.message);
//               // }
    
    
//               // console.log(file.url);
//             }
//            } catch (error) {
//               reject(new Error(`Error uploading to Bunny.net: ${error.message}`))
//             }
//       })

//     return {
//       upload(file) {
//         return upload(file)
//       },
//       uploadStream(file) {
//         return upload(file)
//       },
//       delete: async (file) => {
//         return new Promise(async (resolve, reject) => {
//           try {
//             const response = await bunny_api.delete(`${file.hash}${file.ext}`)

//             if (response.data.HttpCode !== 200) {
//               console.error("Soft Error: Failed to delete file; has it already been deleted?", response.data)
//               resolve()
//             }

//             resolve()
//           } catch (error) {
//             console.error("Soft Error: Failed to delete file; has it already been deleted?", error.message)
//             resolve()
//           }
//         })
//       },
//     }
//   },
// }