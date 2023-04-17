import { Router } from 'express';
import CompanyController from '../controllers/company.controller';
import CompanyService from '../services/company.service';
import { createCompanyMiddleware } from '../middlewares';

const companyService = new CompanyService();
const companyController = new CompanyController(companyService);

const router = Router();

router.route('/')
  .post(createCompanyMiddleware, companyController.create)
  .get(companyController.getAll)

router.route('/:id')
  .put(companyController.updateById)
  .delete(companyController.deleteById);


export default router;