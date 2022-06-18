const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController = require('../controllers/weatherController')
const memeController = require('../controllers/memeController')



router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getByDistrict", CowinController.getDistrictIdAndDate)

router.get("/getTemperature", weatherController.getTemperature )

router.get("/allMemes", memeController.allMemes)
router.post("/memes", memeController.memes)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;