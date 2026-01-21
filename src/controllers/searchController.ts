import { Request, Response } from 'express';
import { createMenuOptions } from '../helpers/createMenuObject';
import { Pet } from '../models/pets'

export const search = (req: Request, res: Response) => {

   let query: string = req.query.q as string;

   if (!query) return res.redirect('/'); 

   let list = Pet.getFromName(query);

   res.render('pages/page', {
      menu: createMenuOptions(''),
      list,
      query
   });

}