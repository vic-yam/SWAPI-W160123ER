import { IFilm } from "../models/film.interface";
import { IPerson } from "../models/person.interface";
import { IStarship } from "../models/starship.interface";
import { IVehicle } from "../models/vehicle.interface";

export function getIdFromModel(model: IPerson | IVehicle | IStarship | IFilm): string {
   return model.url.split('/').filter(x => !!x).slice(-1)[0]
}


