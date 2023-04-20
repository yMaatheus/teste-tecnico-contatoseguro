import { Router } from 'express';
import { CompanyService } from '../services/company.service';
import { Controller } from '../controllers/controller';
import Company from '../database/models/company';
import { companyCreateMiddleware, companyUpdateMiddleware } from '../middlewares';

const companyService = new CompanyService(Company);
const companyController = new Controller(companyService);

const router = Router();

router.route('/')
  .post(companyCreateMiddleware, companyController.create)
  .get(companyController.getAll)

router.route('/:id')
  .get(companyController.getById)
  .put(companyUpdateMiddleware, companyController.updateById)
  .delete(companyController.deleteById);


export default router;