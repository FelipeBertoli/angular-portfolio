import { Component } from '@angular/core';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.css']
})
export class AboutSkillsComponent {
    javaBadge:string = 'https://img.shields.io/badge/Java-red?style=for-the-badge&logo=openjdk&logoColor=white"';
    htmlBadge:string = 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white';
    cssBadge:string = 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white';
    jsBadge:string = 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'
    tsBadge:string = 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'
    sqlBadge:string = 'https://img.shields.io/badge/MySQL-black?style=for-the-badge&logo=mysql&logoColor=white'
    springBadge:string = 'https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white'
    angularBadge:string = 'https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white'
    nodeBadge:string = 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'
    awsBadge:string = 'https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white'
    oracleBadge:string = 'https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=black'
}
