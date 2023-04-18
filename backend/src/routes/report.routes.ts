import { Router } from 'express';
import { createReportMiddleware } from '../middlewares';
import Report from '../database/models/report';
import ReportService from '../services/report.service';
import Controller from '../controllers/controller';

const reportService = new ReportService(Report);
const reportController = new Controller(reportService);

const router = Router();

router.route('/')
  .post(createReportMiddleware, reportController.create)
  .get(reportController.getAll)

router.route('/:id')
  .get(reportController.getById)
  .put(reportController.updateById)
  .delete(reportController.deleteById);

export default router;