export interface Establishment {
    id: number;
    name: string;
  }
  
  export interface Level {
    id: number;
    name: string;
    establishmentId: number;
  }
  
  export interface Speciality {
    id: number;
    name: string;
    levelId: number;
  }
  
  export interface Module {
    id: number;
    name: string;
    specialityId: number;
  }
  
  export interface Session {
    id: number;
    name: string;
    moduleId: number;
  }
  
  export interface TypeOfResource {
    id: number;
    name: string;
    sessionId: number;
  }
  
  export interface Resource {
    id: number;
    name: string;
    url: string;
    typeOfResourceId: number;
  }
  
  export const data = {
    establishments: [
      { id: 1, name: "Primaire" },
      { id: 2, name: "College" },
      { id: 3, name: "Lycee" },
      { id: 4, name: "CPGE" },
    ] as Establishment[],
  
    levels: [
      { id: 1, name: "Tronc Commun", establishmentId: 3 },
      { id: 2, name: "1 Bac", establishmentId: 3 },
      { id: 3, name: "2 Bac", establishmentId: 3 },
      { id: 4, name: "Level 3", establishmentId: 2 },
    ] as Level[],
  
    speciality: [
      { id: 1, name: "TC Sciences Mathématiques", levelId: 1 },
      { id: 2, name: "TC Lettre", levelId: 1 },
      { id: 3, name: "TC Sciences Expérimentales", levelId: 1 },
      { id: 4, name: "TC Sciences et Technologies Électriques", levelId: 1 },
      { id: 5, name: "TC Sciences et Technologies Mécaniques", levelId: 1 },
      { id: 6, name: "TC Sciences et Technologies Mécaniques EN", levelId: 1 },
      { id: 7, name: "Speciality 3", levelId: 2 },
    ] as Speciality[],
  
    module: [
      { id: 0, name: "TC Sciences Mathématiques", specialityId: 1 },
      { id: 1, name: "Mathématiques", specialityId: 1 },
      { id: 3, name: "Physique et Chimie", specialityId: 1 },
      { id: 4, name: "Sciences de l'ingénieur", specialityId: 1 },
      { id: 5, name: "Histoire Géographie", specialityId: 1 },
      { id: 6, name: "Philosophie", specialityId: 1 },
      { id: 7, name: "Informatique", specialityId: 1 },
      { id: 8, name: "Informatique", specialityId: 2 },
      { id: 9, name: "Module 3", specialityId: 3 },
    ] as Module[],
  
    session: [
      { id: 1, name: "Mathématiques", moduleId: 1 },
      { id: 2, name: "Session 1", moduleId: 1 },
      { id: 3, name: "Session 1", moduleId: 1 },
      { id: 4, name: "Examens Nationaux", moduleId: 1 },
      { id: 5, name: "Session 2", moduleId: 2 },
      { id: 6, name: "Session 3", moduleId: 3 },
    ] as Session[],
  
    typesOfResource: [
      { id: 1, name: "Cours", sessionId: 2 },
      { id: 2, name: "Exercices Corriges", sessionId: 2 },
      { id: 3, name: "Cours", sessionId: 3 },
      { id: 4, name: "Exercices Corriges", sessionId: 3 },
      { id: 5, name: "Examens Nationaux 2024", sessionId: 4 },
    ] as TypeOfResource[],
  
    resource: [
      { id: 1, name: "Resource 1", url: "assets/SAP.pdf", typeOfResourceId: 1 },
      { id: 2, name: "Resource 2", url: "assets/SAP.pdf", typeOfResourceId: 2 },
      { id: 3, name: "Resource 3", url: "assets/SAP.pdf", typeOfResourceId: 3 },
      { id: 4, name: "Resource 4", url: "assets/SAP.pdf", typeOfResourceId: 4 },
      { id: 5, name: "Resource 5", url: "assets/SAP.pdf", typeOfResourceId: 5 },
      { id: 6, name: "Resource 6", url: "assets/SAP.pdf", typeOfResourceId: 1 },
      { id: 7, name: "Resource 7", url: "assets/SAP.pdf", typeOfResourceId: 1 },
      { id: 8, name: "Resource 8", url: "assets/SAP.pdf", typeOfResourceId: 1 },
      { id: 9, name: "Resource 9", url: "assets/SAP.pdf", typeOfResourceId: 1 },
      { id: 10, name: "Resource 10", url: "assets/SAP.pdf", typeOfResourceId: 1 },
      { id: 11, name: "Resource 11", url: "assets/SAP.pdf", typeOfResourceId: 1 },
      { id: 12, name: "Resource 12", url: "assets/SAP.pdf", typeOfResourceId: 1 },
    ] as Resource[],
  };
  