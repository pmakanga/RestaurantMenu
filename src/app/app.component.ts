import { Component } from '@angular/core';
import data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Restaurant Menu';

  mainMenus: any;
  data: any;


  constructor() {
    this.mainMenus = data;
   console.log(this.mainMenus);

    this.data = {};
    this.data.isAllSelected = false;
    this.data.isAllCollapsed = false;

    this.data.ParentChildchecklist = [
      {
        id: 1, name: 'Salad', isSelected: false, isClosed: false,
        choices: [
          {
            name: 'Santa Fe', isSelected: false, isClosed: false,
          },
          {
            name: 'Greek', isSelected: false, isClosed: false,
          },
          {
            name: 'Asian', isSelected: false, isClosed: false,
          }
        ],
        related: [
        {
            name: 'Dressing', isSelected: false, isClosed: false,
            choices: [
               {
                  name: 'Italian', isSelected: false, isClosed: false,
               },
               {
                  name: 'Blue Cheese', isSelected: false, isClosed: false,
               },
               {
                  name: 'Ranch', isSelected: false, isClosed: false,
               }
            ]
         },
         {
          name: 'Bread', isSelected: false, isClosed: false,
          choices: [
             {
                name: 'Italian', isSelected: false, isClosed: false,
             },
             {
                name: 'Flat', isSelected: false, isClosed: false,
             },
             {
                name: 'Sourdough', isSelected: false, isClosed: false,
             }
          ]
       }
        ]
      },
      {
        id: 2, name: 'Entree', isSelected: false, isClosed: false,
        choices: [
          {
            name: 'Steak', isSelected: false, isClosed: false,
          },
          {
            name: 'Salmon', isSelected: false, isClosed: false,
          },
          {
            name: 'Rice', isSelected: false, isClosed: false,
          }
        ],
        related: [
        ]
      },
      {
        id: 3, name: 'Soup', isSelected: false, isClosed: false,
        choices: [
          {
            name: 'Minestrone', isSelected: false, isClosed: false,
          },
          {
            name: 'Hot and sour', isSelected: false, isClosed: false,
          },
          {
            name: 'Miso', isSelected: false, isClosed: false,
          }
        ],
        related: [
          {
            name: 'Bread', isSelected: false, isClosed: false,
            choices: [
               {
                  'name': 'Breadsticks', isSelected: false, isClosed: false,
               }
            ]
         }
        ]
      }
    ];

    console.log(this.data.ParentChildchecklist);


  }

  parentCheck(parentObj) {
    for (let i = 0; i < parentObj.choices.length; i ++) {
      parentObj.choices[i].isSelected = parentObj.isSelected;
    }
  }

  childCheck(parentObj, childObj) {
    parentObj.isSelected = childObj.every(function (itemChild: any) {
      return itemChild.isSelected === false;
    });
  }

  selectUnselectAll(obj) {
    // obj.isAllSelected = !obj.isAllSelected;
    // for (let i = 0; i < obj.ParentChildchecklist.length; i++) {
    //   obj.ParentChildchecklist[i].isSelected = obj.isAllSelected;
    //   for (let j = 0; j < obj.ParentChildchecklist[i].choices.length; j++) {
    //     obj.ParentChildchecklist[i].choices[j].isSelected = obj.isAllSelected;
    //   }
    // }
  }

  expandCollapse(obj) {
    obj.isClosed = !obj.isClosed;
  }

  expandCollapseAll(obj) {
    // for (let i = 0; i < obj.ParentChildchecklist.length; i++) {
    //   obj.ParentChildchecklist[i].isClosed = !obj.isAllCollapsed;
    // }
    // obj.isAllCollapsed = !obj.isAllCollapsed;
  }

  stringify(obj) {
    return JSON.stringify(obj);
  }

}



