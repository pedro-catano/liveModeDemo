using {bookshop as my} from '../db/model';

service BookshopService {
    entity Books as projection on my.Books;
}
