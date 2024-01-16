// seasos 2 ep -1

const cart =["sheo","pant","kutha"]

api.createOrder(cart,function(){
    
      api.proeedToPayment(function(){


          api.showOrderSummery(function(){

                api.updateWallet()
                 
          })


      })

})







