export class Item {
    private static id = 0;
    objectID: number;
    contents: string;
    isSelected = false;

    constructor(contents: string) {
        Item.id++;
        this.objectID = Item.id;
        this.contents = contents;
    }
}
