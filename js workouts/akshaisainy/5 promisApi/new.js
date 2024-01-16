// promise.all



// when all promises will success

                // p1 = new Promise (function(resolve,reject){
                //     setTimeout(function(){
                //         resolve("p1 success")
                //     },2000);
                // })
                // p2 = new Promise (function(resolve,reject){
                //     setTimeout(function(){
                //         resolve("p2 success")
                //     },1000);
                // })
                // p3 = new Promise (function(resolve,reject){
                //     setTimeout(function(){
                //         resolve("p3 success")
                //     },6000);
                // })

                // Promise.all([p1,p2,p3]).then(res =>{
                //     console.log(res);
                // })


// when anything is failed


                    // p1 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         resolve("p1 success")
                    //     },2000);
                    // })
                    // p2 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         resolve("p2 success")
                    //     },1000);
                    // })
                    // p3 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         reject("p3 failed")
                    //     },6000);
                    // })

                    // Promise.all([p1,p2,p3]).then(res =>{
                    //     console.log(res);
                    // })
                    // .catch(err =>{
                    //     console.error(err);
                    // })


// promise.allSettled


                    // p1 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         resolve("p1 success")
                    //     },2000);
                    // })
                    // p2 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         resolve("p2 success")
                    //     },1000);
                    // })
                    // p3 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         reject("p3 failed")
                    //     },6000);
                    // })

                    // Promise.allSettled([p1,p2,p3]).then(res =>{
                    //     console.log(res);
                    // })
                    // .catch(err =>{
                    //     console.error(err);
                    // })


// promise.race


// when fisrt thing is success (based on timing function)

                        // p1 = new Promise (function(resolve,reject){
                        //     setTimeout(function(){
                        //         resolve("p1 success")
                        //     },2000);
                        // })
                        // p2 = new Promise (function(resolve,reject){
                        //     setTimeout(function(){
                        //         resolve("p2 success")
                        //     },1000);
                        // })
                        // p3 = new Promise (function(resolve,reject){
                        //     setTimeout(function(){
                        //         reject("p3 failed")
                        //     },6000);
                        // })

                        // Promise.race([p1,p2,p3]).then(res =>{
                        //     console.log(res);
                        // })
                        // .catch(err =>{
                        //     console.error(err);
                        // })


// when  thing is success (based on timing function)

                        // p1 = new Promise (function(resolve,reject){
                        //     setTimeout(function(){
                        //         resolve("p1 success")
                        //     },2000);
                        // })
                        // p2 = new Promise (function(resolve,reject){
                        //     setTimeout(function(){
                        //         reject("p2 failed")
                        //     },1000);
                        // })
                        // p3 = new Promise (function(resolve,reject){
                        //     setTimeout(function(){
                        //         resolve("p2 success")
                        //     },6000);
                        // })

                        // Promise.race([p1,p2,p3]).then(res =>{
                        //     console.log(res);
                        // })
                        // .catch(err =>{
                        //     console.error(err);
                        // })

// when  when it all become fail

                        // p1 = new Promise (function(resolve,reject){
                        //     setTimeout(function(){
                        //         reject("p1 failed")
                        //     },2000);
                        // })
                        // p2 = new Promise (function(resolve,reject){
                        //     setTimeout(function(){
                        //         reject("p2 failed")
                        //     },1000);
                        // })
                        // p3 = new Promise (function(resolve,reject){
                        //     setTimeout(function(){
                        //         reject("p3 failed")
                        //     },6000);
                        // })

                        // Promise.race([p1,p2,p3]).then(res =>{
                        //     console.log(res);
                        // })
                        // .catch(err =>{
                        //     console.error(err);
                        // })

// promise.any


                    // p1 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         resolve("p1 success")
                    //     },2000);
                    // })
                    // p2 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         resolve("p2 success")
                    //     },1000);
                    // })
                    // p3 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         reject("p3 failed")
                    //     },6000);
                    // })

                    // Promise.any([p1,p2,p3]).then(res =>{
                    //     console.log(res);
                    // })
                    // .catch(err =>{
                    //     console.error(err);
                    // })





                    // p1 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         resolve("p1 success")
                    //     },2000);
                    // })
                    // p2 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         reject("p2 failed")
                    //     },1000);
                    // })
                    // p3 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         resolve("p3 success")
                    //     },6000);
                    // })

                    // Promise.any([p1,p2,p3]).then(res =>{
                    //     console.log(res);
                    // })
                    // .catch(err =>{
                    //     console.error(err);
                    // })





                    // p1 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         reject("p1 failed")
                    //     },2000);
                    // })
                    // p2 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         reject("p2 failed")
                    //     },1000);
                    // })
                    // p3 = new Promise (function(resolve,reject){
                    //     setTimeout(function(){
                    //         resolve("p3 success")
                    //     },6000);
                    // })

                    // Promise.any([p1,p2,p3]).then(res =>{
                    //     console.log(res);
                    // })
                    // .catch(err =>{
                    //     console.error(err);
                    // })


// when all of it error


                        // p1 = new Promise (function(resolve,reject){
                        //     setTimeout(function(){
                        //         reject("p1 failed")
                        //     },2000);
                        // })
                        // p2 = new Promise (function(resolve,reject){
                        //     setTimeout(function(){
                        //         reject("p2 failed")
                        //     },1000);
                        // })
                        // p3 = new Promise (function(resolve,reject){
                        //     setTimeout(function(){
                        //         reject("p3 failed")
                        //     },6000);
                        // })

                        // Promise.any([p1,p2,p3]).then(res =>{
                        //     console.log(res);
                        // })
                        // .catch(err =>{
                        //     console.error(err);
                        //     console.log(err.errors);
                        // })