import { Request, Response } from 'express'
import { System } from '../models/system.model'
import { Visitor } from '../models/visitor.model'
import { IPlanet } from '../models/planet.model'


export const getSystems = async (req: Request, res: Response): Promise<void> => {
  try {
    const systems = await System.find()
    res.json(systems)
  } catch (err) {
    res.status(500).send({ err: 'Failed to get systems' })
  }
}

// Find All the Visitors in a System (Subdocuments)
export const getVisitorsInSystem = async (req: Request, res: Response): Promise<void> => {
  try {
    const system = await System.findById(req.params.id).populate<{ planets: IPlanet[] }>('planets')
    if (!system) {
      res.status(404).send('System not found')
      return
    }

    const planetIds = system.planets.map(planet => planet._id)

    const visitors = await Visitor.find({ visitedPlanets: { $in: planetIds } })
    res.json(visitors)
  } catch (error) {
    console.error(error)
    res.status(500).send({ error: 'Failed to get visitors' })
  }
}
