import express from 'express';
import {getAlluser} from '../controller/Users-controller';

const router = express.Router();

router.get('/', getAlluser);

export default router;