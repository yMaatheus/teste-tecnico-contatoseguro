import { Router } from 'express';
import { CompanyService } from '../services/company.service';
import { createCompanyMiddleware } from '../middlewares';
import { Controller } from '../controllers/controller';
import Company from '../database/models/company';

const companyService = new CompanyService(Company);
const companyController = new Controller(companyService);

const router = Router();

router.route('/')
  .post(createCompanyMiddleware, companyController.create)
  .get(companyController.getAll)

router.route('/:id')
  .get(companyController.getById)
  .put(companyController.updateById)
  .delete(companyController.deleteById);


export default router;