import { BookType } from '../app/Models/bookType';
import { BookSubType } from '../app/Models/bookSubType';

export class Book {
    id: number;
    urlPic: string = 'http://books.ua/Product/GetImage?code_wares=33755';
    name: string;
    author: string;
    price: number;
    currency: string;
    countPage: number;
    language: string;
    description: string;
    bookType: BookType;
    bookSubType: BookSubType
}
