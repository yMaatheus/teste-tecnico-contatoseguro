import { Router } from 'express';
import Report from '../database/models/report';
import { ReportService } from '../services/report.service';
import { Controller } from '../controllers/controller';
import { reportUpdateMiddleware, reportCreateMiddleware } from '../middlewares';

const reportService = new ReportService(Report);
const reportController = new Controller(reportService);

const router = Router();

router.route('/')
  .post(reportCreateMiddleware, reportController.create)
  .get(reportController.getAll)

router.route('/:id')
  .get(reportController.getById)
  .put(reportUpdateMiddleware, reportController.updateById)
  .delete(reportController.deleteById);

export default router;