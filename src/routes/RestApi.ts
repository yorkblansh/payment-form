import { Router } from 'express';
import { PaymentForm_Controller } from '../controllers/home_page.controller';

export const WEBrouter = Router();

WEBrouter.get('/', PaymentForm_Controller.show);
