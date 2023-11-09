import { IFilm } from '../models/film.interface';
import { IPerson } from "../models/person.interface";
import { IStarship } from "../models/starship.interface";
import { IVehicle } from "../models/vehicle.interface";

export function createElementList(elements: IPerson[] | IStarship[] | IVehicle[] | IFilm[]) {
    const div = document.createElement('div');
    div.classList.add('list-group');
    elements.forEach((el: any) => {
        const btn = createButtonElement(el);
        div.appendChild(btn);
    })
    return div;
}


export function createButtonElement(element: IPerson | IStarship | IVehicle | IFilm) {
    const btn = document.createElement('button');
    btn.classList.add('list-group-item');
    btn.classList.add('list-group-item-action');
    if('name' in element)  btn.innerText = element.name
    else btn.innerText = element.title
    btn.addEventListener('click', function () {
        this.parentElement?.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    })

    

    return btn;
}