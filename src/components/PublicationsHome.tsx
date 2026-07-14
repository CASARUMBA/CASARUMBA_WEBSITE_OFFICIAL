import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Download, Calendar } from "lucide-react";

export function Publications() {
  // const publications = [
  //   {
  //     title: "Teachers, stress, and the COVID-19 pandemic: A qualitative analysis",
  //     authors: "Luz E Robinson, Alberto Valido, Anne Drescher, Ashley B Woolweaver, Dorothy L Espelage, Scott LoMurray, Anna CJ Long, Ashlen A Wright, Megan M Dailey",
  //     journal: "JSchool Mental Health",
  //     year: "2023",
  //     volume: "15",
  //     pages: "78-89",
  //     doi: "https://doi.org/10.1007/s12310-022-09533-2",
  //     type: "Peer-Reviewed",
  //     abstract: "The 2020–2021 academic year brought numerous challenges to teachers across the country as they worked to educate students amidst the COVID-19 pandemic. The current study is a secondary data analysis of qualitative responses collected as part of a teacher survey to evaluate a social emotional learning curriculum implemented during the 2020–2021 academic year. The lived experiences of teachers (N = 52) across 11 elementary schools in the Great Plains region were captured through open-ended questions as the teachers transitioned from in-person to remote learning. A phenomenological approach was utilized to analyze the challenges expressed by teachers as they faced instability and additional professional demands. Given that stress and other factors that strain mental health exist within multiple layers of an individual's social ecology, a modified social-ecological framework was used to organize the results and themes. Findings suggest that during the academic year, teachers experienced stressors related to their personal and professional roles, concerns for students’ well-being which extended beyond academics, and frustrations with administration and other institutional entities around COVID safety measures. Without adequate support and inclusion of teacher perspectives, job-related stress may lead to teacher shortages, deterioration of teacher mental health, and ultimately worse outcomes for students. Implications for policy, research, and practice are discussed.",
  //     keywords: ["Teacher mental health", "Qualitative analysis", "COVID-19"]
  //    }
  // ];

  // const presentations = [
  //   {
  //     title: "Random Presentation that was done at some point and time.",
  //     presenters: "Chen, S., Patel, A., & Rodriguez, M.",
  //     conference: "Society for Research in Child Development Biennial Meeting",
  //     location: "Salt Lake City, UT",
  //     date: "March 2024",
  //     type: "Symposium"
  //   }
  // ];

  // return (
  //   <section id="publications" className="py-20 lg:py-32 bg-muted/30">
  //     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="text-center space-y-4 mb-16">
  //         <h2 className="text-3xl lg:text-4xl tracking-tight">Publications & Presentations</h2>
  //         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
  //           Our research findings contribute to the growing body of knowledge in child and adolescent mental health.
  //         </p>
  //       </div>

  //       <div className="space-y-12">
  //         {/* Recent Publications */}
  //         <div className="space-y-8">
  //           <h3 className="text-2xl tracking-tight">Recent Publications</h3>
  //           <div className="space-y-6">
  //             {publications.map((pub, index) => (
  //               <Card key={index} className="hover:shadow-md transition-shadow">
  //                 <CardHeader>
  //                   <div className="flex items-start justify-between gap-4">
  //                     <div className="space-y-2 flex-1">
  //                       <CardTitle className="text-lg leading-tight">{pub.title}</CardTitle>
  //                       <p className="text-sm text-muted-foreground">{pub.authors}</p>
  //                       <div className="flex items-center gap-2 text-sm">
  //                         <span className="text-primary">{pub.journal}</span>
  //                         <span>•</span>
  //                         <span>{pub.year}</span>
  //                         <span>•</span>
  //                         <span>{pub.volume}</span>
  //                         <span>•</span>
  //                         <span>pp. {pub.pages}</span>
  //                       </div>
  //                     </div>
  //                     <Badge variant="secondary">{pub.type}</Badge>
  //                   </div>
  //                 </CardHeader>
  //                 <CardContent className="space-y-4">
  //                   <p className="text-sm leading-relaxed">{pub.abstract}</p>
  //                   <div className="flex flex-wrap gap-2">
  //                     {pub.keywords.map((keyword, keywordIndex) => (
  //                       <Badge key={keywordIndex} variant="outline" className="text-xs">
  //                         {keyword}
  //                       </Badge>
  //                     ))}
  //                   </div>
  //                   <div className="flex items-center gap-2 pt-2">
  //                     <Button variant="outline" size="sm" className="h-8">
  //                       <ExternalLink className="h-3 w-3 mr-1" />
  //                       DOI: {pub.doi}
  //                     </Button>
  //                     <Button variant="outline" size="sm" className="h-8">
  //                       <Download className="h-3 w-3 mr-1" />
  //                       PDF
  //                     </Button>
  //                   </div>
  //                 </CardContent>
  //               </Card>
  //             ))}
  //           </div>
  //         </div>

  //         {/* Recent Presentations */}
  //         <div className="space-y-8">
  //           <h3 className="text-2xl tracking-tight">Recent Presentations</h3>
  //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //             {presentations.map((presentation, index) => (
  //               <Card key={index}>
  //                 <CardHeader>
  //                   <div className="space-y-2">
  //                     <Badge variant="secondary" className="w-fit">{presentation.type}</Badge>
  //                     <CardTitle className="text-lg leading-tight">{presentation.title}</CardTitle>
  //                     <p className="text-sm text-muted-foreground">{presentation.presenters}</p>
  //                   </div>
  //                 </CardHeader>
  //                 <CardContent className="space-y-3">
  //                   <div className="space-y-1">
  //                     <p className="text-sm font-medium">{presentation.conference}</p>
  //                     <p className="text-sm text-muted-foreground">{presentation.location}</p>
  //                   </div>
  //                   <div className="flex items-center gap-1 text-sm text-muted-foreground">
  //                     <Calendar className="h-3 w-3" />
  //                     <span>{presentation.date}</span>
  //                   </div>
  //                 </CardContent>
  //               </Card>
  //             ))}
  //           </div>
  //         </div>

  //         {/* Publication Statistics
  //         <div className="bg-background rounded-2xl p-8 border">
  //           <h3 className="text-2xl tracking-tight mb-6 text-center">Publication Impact</h3>
  //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  //             <div className="text-center">
  //               <div className="text-3xl text-primary mb-2">65</div>
  //               <div className="text-sm text-muted-foreground">Total Publications</div>
  //             </div>
  //             <div className="text-center">
  //               <div className="text-3xl text-primary mb-2">1,247</div>
  //               <div className="text-sm text-muted-foreground">Total Citations</div>
  //             </div>
  //             <div className="text-center">
  //               <div className="text-3xl text-primary mb-2">18.5</div>
  //               <div className="text-sm text-muted-foreground">Average Citations</div>
  //             </div>
  //             <div className="text-center">
  //               <div className="text-3xl text-primary mb-2">12</div>
  //               <div className="text-sm text-muted-foreground">Journal Impact Factor</div>
  //             </div>
  //           </div>
  //         </div> */}
  //       </div>
  //     </div>
  //   </section>
  // );
}

// // src/components/Publications.tsx
// import { useMemo } from "react";
// import publicationsData from "../data/publications.json";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { Button } from "./ui/button";
// import { ExternalLink, Download } from "lucide-react";
// import { Link } from "react-router-dom"; // if using react-router-dom; see note if not

// export function PublicationsHome() {
//   // sort once and memo
//   const sorted = useMemo(() => {
//     return [...publicationsData].sort((a, b) => (b.year || 0) - (a.year || 0));
//   }, []);

//   const recent = sorted.slice(0, 3); // three most recent

//   return (
//     <section id="publications" className="py-20 lg:py-32 bg-muted/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center space-y-4 mb-8">
//           <h2 className="text-3xl lg:text-4xl">Publications & Presentations</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Our research findings contribute to the growing body of knowledge in child and adolescent mental health.
//           </p>
//         </div>

//         <div className="space-y-6">
//           {recent.map((pub, index) => (
//             <Card key={index} className="hover:shadow-md transition-shadow">
//               <CardHeader>
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="space-y-2 flex-1">
//                     <CardTitle className="text-lg leading-tight">{pub.title}</CardTitle>
//                     <p className="text-sm text-muted-foreground">{pub.authors}</p>
//                     <div className="flex items-center gap-2 text-sm">
//                       <span className="text-primary">{pub.journal}</span>
//                       <span>•</span>
//                       <span>{pub.year}</span>
//                     </div>
//                   </div>
//                   <Badge variant="secondary">{pub.type}</Badge>
//                 </div>
//               </CardHeader>

//               <CardContent className="space-y-4">
//                 <p className="text-sm leading-relaxed line-clamp-3">{pub.abstract}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {(pub.keywords || []).map((keyword, i) => (
//                     <Badge key={i} variant="outline" className="text-xs">{keyword}</Badge>
//                   ))}
//                 </div>
//                 <div className="flex items-center gap-2 pt-2">
//                   <a href={pub.doi ? `https://doi.org/${pub.doi}` : "#"} target="_blank" rel="noreferrer">
//                     <Button variant="outline" size="sm" className="h-8">
//                       <ExternalLink className="h-3 w-3 mr-1" />
//                       View
//                     </Button>
//                   </a>
//                   <Button variant="outline" size="sm" className="h-8">PDF</Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}

//           <div className="mt-6 text-center">
//             {/* Navigate to full page */}
//             <Link to="/publications">
//               <Button size="lg">See all publications</Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
