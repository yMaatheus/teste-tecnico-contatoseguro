import { Router } from 'express';
import CompanyController from '../controllers/company.controller';
import CompanyService from '../services/company.service';

const companyService = new CompanyService();
const companyController = new CompanyController(companyService);

const router = Router();

router.route('/')
  .post(companyController.create)
  .get(companyController.getAll)

router.route('/:id')
  .put(companyController.updateById)
  .delete(companyController.deleteById);


export default router;