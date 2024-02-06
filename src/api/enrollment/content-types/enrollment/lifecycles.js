

const Razorpay = require('razorpay');
const axios = require('axios');
module.exports = {
    async afterCreate( event ) {
    
        // Fetch payment details from Razorpay using paymentId
        // Example of fetching details using your Razorpay instance (instance.payments.fetch)
        try {
          const { result } = event;
          const paymentId = result.payment_id; // Assuming the field name is paymentId in your model
          const emailId = result.EmailId;
          console.log(paymentId);
          const instance = new Razorpay({ key_id: 'rzp_test_CqbzQKAn3Mm2Ol', key_secret: 'G4ueEdy441wU3S039jtx7Rz4' })
    
          // instance.payments.fetch(paymentId)
          const paymentDetails = await instance.payments.fetch(paymentId);
          console.log(paymentDetails);
          
          // Extract attributes from the payment response
          const { id, amount, method, status /* ...other attributes you need */ } = paymentDetails;
    
          try {
            const updatedAmount = Number(amount)/100;
            // Update the Strapi model with the fetched payment details
            // const updatedData = await strapi.service('api::enrollment.enrollment').create({
            //   data:{
            //     // payment_id:id,
            //     amount:updatedAmount,
            //     payment_status:status,
            //   }
            // });
            var updatedStatus = ''; 
            if(status === 'authorized'){
                 updatedStatus = 'success'
            }else{
              updatedStatus = 'failed'
            }
            const entry = await strapi.db.query('api::enrollment.enrollment').update({
              where: { EmailId: emailId },
              data: {
                amount: updatedAmount,
                payment_status:updatedStatus,
              },
            });
        } catch (error) {
          console.error('Error fetching payment details from Razorpay:', error);
          // Handle errors here
        }
      }
      catch (error) {
        console.error('Error fetching payment details from Razorpay:', error);
        // Handle errors here
      }
},
};