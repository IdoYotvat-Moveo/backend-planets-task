import { Request, Response } from 'express'
import { Visitor } from '../models/visitor.model'


export const getVisitors = async (req: Request, res: Response): Promise<void> => {
  try {
    const visitors = await Visitor.find()
    res.json(visitors)
  } catch (err) {
    res.status(500).send({ err: 'Failed to get visitors' })
  }
}

// Find a Visitor’s List of Visited Planets
export const getVisitedPlanets = async (req: Request, res: Response) => {
  try {
    const visitor = await Visitor.findById(req.params.id).populate('visitedPlanets')
    if (!visitor) return res.status(404).send('Visitor not found')
    res.send(visitor.visitedPlanets)
  } catch (error) {
    res.status(500).send(error)
  }
}

// Find the Name of the Star in the System of a Visitor’s Home Planet
export const getHomePlanetSystemStar = async (req: Request, res: Response) => {
  try {
    const visitor = await Visitor.findById(req.params.id).populate({
      path: 'homePlanet',
      populate: {
        path: 'system',
        select: 'starName',
      },
    })
    if (!visitor || !visitor.homePlanet) return res.status(404).send('Visitor or Home Planet not found')
    res.send((visitor.homePlanet as any).system.starName)
  } catch (error) {
    res.status(500).send(error)
  }
}



