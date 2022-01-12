export class SerialComment {

  private _id: number;
  private _author: string;
  private _content: string;
  private _createdAt: Date;

  static nextId: number = 1;

  constructor(
    author: string,
    content: string,
    createdAt: Date,
  ) {
    this._id = SerialComment.nextId;
    this._author = author;
    this._content = content;
    this._createdAt = createdAt;

    SerialComment.nextId++;
  }


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter author
     * @return {string}
     */
	public get author(): string {
		return this._author;
	}

    /**
     * Getter content
     * @return {string}
     */
	public get content(): string {
		return this._content;
	}

    /**
     * Getter createdAt
     * @return {Date}
     */
	public get createdAt(): Date {
		return this._createdAt;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter author
     * @param {string} value
     */
	public set author(value: string) {
		this._author = value;
	}

    /**
     * Setter content
     * @param {string} value
     */
	public set content(value: string) {
		this._content = value;
	}

    /**
     * Setter createdAt
     * @param {Date} value
     */
	public set createdAt(value: Date) {
		this._createdAt = value;
	}

}
