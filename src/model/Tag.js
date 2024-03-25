/**
 * Class model used primarlily as a tag for the test and to group them
 */
export class Tag {
    /**
     * constructor for the class Class
     * @param {String} name name of the class
     * @param {Number} id id of the class
     * @param {String} color color of the class
     */
    constructor(name, id, color) {
        this.name = name;
        this.id = id;
        //TODO: Figure out how to make the color respond with the css.
        this.color = color;
    }
}