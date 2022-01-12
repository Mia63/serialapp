import { Injectable } from '@angular/core';
import { Serial } from '../../models/serial.model';
import { SerialComment } from '../../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class SerialService {
  serials: Array<Serial> = [];

  constructor() {
    this.serials.push(
      new Serial(
        'Fondation',
        new Date('24 sep 2021'),
        1,
        "Foundation ou Fondation au Québec est une série télévisée américaine créée par David S. Goyer et Josh Friedman et dont la diffusion a débuté le 24 septembre 2021 sur Apple TV+. La série est basée sur le Cycle de Fondation d'Isaac Asimov. Après les dix premiers épisodes, une deuxième saison est en préparation.",
        '3.3',
        'fondation.jpg',
      )
    );
    this.serials.push(
      new Serial(
        'The Witcher',
        new Date('20 dec 2019'),
        2,
        "Hexer Geralt reprend la mission inachevée d'un autre sorceleur dans un royaume traqué par une bête féroce. Yennefer se forge un avenir magique au prix d'un terrible sacrifice.",
        '4.3',
        'witcher.jpg'
      )
    );
    this.serials.push(
      new Serial(
        'Dark Mirror',
        new Date('4 dec 2011'),
        5,
        'Chaque épisode a un casting différent, un décor différent et une réalité différente, mais ils traitent tous de la façon dont nous vivons maintenant, et de la façon dont nous pourrions vivre dans dix minutes si nous sommes maladroits.',
        '4.3',
        'darkmirror.jpg'
      )
    );
    this.serials.push(
      new Serial(
        'Chernobyl',
        new Date('6 may 2019'),
        1,
        "En 1986, dans l'ex-Union soviétique, l'explosion à la centrale nucléaire de Tchernobyl provoque un drame terrible, connu pour être la pire catastrophe causée par une erreur humaine.",
        '4.8',
        'chernobyl.jpg'
      )
    );
    this.serials.push(
      new Serial(
        'Game of Thrones',
        new Date('17 apr 2011'),
        8,
        "Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages.",
        '4.7',
        'game-of-thrones.jpg'
      )
    );
    this.serials.push(
      new Serial(
        'Mr Robot',
        new Date('24 jun 2015'),
        4,
        "Elliot Alderson est un jeune informaticien vivant à New York, qui travaille en tant qu'ingénieur en sécurité informatique pour Allsafe Security. Celui-ci luttant constamment contre un trouble d'anxiété sociale et de dépression.",
        '4.9',
        'mr-robot.jpg'
      )
    );

    //Adding comment for testing
    const comm = new SerialComment('Masha', "Je suis un commentaire", new Date());
    this.serials[0].comments.push(comm);
  }


  /**
   * Find a Serial by Id
   * @param searchId number
   * @returns Serial | undefined
   */
  findOneById(searchId: number): Serial | undefined {
    let result;
    this.serials.forEach((serial: Serial): void => {
        if(serial.id === searchId) result = serial;
    });
    return result;
  }

  /**
   * To Delete One Serial
   * @param id
   */
  deleteOneById(id:number): void {
    this.serials = this.serials.filter((serial: Serial) => serial.id !== id);
  }

  /**
   * Adds a new Serial
   * @param serial
   */
  addNewSerial(serial: Serial) {
    this.serials.push(serial);
  }

  editSerial(editedSerial: Serial) {
    this.serials.forEach((serial: Serial): void => {
      if(serial.id === editedSerial.id) serial = editedSerial;
  });
  }
}
