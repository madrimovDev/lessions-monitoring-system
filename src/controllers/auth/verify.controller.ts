import { NextFunction, Request,  Response } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        
    }
    catch(err) {
        next(err)
    }
}