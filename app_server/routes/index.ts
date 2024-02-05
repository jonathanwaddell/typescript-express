import express from 'express';
import MainCtrl from '../controllers/main';

const router = express.Router();
const mainCtrl = new MainCtrl();

/* GET home page. */
router.get('/', mainCtrl.index);

export default router;
