// ============================================================
//  PROJECT DATA — edit this file to manage your portfolio
// ============================================================

const PROJECTS = [
  {
    id: "p01",
    titleOverride: "Couch Cup 26 (Official Video)",
    type: "DIRECTOR · DP",
    thumb: "https://img.youtube.com/vi/cqaneOCPUG0/maxresdefault.jpg",
    platform: "youtube",
    embed: "cqaneOCPUG0",
    description: "Role: Director, DP",
    related: ["p02", "p03", "p04"]
  },
  {
    id: "p02",
    titleOverride: "Fantom - Devojka sa tužnim očima (Official Video)",
    type: "DP",
    thumb: "https://img.youtube.com/vi/Mhnuxkgok60/maxresdefault.jpg",
    platform: "youtube",
    embed: "Mhnuxkgok60",
    description: "Role: DP",
    related: ["p01", "p03", "p04"]
  },
  {
    id: "p03",
    titleOverride: "lockddd | Park The Bus DJ Set",
    type: "DP · VIDEO EDITOR",
    thumb: "../lockddd DJ Set Thumbnail.png",
    platform: "youtube",
    embed: "f5gPtj8XD10",
    description: "Role: DP, Video Editor",
    related: ["p01", "p02", "p04"]
  },
  {
    id: "p04",
    titleOverride: "Femme Affair Summer Season DJ Set",
    type: "CAMERA · VIDEO EDITOR · COLORIST",
    thumb: "https://img.youtube.com/vi/fNS6zZJ7zDM/maxresdefault.jpg",
    platform: "youtube",
    embed: "fNS6zZJ7zDM",
    description: "Role: Camera, Video Editor, Colorist",
    related: ["p01, p02, p03"]
  },
  {
    id: "p05",
    titleOverride: "Keune Business Dinner at the Bristol",
    type: "CAMERA · VIDEO EDITOR · COLORIST",
    thumb: "https://img.youtube.com/vi/CilpvYHEEO8/maxresdefault.jpg",
    platform: "youtube",
    embed: "CilpvYHEEO8",
    description: "Role: Camera, Video Editor, Colorist",
    related: ["p01", "p02", "p03"]
  },
  {
    id: "p06",
    titleOverride: "We Got Your Back | CAKE.com",
    type: "CAMERA · MOTION GRAPHICS DESIGNER",
    thumb: "../We Got Your Back Thumbnail.png",
    platform: "youtube",
    embed: "DwakqUxIr6A",
    description: "Role: Camera, Motion Graphics Designer",
    related: ["p01", "p02", "p03"]
  },
  {
    id: "p07",
    titleOverride: "Iron Maiden Tribute Aftermovie",
    type: "CAMERA",
    thumb: "https://img.youtube.com/vi/aKgrPhtxTTA/maxresdefault.jpg",
    platform: "youtube",
    embed: "aKgrPhtxTTA",
    description: "Role: Camera",
    related: ["p01", "p02", "p03"]
  },
  {
    id: "p08",
    titleOverride: "Barbershop Promotional Video",
    type: "CAMERA · VIDEO EDITOR · COLORIST",
    thumb: "https://img.youtube.com/vi/zA6qnh-IZWY/maxresdefault.jpg",
    platform: "youtube",
    embed: "zA6qnh-IZWY",
    description: "Role: Camera, Video Editor, Colorist",
    related: ["p01", "p02", "p03"]
  }
  
];
