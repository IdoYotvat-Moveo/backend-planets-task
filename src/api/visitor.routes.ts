import express from 'express'
import { getHomePlanetSystemStar, getVisitedPlanets, getVisitors } from '../controllers/visitor.controller'


export const visitorRoutes = express.Router()

visitorRoutes.get('/', getVisitors)
visitorRoutes.get('/:id/visited-planets', getVisitedPlanets)
visitorRoutes.get('/:id/home-planet-system-star', getHomePlanetSystemStar)