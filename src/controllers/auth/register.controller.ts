import { Request, Response, NextFunction } from 'express';
import bcrypt from "bcrypt";

import { Payload } from '@models/index';

import { findUser, createUser } from '@services/user.service';
import { sign } from '@services/jwt.service';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {

    const { username, password } = req.body

    let user = await findUser(username)

    if (user) {
        return res.status(403).send(`username ${username} already taken`)
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt)

    let newUser = await createUser(username, hashedPassword, [])

    const payload: Payload = {
        userId: newUser.id,
        username: newUser.username,
        permissions: []
    }

    const token = sign(payload)

    res.json({
        username: payload.username,
        permissions: payload.permissions,
        token
    })
    }
    catch(err) {
        next(err)
    }
}