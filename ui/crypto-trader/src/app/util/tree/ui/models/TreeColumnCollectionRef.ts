import {Injectable} from "@angular/core";
import {TreeColumnCollection} from "src/app/util/tree/ui/models/TreeColumnCollection";

@Injectable()
export class TreeColumnCollectionRef {
  treeColumnCollection: TreeColumnCollection;

  setTreeColumnCollection(treeColumnCollection: TreeColumnCollection) {
    this.treeColumnCollection = treeColumnCollection
  }

}
