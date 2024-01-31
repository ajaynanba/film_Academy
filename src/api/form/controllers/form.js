'use strict';

/**
 * form controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::form.form', ({strapi}) => ({

    // async create(ctx){
    //     const{data} = ctx.request.body;
    //     const files = ctx.request.files;
    //     const parseData = JSON.parse(data);

    //     const entry = await strapi.service('api::form.form').create({
    //         data:{
    //             parseData
    //         },
    //         file:{
    //             file:files[files.MoviePoster]
    //         },
    //     })        
    // }
    
}));
