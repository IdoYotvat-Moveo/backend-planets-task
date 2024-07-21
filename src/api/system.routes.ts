import express from 'express'
import { getSystems, getVisitorsInSystem } from '../controllers/system.controller'

export const systemRoutes = express.Router()

systemRoutes.get('/', getSystems)
systemRoutes.get('/:id/visitors', getVisitorsInSystem)