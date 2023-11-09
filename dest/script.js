var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCollection } from "./services/dal.service.js";
import { createElementList } from "./services/element.service.js";
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { results: people } = yield getCollection('people');
    // const result = await getCollection<IPerson>('people');
    // const people = result.results;
    const peopleList = document.querySelector('.people-list');
    (_a = peopleList.querySelector(".list-group")) === null || _a === void 0 ? void 0 : _a.remove();
    const personList = createElementList(people);
    peopleList.appendChild(personList);
    console.log(people);
}))();
