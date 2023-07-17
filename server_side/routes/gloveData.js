import express from 'express'

import * as gloveDataController from '../controllers/gloveData.js'


const router = express.Router()

router.get('/getMPU_1_data', gloveDataController.getMPU_1_data)
router.get('/getMPU_2_data', gloveDataController.getMPU_2_data)
router.get('/getFingers_data', gloveDataController.getFingers_data)

export default router;