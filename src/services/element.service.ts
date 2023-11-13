import { IFilm } from '../models/film.interface';
import { IPerson } from "../models/person.interface";
import { IPlanet } from '../models/planet.interface';
import { IStarship } from "../models/starship.interface";
import { IVehicle } from "../models/vehicle.interface";
import { getIdFromModel } from './helper.service.js';

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
    btn.innerText = 'name' in element ? element.name : element.title;
    btn.id = getIdFromModel(element);
    btn.addEventListener('click', function () {
        this.parentElement?.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    })

    
    const iconContainer = document.createElement('div');
    btn.style.display = 'flex';
    btn.style.justifyContent = 'space-between';
    btn.appendChild(iconContainer);

    if('eye_color' in element) {
        // <i class="bi bi-eye-fill"></i>
        const icon = document.createElement('i');
        icon.classList.add('bi');
        icon.classList.add('bi-eye-fill');
        icon.style.color = element.eye_color;
        iconContainer.appendChild(icon);
    }

    if('gender' in element) {
        const icon = document.createElement('i');
        icon.classList.add('bi');
        icon.classList.add(element.gender === 'male' ? 'bi-person-standing': element.gender === 'female' ? 'bi-person-standing-dress' : 'bi-robot');
        iconContainer.appendChild(icon);
    }




    return btn;
}

export function createPlanetElement(planet: IPlanet) {
    const div = document.createElement('div');
    div.classList.add('homeworld-name');
    // div.innerText = planet.name;
    div.appendChild(document.createTextNode(planet.name));
    return div;
}
