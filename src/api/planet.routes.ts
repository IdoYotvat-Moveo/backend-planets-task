import express from 'express'
import { getPlanetSystemAndVisitors, getPlanets, getVisitorsOnPlanet } from '../controllers/planet.controller'

export const planetRoutes = express.Router()

planetRoutes.get('/', getPlanets)
planetRoutes.get('/:id/system-and-visitors', getPlanetSystemAndVisitors)
planetRoutes.get('/:id/visitors', getVisitorsOnPlanet)
