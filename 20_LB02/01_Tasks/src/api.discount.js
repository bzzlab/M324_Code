const regular = require("./regular.discount");//??
const special = require("./special.discount");//??

//Export API
module.exports = app => {//??
    //welcome message
    /**
     *  /api/welcome: welcome message
     */
    app.get('/api/welcome', (req, res) => {
        res.status(200).json({
            message: "Welcome to the discount calculator!",
            status: 'success'
        });
    });

    //!!app.get('/api/discount/regular/:price&:age', (req, res) => {
    app.get('/api/discount/regular/:price&:age', (req, res) => {//??
        let price = req.params.price;//??
        let age = req.params.age;//??
        res.status(200).json({//??
            message: regular.regularDiscount(price,age),//??
            status: 'success'//??
        });//??
    });

    app.get('/api/discount/code/:price', (req, res) => {//??
        let price = req.params.price;//??
        res.status(200).json({//??
            message: special.specialDiscount(price,1),//??
            status: 'success'//??
        });//??
    });

    app.get('/api/discount/senior/:price', (req, res) => {//??
        let price = req.params.price;//??
        res.status(200).json({//??
            message: special.specialDiscount(price,2),//??
            status: 'success'//??
        });//??
    });

    app.get('/api/discount/student/:price', (req, res) => {//??
        let price = req.params.price;//??
        res.status(200).json({//??
            message: special.specialDiscount(price,3),//??
            status: 'success'//??
        });//??
    });
}//??
