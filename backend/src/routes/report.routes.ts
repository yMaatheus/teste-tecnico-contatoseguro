import { Router } from 'express';
import ReportController from '../controllers/report.controller';
import ReportService from '../services/report.service';
import { createReportMiddleware } from '../middlewares';

const reportService = new ReportService();
const reportController = new ReportController(reportService);

const router = Router();

router.route('/')
  .post(createReportMiddleware, reportController.create)
  .get(reportController.getAll)

router.route('/:id')
  .put(reportController.updateById)
  .delete(reportController.deleteById);

export default router;