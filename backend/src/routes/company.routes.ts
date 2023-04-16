import { Router } from 'express';
import CompanyController from '../controllers/company.controller';

const companyController = new CompanyController();

const router = Router();

router.route('/')
  .post(companyController.create)
  .get(companyController.getAll)

router.route('/:id')
  .put(companyController.updateById)
  .delete(companyController.deleteById);


export default router;