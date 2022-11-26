# HIV Tools Resistance

Tools to support the interpretation of HIV resistance genotyping

## Demo

https://hivtoolsresistance.com/ 

## About the project

This project is developed between a French doctor Sandrine PEUGNY and a French developer William ARNOUX.

### Build with

* [![Angular][Angular.io]][Angular-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/hivtoolsresistance/hivtoolsresistance.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run
   ```sh
   ng serve
   ```
   
## Datas

The data of the application comes from the site: https://hivfrenchresistance.org/. They have been copied in the following JSON files: 
* hivtoolsresistance/src/assets/json/hivfrenchresistance1.json
* hivtoolsresistance/src/assets/json/hivfrenchresistance1.json

### How ?

We store the version and date of the last update: 
```json
"informations": {
    "version":33,
    "date": "October 2022"
  },
```
All mutations are store like : 
```json
{
   "name": "M41",
   "letters": "L" or "A/C/D/E/G/H/I/L/N/S/V/Y/F "
}
```




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com

