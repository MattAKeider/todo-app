export class Item {
    private static incrementId = 0;
    id: number;
    contents: string;
    isSelected = false;

    constructor(contents: string) {
        this.contents = contents;
        Item.incrementId++;
        this.id = Item.incrementId;
    }
}
