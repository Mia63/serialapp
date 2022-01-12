import { SerialComment } from './comment.model';
export class Serial {

  private _id: number;
  private _name: string;
  private _releasedAt: Date;
  private _nbOfSeasons: number;
  private _description: string;
  private _critique: string;
  private _photo: string;
  private _comments: Array<SerialComment> = [];

  static nextId: number = 1;

  constructor(
    name: string,
    releasedAt: Date,
    nbOfSeasons: number,
    description: string,
    critique: string,
    photo: string,
  ) {
    this._id = Serial.nextId;
    this._name = name;
    this._releasedAt = releasedAt;
    this._nbOfSeasons = nbOfSeasons;
    this._description = description;
    this._critique = critique;
    this._photo = photo;

    Serial.nextId++;
  }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter releasedAt
     * @return {Date}
     */
	public get releasedAt(): Date {
		return this._releasedAt;
	}

    /**
     * Getter nbOfSeasons
     * @return {number}
     */
	public get nbOfSeasons(): number {
		return this._nbOfSeasons;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter critique
     * @return {string}
     */
	public get critique(): string {
		return this._critique;
	}

    /**
     * Getter photo
     * @return {string}
     */
	public get photo(): string {
		return this._photo;
	}


    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter releasedAt
     * @param {Date} value
     */
	public set releasedAt(value: Date) {
		this._releasedAt = value;
	}

    /**
     * Setter nbOfSeasons
     * @param {number} value
     */
	public set nbOfSeasons(value: number) {
		this._nbOfSeasons = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter critique
     * @param {string} value
     */
	public set critique(value: string) {
		this._critique = value;
	}

    /**
     * Setter photo
     * @param {string} value
     */
	public set photo(value: string) {
		this._photo = value;
	}

  public get comments(): Array<SerialComment> {
    return this._comments;
  }
  public set comments(value: Array<SerialComment>) {
    this._comments = value;
  }

  /**
   * @returns Path to image src
   */
  public src(): string {
    return 'assets/serials/' + this._photo;
  }



}
