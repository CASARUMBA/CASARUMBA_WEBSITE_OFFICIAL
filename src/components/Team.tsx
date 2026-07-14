import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, ExternalLink, X } from "lucide-react";
import { Button } from "./ui/button";

export function Team() {
  const [showModal, setShowModal] = useState(false);

  const teamMembers = [
    {
      name: "Dr. Luz Robinson",
      role: "Assistant Professor & CASA RUMBA Lab Director",
      credentials:
        "Ph.D. in School Psychology from the University of North Carolina at Chapel Hill",
      image:
        "https://carolinastories.unc.edu/wp-content/uploads/2022/08/luz_CS.png",
      bio: "Dr. Robinson’s research investigates student mental health and school safety...",
      expertise: ["School Psychology", "Adolescent Anxiety", "Community-Based Research"],
      email: "LR66@mailbox.sc.edu",
    },
    // SENIORS
    {
      name: "Gray Putnam",
      role: "Research Assistant",
      credentials: "Senior, University of South Carolina",
      image: "/images/team/grayputnam.png",
      bio: "Psychology Major from Greenwood, South Carolina",
      expertise: ["Project 3"],
      email: "DGPUTNAM@email.sc.edu",
    },
    {
      name: "Ana Leticia Graça Osorio",
      role: "Research Assistant",
      credentials: "Senior, University of South Carolina",
      image: "/images/team/cocky.jpg",
      bio: "Psychology Major from Rio de Janeiro, Brazil",
      expertise: ["Project 3"],
      email: "",
    },
        {
      name: "Ja'Leah Guenther",
      role: "Research Assistant",
      credentials: "Senior, University of South Carolina",
      image: "/images/team/Guenther.jpg",
      bio: "Psychology Major from Philadelphia",
      expertise: ["Project 3"],
      email: "",
    },
    // JUNIORS
    {
      name: "Danielle Cook",
      role: "Research Assistant",
      credentials: "Junior, University of South Carolina",
      image: "/images/team/danielle.png",
      bio:
        "Computer Science and Criminal Justice Major from Summerville, South Carolina",
      expertise: ["Project 5"],
      email: "COOKDJ@email.sc.edu",
    },
    {
      name: "Emerson Eichler",
      role: "Research Assistant",
      credentials: "Junior, University of South Carolina",
      image: "/images/team/eichleremerson_headshot.JPG",
      bio:
        "Psychology, Sociology, and Counselor Education Major from Austin, Texas",
      expertise: ["Project 1"],
      email: "EEICHLER@email.sc.edu",
    },
    {
      name: "Hannah Yamour",
      role: "Research Assistant",
      credentials: "Junior, University of South Carolina",
      image: "/images/team/hannahyamour.JPG",
      bio:
        "Psychology and Business Administration Major from Chicago, Illinois",
      expertise: ["Project 1"],
      email: "",
    },
    {
      name: "Lorraine (Rani) Shelton",
      role: "Research Assistant",
      credentials: "Junior, University of South Carolina",
      image: "/images/team/Shelton_L.jpeg",
      bio:
        "English, Psychology, and Women’s and Gender Studies Major from Myrtle Beach, SC",
      expertise: ["Project 2"],
      email: "",
    },
    {
      name: "Kyra Faulkingham",
      role: "Research Assistant",
      credentials: "Junior, University of South Carolina",
      image: "/images/team/Kyra_Faulking.jpg",
      bio: " Major Psychology, Windham, NH",
      expertise: [],
      email: "",
    },
    {
      name: "Natalie Fernandez",
      role: "Research Assistant",
      credentials: "Junior, University of South Carolina",
      image: "/images/team/cocky.jpg",
      bio: " Major Psychology, Minor in Neuroscience, New York, New York",
      expertise: ["Project 4"],
      email: "",
    },
        {
      name: "Natalie Ha",
      role: "Research Assistant",
      credentials: "Junior, University of South Carolina",
      image: "/images/team/NatalieHa.jpeg",
      bio: " Major Psychology, Lexington, South Carolina",
      expertise: ["Project 1"],
      email: "",
    },
    // SOPHMORES
    {
      name: "Carolina Battle",
      role: "Research Assistant",
      credentials: "Sophomore, University of South Carolina",
      image: "/images/team/Carolina.jpg",
      bio:
        "Psychology and Law and Society Major from Providence, Rhode Island",
      expertise: ["Project 5"],
      email: "",
    },
    {
      name: "Nicole Farmer-Reyes",
      role: "Research Assistant",
      credentials: "Sophomore, University of South Carolina",
      image: "/images/team/Nicole_Farmer.jpeg",
      bio: "Psychology and Neuroscience Major from Fort Mill, SC",
      expertise: ["Project 2"],
      email: "",
    },
    {
      name: "Nathalia Hernandez Perianez",
      role: "Research Assistant",
      credentials: "Sophomore, University of South Carolina",
      image: "/images/team/NathaliaHP_Headshot.jpg",
      bio: "Psychology Major from Charleston, South Carolina",
      expertise: ["Project 4"],
      email: "",
    },
    {
      name: "Christian Rice",
      role: "Research Assistant",
      credentials: "Sophomore, University of South Carolina",
      image: "/images/team/ChristianRice.jpeg",
      bio: "Psychology Major from Dyersburg, Tennessee",
      expertise: ["Project 3"],
      email: "",
    },
    {
      name: "Ximena Miramontes",
      role: "Research Assistant",
      credentials: "Sophomore, University of South Carolina",
      image: "/images/team/cocky.jpg",
      bio: "Psychology Major from Elloree, SC",
      expertise: ["Project 1"],
      email: "",
    },
    {
      name: "Grace Ryder",
      role: "Research Assistant",
      credentials: "Sophomore, University of South Carolina",
      image: "/images/team/GraceRyder.JPG",
      bio: " Major Psychology, Clinton, New Jersey",
      expertise: ["Project 1"],
      email: "",
    },
    {
      name: "Adedolapo Famuyide",
      role: "Research Assistant",
      credentials: "Sophomore, University of South Carolina",
      image: "/images/team/Dolapo.png",
      bio: "Major in Public Health, Minor in Psychology. Columbia, South Carolina",
      expertise: ["Project 5"],
      email: "",
    },
        {
      name: "Conner Roggers",
      role: "Research Assistant",
      credentials: "Sophomore, University of South Carolina",
      image: "/images/team/ConnerRogers.png",
      bio: "Major in Biological Sciences. Myrtle Beach, South Carolina",
      expertise: ["Project 2"],
      email: "",
    },
    // FRESHMAN
    {
      name: "Brooklyn Bailey",
      role: "Research Assistant",
      credentials: "Freshman, University of South Carolina",
      image: "/images/team/Brooklyn_Bailey.PNG",
      bio: "Psychology Major from Columbia, South Carolina",
      expertise: ["Project 4"],
      email: "BKBAILEY@email.sc.edu",
    },
    {
      name: "Elaine Wang",
      role: "Research Assistant",
      credentials: "Freshman, University of South Carolina",
      image: "/images/team/ElaineWang.jpeg",
      bio: "Nursing Major from Greenville, South Carolina",
      expertise: ["Project 3"],
      email: "EW93@email.sc.edu",
    },
    {
      name: "Jane Anne Goodman",
      role: "Research Assistant",
      credentials: "Freshman, University of South Carolina",
      image: "/images/team/JaneAnneGoodman-4117.jpeg",
      bio:
        "Psychology, Spanish, and Pre-Med Major from Little Rock, Arkansas",
      expertise: ["Project 4"],
      email: "",
    },
    {
      name: "Jordan Kobeck",
      role: "Research Assistant",
      credentials: "Freshman, University of South Carolina",
      image: "/images/team/Jordan.JPG",
      bio: "Psychology Major from The Bronx, New York",
      expertise: ["Project 5"],
      email: "",
    },
    {
      name: "Jake McGee",
      role: "Research Assistant",
      credentials: "Freshman, University of South Carolina",
      image: "/images/team/Jake.png",
      bio: "Psychology Major from Myrtle Beach, SC",
      expertise: ["Project 2"],
      email: "",
    },
        {
      name: "Carol Ouyang",
      role: "Research Assistant",
      credentials: "Freshman, University of South Carolina",
      image: "/images/team/CarolO.jpg",
      bio: "Psychology Major, Sociology Minor. Lexington, SC",
      expertise: [],
      email: "",
    },
  ];

  return (
    <section id="team" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl tracking-tight">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated researchers and clinicians working to advance child and adolescent mental health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3>{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.credentials}</p>
                </div>
                <p className="text-sm leading-relaxed">{member.bio}</p>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Our Team Section */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl tracking-tight">Join Our Team</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always looking for passionate researchers and students...
            </p>
            <Button className="mt-4" onClick={() => setShowModal(true)}>
              View Open Positions
            </Button>
          </div>
        </div>
      </div>

 {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
    <div className="bg-white dark:bg-[#1c1b3d] rounded-2xl shadow-xl max-w-md w-full p-8 text-center relative">

      {/* Close X */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Title */}
      <h4 className="text-xl font-semibold mb-3 text-[#141238] dark:text-white">
        Apply to Join CASA RUMBA
      </h4>

      {/* Text */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        We are currently accepting applications for research assistants and
        student team members. If you're interested in getting involved, submit
        the application below.
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-4 mt-8">

        {/* APPLY BUTTON */}
        <a
          href="https://forms.gle/hos4h7U1bDVVxyM6A"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center rounded-md bg-[#141238] px-6 py-3 text-sm font-medium text-white hover:bg-[#2a2763] transition-colors shadow"
        >
          Apply Now
        </a>

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setShowModal(false)}
          className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
        >
          Close
        </button>

      </div>
    </div>
  </div>
)}
    </section>
  );
}
