import { Request, Response } from 'express';
import { createMenuOptions } from '../helpers/createMenuObject';
import { Pet } from '../models/pets'

export const home = (req: Request, res: Response) => {

   const list = Pet.getAll();

   res.render('pages/page', {
      menu: createMenuOptions('all'),
      banner: {
         title: 'Todos os animais',
         background: 'allanimals.jpg'
      },
      list
   });
}

export const dogs = (req: Request, res: Response) => {

   const list = Pet.getFromType('dog');

   res.render('pages/page', {
      menu: createMenuOptions('dog'),
      banner: {
         title: 'Cachorros',
         background: 'banner_dog.jpg'
      },
      list
   });
}

export const cats = (req: Request, res: Response) => {

   const list = Pet.getFromType('cat');

   res.render('pages/page', {
      menu: createMenuOptions('cat'),
      banner: {
         title: 'Gatos',
         background: 'banner_cat.jpg'
      },
      list
   });
}

export const fishes = (req: Request, res: Response) => {

   const list = Pet.getFromType('fish');

   res.render('pages/page', {
      menu: createMenuOptions('fish'),
      banner: {
         title: 'Peixes',
         background: 'banner_fish.jpg'
      },
      list
   });
}

