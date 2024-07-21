import { Request, Response } from 'express'
import { Planet } from '../models/planet.model'
import { Visitor } from '../models/visitor.model'


export const getPlanets = async (req: Request, res: Response): Promise<void> => {
  try {
    const planets = await Planet.find()
    res.json(planets)
  } catch (err) {
    res.status(500).send({ err: 'Failed to get planets' })
  }
}

// Find a Planet’s System’s Star Name as well as its Visitors
export const getPlanetSystemAndVisitors = async (req: Request, res: Response) => {
  try {
    const planet = await Planet.findById(req.params.id)
      .populate('system', 'starName')
      .populate('visitors')
    if (!planet) return res.status(404).send('Planet not found')
    res.send({
      starName: (planet.system as any).starName,
      visitors: planet.visitors,
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

export const getVisitorsOnPlanet = async (req: Request, res: Response) => {
  try {
    const visitors = await Visitor.find({ visitedPlanets: req.params.id })
    res.send(visitors)
  } catch (error) {
    res.status(500).send(error)
  }
}
