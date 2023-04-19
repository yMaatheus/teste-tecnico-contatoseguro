import { Router } from 'express';
import Report from '../database/models/report';
import { ReportService } from '../services/report.service';
import { Controller } from '../controllers/controller';
import { reportValidationMiddleware } from '../middlewares';

const reportService = new ReportService(Report);
const reportController = new Controller(reportService);

const router = Router();

router.route('/')
  .post(reportValidationMiddleware, reportController.create)
  .get(reportController.getAll)

router.route('/:id')
  .get(reportController.getById)
  .put(reportValidationMiddleware, reportController.updateById)
  .delete(reportController.deleteById);

export default router;