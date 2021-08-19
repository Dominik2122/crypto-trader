import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {TreeColumnModel} from "src/app/util/tree/ui/models/tree-column.model";

@Injectable()
export class TreeColumnService {
  constructor() {

  }

  getNodes(): Observable<TreeColumnModel> {
    return null
  }
}
