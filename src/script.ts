import { IPerson } from "./models/person.interface.js";
import { getCollection } from "./services/dal.service.js";
import { createElementList } from "./services/element.service.js";

(async () => {

    const { results: people } = await getCollection<IPerson>('people');
    // const result = await getCollection<IPerson>('people');
    // const people = result.results;
    const peopleList = document.querySelector('.people-list') as HTMLDivElement;
    
    peopleList.querySelector(".list-group")?.remove();
    const personList: HTMLDivElement = createElementList(people);
    peopleList.appendChild(personList);
    console.log(people);

})();