// Importing UI components (pre-built styled components)
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

// Custom image component (handles fallback if image fails)
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Icons used for each research area
import { Shield, Heart, Users2, BookOpen } from "lucide-react";

export function Research() {

  // ================= RESEARCH AREAS =================
  // This is the data for the top section (4 cards)
  const researchAreas = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />, // icon shown on card
      title: "School Safety & Educator Wellbeing",
      description:
        "Investigating factors that promote safe, supportive, and trauma-informed school environments for students and educators.",
      
      // These become the small badges under each card
      topics: [
        "Violence Prevention",
        "Educator Wellbeing",
        "Trauma-Informed Practices",
        "Crisis Response"
      ],
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Youth Mental Health & Resilience",
      description:
        "Studying how emotion regulation, protective factors, and connectedness shape youth mental health outcomes.",
      topics: [
        "Emotion Regulation",
        "Anxiety & Depression",
        "Protective Factors",
        "College Student Wellbeing"
      ],
    },
    {
      icon: <Users2 className="h-8 w-8 text-primary" />,
      title: "Community & Systems Collaboration",
      description:
        "Partnering with schools, families, and community organizations to translate research into practice and policy.",
      topics: [
        "Community Partnerships",
        "Implementation Science",
        "School-Community Collaboration",
        "Dissemination & Outreach"
      ],
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Policy & Prevention Research",
      description:
        "Reviewing and evaluating policies and prevention programs to improve access, equity, and safety in education systems.",
      topics: [
        "Bullying Prevention",
        "Suicide Prevention",
        "Policy Analysis",
        "Program Evaluation"
      ],
    },
  ];

  // ================= CURRENT PROJECTS =================
  // This is the list of active projects shown in the second section
  const currentProjects = [
    {
      title: "Project 1: Systematic Review of Bullying Prevention Programs in K–5 (Focused on Emotion Regulation)",
      status: "Literature Review", // shown as a badge
      description:
        "A systematic review synthesizing K–5 bullying prevention programs that include emotion regulation components to identify what works best for young students.",
      duration: "Fall 2025 – Spring 2026",
    },
    {
      title: "Project 2: Scoping Review on Suicide Prevention Policies and Practices in U.S. Universities",
      status: "Data Analysis",
      description:
        "A scoping review mapping suicide prevention efforts across large public universities to identify policy gaps and promising approaches.",
      duration: "Ongoing through Spring 2026",
    },
    {
      title: "Project 3: Qualitative Study on Violence Against Educators",
      status: "Qualitative Analysis",
      description:
        "A thematic analysis of survey data from US school psychologists exploring workplace violence and recommendations for safer schools.",
      duration: "Winter 2025 – Spring 2026",
    },
    {
      title: "Project 4: SONA Study on College Student Mental Health, Safety, and Protective Factors",
      status: "Mixed-Methods Study",
      description:
        "A mixed-methods project examining mental health, perceptions of safety, and resilience among college students.",
      duration: "Launch Fall 2025",
    },
    {
      title: "Project 5: Community Partnerships, Website, Social Media, and Lab Outreach",
      status: "Outreach & Engagement",
      description:
        "Building relationships with community partners, managing CASA RUMBA’s online presence, and supporting grant writing and conference presentations.",
      duration: "Ongoing",
    },
  ];

  return (

    // Main section (id used for scrolling from navbar)
    <section id="research" className="py-20 lg:py-32 bg-muted/30">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center space-y-4 mb-16">

          <h2 className="text-3xl lg:text-4xl tracking-tight">
            Research Areas
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our lab examines school safety, mental health, and community collaboration.
          </p>
        </div>

        {/* ================= RESEARCH AREA CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

          {/* Loop through researchAreas array */}
          {researchAreas.map((area, index) => (

            <Card key={index} className="h-full">

              <CardHeader>

                {/* Icon + Title */}
                <div className="flex items-center space-x-4 mb-4">
                  {area.icon}
                  <CardTitle>{area.title}</CardTitle>
                </div>

                {/* Description */}
                <p className="text-muted-foreground">
                  {area.description}
                </p>

              </CardHeader>

              <CardContent>

                {/* Topics shown as badges */}
                <div className="flex flex-wrap gap-2">

                  {area.topics.map((topic, topicIndex) => (
                    <Badge key={topicIndex} variant="secondary">
                      {topic}
                    </Badge>
                  ))}

                </div>

              </CardContent>
            </Card>
          ))}

        </div>

        {/* ================= CURRENT PROJECTS SECTION ================= */}
        <div className="space-y-12">

          {/* Section title */}
          <div className="text-center space-y-4">

            <h3 className="text-2xl lg:text-3xl tracking-tight">
              Current Projects
            </h3>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our ongoing projects focused on safety, mental health, and collaboration.
            </p>
          </div>

          {/* Layout: projects on left, image on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* ================= PROJECT CARDS ================= */}
            <div className="space-y-6">

              {currentProjects.map((project, index) => (

                <Card key={index}>

                  <CardHeader>

                    {/* Title + Status badge */}
                    <div className="flex items-start justify-between">

                      <CardTitle className="text-lg">
                        {project.title}
                      </CardTitle>

                      {/* Badge changes style if status = Recruiting */}
                      <Badge
                        variant={
                          project.status === "Recruiting"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Project duration */}
                    <p className="text-sm text-muted-foreground">
                      {project.duration}
                    </p>

                  </CardHeader>

                  <CardContent>

                    {/* Project description */}
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>

                  </CardContent>
                </Card>
              ))}

            </div>

            {/* ================= SIDE IMAGE ================= */}
            <div className="lg:sticky lg:top-8">
              {/* sticky makes it stay visible while scrolling */}

              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">

                <ImageWithFallback
                  src="/images/team/CASARUMBATEAM.png"
                  alt="CASA RUMBA research team collaborating"
                  className="w-full h-full object-cover"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}